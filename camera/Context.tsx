/**
 * @category Globe
 * @module Globe Camera Context
 */
import React from 'react'
import { createContext, PropsWithChildren, useMemo, useRef } from 'react'
import { Coord } from '../classes'
import { EMPTY_COORD, EMPTY_REF } from '../constants'
import { CameraProps } from './classes'
import {
  CameraRotationHandler,
  CAMERA_ROTATION_HANDLER,
  useCameraRotationHandler,
} from './hooks/rotate'

export class CameraContextValue {
  constructor(
    public center: Coord = EMPTY_COORD,
    public rotation: CameraRotationHandler = CAMERA_ROTATION_HANDLER,
    public ref: React.MutableRefObject<HTMLDivElement | null> = EMPTY_REF
  ) {}
}

const EMPTY_CONTEXT_VALUE = new CameraContextValue()

/**
 * @category Context
 */
export const CameraContext =
  createContext<CameraContextValue>(EMPTY_CONTEXT_VALUE)

/**
 * provides [[CameraContextValue]]
 * @category Context
 * @param props
 * @returns [[CameraContext]]
 */
export function CameraProvider({
  children,
  settings,
}: PropsWithChildren<Pick<CameraProps, 'settings'>>) {

  const ref = useRef(null)
  const rotation = useCameraRotationHandler(settings)
  const {
    x: [rX],
    y: [rY],
  } = rotation
  const center = useMemo(() => new Coord(rX * -1, rY * -1), [rX, rY])
  const value = useMemo<CameraContextValue>(
    () => ({
      rotation,
      center,
      ref,
    }),
    [center, rotation]
  )
  return (
    <CameraContext.Provider value={value}>{children}</CameraContext.Provider>
  )
}
