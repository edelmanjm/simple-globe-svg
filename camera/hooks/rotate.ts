/**
 * deal with camera rotation
 * @category Globe
 * @module Globe Camera Rotate
 */

import { useCallback, useMemo, useEffect } from "react";
import { noop } from "lodash";

import { useEffectOnChange, useStates } from "../../hooks";
import { limit, reflect } from "../../utils";
import { useViewScaling } from "../../view/hooks";
import { EMPTY_MUTABLE_STATE } from "../../constants";
import { ROTATION_SENSITIVITY, ROTATION_Y_LIMIT } from "../constants";
import { Coord } from "../../classes";
import { MutableState } from "../../types";
import { CameraProps } from "../classes";

function limitY(delta: number) {
  return (from: number) => limit(from, from - delta, ROTATION_Y_LIMIT);
}

function reflectX(delta: number) {
  return (from: number) => reflect(from + delta, 180);
}

/**
 * @category Handler
 */
export class CameraRotationHandler {
  constructor(
    public x: MutableState<number> = EMPTY_MUTABLE_STATE,
    public y: MutableState<number> = EMPTY_MUTABLE_STATE,
    public rotateX: (delta: number) => void = noop,
    public rotateY: (delta: number) => void = noop,
    public rotate: (c: Coord) => void = noop
  ) {}
}
/**
 * @category Shape
 */
export const CAMERA_ROTATION_HANDLER = new CameraRotationHandler();

/**
 *
 * @category Handler
 * @param settings can be loaded from outside module into [[CameraProps]]
 */
export function useCameraRotationHandler(
  settings: CameraProps["settings"] = [{ rotation: new Coord() }, noop]
): CameraRotationHandler {
  const [
    {
      rotation: [initialX, initialY],
    },
    controller,
  ] = settings;
  const [scale] = useViewScaling();
  const rotation = useStates([initialX, initialY]);
  const [
    [x, y],
    // dispatch
  ] = rotation;
  const [rX, setRX] = x;
  const [rY, setRY] = y;

  // update settings data
  useEffect(() => {
    if (initialX !== rX || initialY !== rY)
      controller((curr) => ({ ...curr, rotation: new Coord(rX, rY) }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rX, rY, controller]);

  // update rotation x with settings data
  useEffectOnChange(initialX, setRX);

  // update rotation y with settings data
  useEffectOnChange(initialY, setRY);

  // ensure smooth rotation
  const sensitivity = useMemo(() => ROTATION_SENSITIVITY / scale, [scale]);
  const smoothRotation = useCallback(
    (angle: number) => angle * sensitivity,
    [sensitivity]
  );

  // smooth and mirror x movement
  const rotateX = useCallback(
    (deltaX: number) => {
      if (deltaX === 0) return;
      setRX((current) => {
        const rotated = smoothRotation(deltaX);
        return reflectX(rotated)(current);
      });
    },
    [setRX, smoothRotation]
  );
  // smooth and limit y movement
  const rotateY = useCallback(
    (deltaY: number) => {
      if (deltaY === 0) return;
      setRY((current) => {
        const rotated = smoothRotation(deltaY);
        return limitY(rotated)(current);
      });
    },
    [setRY, smoothRotation]
  );
  // applies delta into rotation, mirror x and limit y
  const rotate: CameraRotationHandler["rotate"] = useCallback(
    ([xx, yy]) => {
      rotateX(xx);
      rotateY(yy);
    },
    [rotateX, rotateY]
  );
  return {
    x,
    y,
    rotateX,
    rotateY,
    rotate,
  };
}
