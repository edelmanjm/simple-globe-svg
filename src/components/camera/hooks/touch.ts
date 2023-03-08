/**
 * deal with touch events
 * @category Globe
 * @module Globe Camera Touch
 */
import React, { TouchEventHandler, useCallback, useEffect } from "react";
import { useMemo } from "react";
import { Point } from "../../classes";
import { useGetDistance, useStates } from "../../hooks";
import { axisDiff, limit } from "../../utils";
import { useViewZooming } from "../../view/hooks";

/**
 * @event TouchEventHandler
 */
export interface OnTouchMoveEvent extends TouchEventHandler {}
/**
 * @event TouchEventHandler
 */
export interface OnTouchStopEvent extends TouchEventHandler {
  (e?: TouchEvent): void;
}

export interface TouchMoveController {
  id: number | null;
  x: number;
  y: number;
  move: OnTouchMoveEvent;
  stop: OnTouchStopEvent;
}

const EMPTY_TOUCH_MOVE_CONTROLLER_STATES = [null, null, null, null, null];
const TOUCH_MOVE_SENSITIVITY = 1.5;

/**
 * todo docs
 * listen `index` screen touch movement
 *
 * @category Controller
 */
export function useTouchMoveController(index: number = 0): TouchMoveController {
  const [
    [[id, setId], [x1, setX1], [x2, setX2], [y1, setY1], [y2, setY2]],
    dispatch,
  ] = useStates<number | null>(EMPTY_TOUCH_MOVE_CONTROLLER_STATES);

  const setInitial = useCallback(
    ({ identifier, clientX, clientY }: React.Touch) => {
      setId(identifier);
      setX1(clientX);
      setY1(clientY);
    },
    [setId, setX1, setY1]
  );
  const setLast = useCallback(
    ({ clientX, clientY }: React.Touch) => {
      setX2(clientX);
      setY2(clientY);
    },
    [setX2, setY2]
  );

  const x = useMemo(() => {
    if (!(x1 && x2)) return 0;
    return axisDiff(x1, x2) * TOUCH_MOVE_SENSITIVITY;
  }, [x1, x2]);
  const y = useMemo(() => {
    if (!(y1 && y2)) return 0;
    return axisDiff(y1, y2) * TOUCH_MOVE_SENSITIVITY;
  }, [y1, y2]);

  const move = useCallback<OnTouchMoveEvent>(
    (e) => {
      if (!e) return;
      const { changedTouches } = e;
      if (!(changedTouches.length > 0)) return;
      const current = changedTouches.item(index);
      if (id === null) return setInitial(current);
      if (id === current.identifier) setLast(current);
    },
    [id, index, setInitial, setLast]
  );
  const stop = useCallback<OnTouchStopEvent>(
    (e) => {
      if (e) {
        const enabledEvent = e.changedTouches.length > 0;
        if (!enabledEvent) return dispatch(null);
        const current = e.changedTouches.item(index);
        if (id === current?.identifier) dispatch(null);
      } else dispatch(null);
    },
    [id, index]
  );
  return { id, x, y, move, stop };
}

/**
 * todo docs
 * @category Controller
 */
export interface TouchPinchDelta {
  delta: number;
  pinch: OnTouchMoveEvent;
  release: OnTouchStopEvent;
}

/**
 * todo docs
 * @category Controller
 */
export function useTouchPinchDelta(): TouchPinchDelta {
  const [[[initZ, setInitZ], [lastZ, setLastZ]], dispatch] = useStates<
    number | null
  >([null, null]);
  const delta = useMemo(() => {
    if (lastZ === null || initZ === null) return 0;
    const dif = lastZ - initZ;
    return dif;
  }, [initZ, lastZ]);

  const getDistance = useGetDistance();
  const release = useCallback<OnTouchStopEvent>(() => {
    dispatch(null);
  }, [dispatch]);
  const pinch = useCallback<OnTouchMoveEvent>(
    (e) => {
      if (!e) return;
      const { clientX: xA, clientY: yA } = e.changedTouches.item(0);
      const { clientX: xB, clientY: yB } = e.changedTouches.item(1);
      const distance = getDistance(new Point(xA, yA), new Point(xB, yB));
      if (initZ === null) return setInitZ(distance);
      return setLastZ(distance);
    },
    [getDistance, initZ, setInitZ, setLastZ]
  );
  return { delta, pinch, release };
}
/**
 * todo docs
 * @category Controller
 */
export function useTouchController(): TouchMoveController {
  const movement = useTouchMoveController();
  const { delta, pinch, release } = useTouchPinchDelta();
  const { zoom } = useViewZooming();
  useEffect(() => {
    if (delta === 0) return;
    const limited = limit(delta % 100, delta, 100) / 100;
    const factor = 1 + limited;
    zoom(factor);
    return release;
  }, [delta, release, zoom]);
  const { move, stop } = movement;
  const handle = useCallback<OnTouchMoveEvent>(
    (e) => {
      if (!e) return;
      const { changedTouches } = e;
      if (changedTouches.length === 0) return;
      if (changedTouches.length === 1) return move(e);
      if (changedTouches.length === 2) return pinch(e);
    },
    [move, pinch]
  );
  const bypass = useCallback<OnTouchStopEvent>(() => {
    stop();
    release();
  }, [release, stop]);
  movement.move = handle;
  movement.stop = bypass;
  return movement;
}
