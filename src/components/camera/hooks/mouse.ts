/**
 * deal with camera mouse events
 * @category Globe
 * @module Globe Camera Mouse
 */
import { MouseEventHandler, useCallback, WheelEventHandler } from "react";
import { useViewZooming } from "../../view/hooks";
import { useStates } from "../../hooks";
import { MutableStates } from "../../types";
import { EMPTY_COORD } from "../../constants";

/**
 * @category Alias
 */
export interface OnMouseMoveEvent extends MouseEventHandler {}
/**
 * @event MouseEventHandler
 * @category Alias
 */
export interface OnMouseStopEvent extends MouseEventHandler {
  (): void;
}
/**
 * @category Alias
 */
export interface OnWheelEvent extends WheelEventHandler {}

/**
 * @category Controller
 */
export interface MouseMoveController {
  x: number;
  y: number;
  move: OnMouseMoveEvent;
  stop: OnMouseStopEvent;
}

/**
 * @category Controller
 */
export function useMouseMoveController(): MouseMoveController {
  const [[[x, setX], [y, setY]], dispatch]: MutableStates<number> =
    useStates(EMPTY_COORD);

  // sets delta by mouse drag event
  const move = useCallback<OnMouseMoveEvent>(
    (e) => {
      if (!e) return;
      const { movementX, movementY } = e;
      if (movementX !== 0) setX((curr) => curr + movementX);
      if (movementY !== 0) setY((curr) => curr + movementY);
    },
    [setX, setY]
  );
  const stop = useCallback(() => {
    dispatch(0);
  }, [dispatch]);
  return { x, y, move, stop };
}

/**
 * @property `zoomIn` setScale [[ViewContextValue.scaling]]
 * @property `zoomOut` setScale [[ViewContextValue.scaling]]
 * @property `onWheelZoom` fires zoom (in/out)
 *
 * @category Controller
 */
export function useMouseWheelController(): OnWheelEvent {
  const { zoomIn, zoomOut } = useViewZooming();
  return useCallback<OnWheelEvent>(
    ({ deltaY }) => {
      if (deltaY < 0) zoomIn();
      else if (deltaY > 0) zoomOut();
    },
    [zoomIn, zoomOut]
  );
}

/**
 * @category Controller
 */
export function useMouseController() {
  const { x, y, move, stop } = useMouseMoveController();
  const zoom = useMouseWheelController();
  return { x, y, move, stop, zoom };
}
