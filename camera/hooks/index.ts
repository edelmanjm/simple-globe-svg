/**
 * @category Globe
 * @module Globe Camera Hooks
 */
import { useContext, useCallback } from 'react'

import { getDistance, getDOMRectDiagonal } from '../../utils'

import { CameraContext } from '../Context'
import { polygonContains } from 'd3'
import { Coord, Point, Rectangle } from '../../classes'

/**
 * @category Context
 */
export const useCameraContext = () => useContext(CameraContext)

/**
 * needed?
 * @category Context
 */
export function useCameraScreen() {
  const { ref } = useCameraContext()
  return { ref }
}

/**
 * not using
 * test it
 * @category Operation
 * @returns distance between camera center and coord
 */
export function useScreenContains() {
  const { ref } = useCameraScreen()
  return useCallback(
    (point: Point) => {
      if (!ref) return false
      const { current } = ref
      if (!current) return false
      const diag = getDOMRectDiagonal(current)
      return polygonContains(new Rectangle(diag).toArray(), point.toArray())
    },
    [ref]
  )
}

/**
 * @category Operation
 * @returns distance between camera center and coord
 */
export function useCameraCenterDistance() {
  const {
    center: [x, y],
  } = useCameraContext()
  return useCallback(
    (coord: Coord) => {
      const distance = getDistance(new Coord(x, y), coord)
      return distance
    },
    [x, y]
  )
}
