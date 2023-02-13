/**
 * @category Globe
 * @module Globe View Hooks
 */
import { useContext, useMemo } from 'react'
import { ZOOM_SENSITIVITY } from './constants'
import { ViewContext } from './Context'

/**
 * @category Context
 */
export const useViewContext = () => useContext(ViewContext)
/**
 * @category Selector
 */
export const useViewDimensions = () => useContext(ViewContext).dimensions
/**
 * @category Selector
 */
export const useViewScaling = () => useContext(ViewContext).scaling
/**
 * @category Selector
 */

export const useViewZooming = () => {
  const [, scaling] = useViewScaling()
  return useMemo(
    () => ({
      zoom: (factor: number) => scaling((curr) => curr * factor),
      zoomIn: () => scaling((curr: number) => curr * ZOOM_SENSITIVITY),
      zoomOut: () => scaling((curr: number) => curr / ZOOM_SENSITIVITY),
    }),
    [scaling]
  )
}
/**
 * @category Operation
 */
export const useViewRatio = () => {
  const [[[w], [h]]] = useViewDimensions()
  return w / h
}
