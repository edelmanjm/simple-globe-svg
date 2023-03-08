/**
 * applies camera events into `HTMLDivElement`
 * @category Globe
 * @module Globe Camera Screen
 */

import React, { useCallback, useEffect, useMemo } from "react";
import { Coord } from "../classes";
import { useBooleanState, useParamBroadcast } from "../hooks";

import { useCameraContext } from "./hooks/index";
import { useMouseController } from "./hooks/mouse";
import { useTouchController } from "./hooks/touch";
import { CameraForwardedData, ScreenProps } from "./types";

const STYLE: React.CSSProperties = {
  userSelect: "none",
  touchAction: "none",
  contentVisibility: "auto",
};

/**
 * those will be used by camera for rotation handling
 * @event Internal
 */
export const CAMERA_EVENTS: [
  "onWheel",
  "onMouseUp",
  "onMouseLeave",
  "onMouseDown",
  "onMouseMove"
] = ["onWheel", "onMouseUp", "onMouseLeave", "onMouseDown", "onMouseMove"];

/**
 * todo review docs
 *
 *
 * @hook [[useCameraContext]] rotation and zoom controllers
 * @hook [[useBooleanState]] for draggin handle
 * @hook [[useMouseMoveController]] catch mouse movement
 * @hook [[useTouchMoveController]] catch touch movement
 * @hook [[useParamBroadcast]] injects [[CameraForwardedData]] into `camera events`
 * >`onMouseUp onMouseDown onMouseMove onTouchMove onTouchEnd onTouchStart`
 *
 * @category Component
 * @param props
 * @returns
 * >[[OnEvents]] injects [[CameraForwardedData]] into [[SUPPORTED_CAMERA_EVENTS]]
 * >>`HTMLDivElement`
 * >>>`children`
 */
export function Screen({ children, ...props }: ScreenProps) {
  const { rotation } = useCameraContext();
  const { bool: isDragging, trully: drag, falsy: drop } = useBooleanState();
  const {
    x: [x],
    y: [y],
    rotateX,
    rotateY,
  } = rotation;
  const {
    x: mX,
    y: mY,
    move: mMove,
    stop: mStop,
    zoom: mZoom,
  } = useMouseController();
  const onMouseMoveRotate = useCallback(() => {
    rotateX(mX);
    rotateY(mY);
    mStop();
  }, [mX, mY, rotateX, rotateY, mStop]);
  useEffect(onMouseMoveRotate, [onMouseMoveRotate]);
  const { x: tX, y: tY, move: tMove, stop: tStop } = useTouchController();
  const onTouchMoveRotate = useCallback(() => {
    if (tX !== 0 && tY !== 0) {
      rotateX(tX);
      rotateY(tY);
      tStop();
    }
  }, [tX, tY, rotateX, rotateY, tStop]);
  useEffect(onTouchMoveRotate, [onTouchMoveRotate]);
  const data = useMemo<CameraForwardedData>(
    () => ({ globeCameraData: { isDragging, rotation: new Coord(x, y) } }),
    [isDragging, x, y]
  );
  const broadcast = useParamBroadcast(data);
  const onWheel = broadcast([mZoom, props.onWheel]);
  const onMouseUp = broadcast([mStop, drop, props.onMouseUp]);
  const onMouseDown = broadcast([drag, props.onMouseDown]);
  const onMouseMove = broadcast([isDragging && mMove, props.onMouseMove]);
  const onTouchMove = broadcast([isDragging && tMove, props.onTouchMove]);
  const onTouchEnd = broadcast([tStop, drop, props.onTouchEnd]);
  const onTouchStart = broadcast([drag, props.onTouchStart]);
  // const { ref } = useCameraScreen()
  return (
    <div
      // ref={ref}
      draggable="false"
      onWheel={onWheel}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onTouchStart={onTouchStart}
      style={STYLE}
    >
      {children}
    </div>
  );
}
