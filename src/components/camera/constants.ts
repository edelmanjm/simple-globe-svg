/**
 * @category Globe
 * @module Globe Camera Constants
 */

import { Coord } from '../classes'
import { EMPTY_COORD } from '../constants'
import { CameraData } from './classes'

export const INITIAL_ORIGIN_X = 0
export const INITIAL_ORIGIN_Y = 0
export const INITIAL_ROTATION = new Coord(INITIAL_ORIGIN_X, INITIAL_ORIGIN_Y)
export const ROTATION_Y_LIMIT = 60
export const ROTATION_SENSITIVITY = 85

/**
 * @category Initial
 */
export const CONSTANTS = {
  INITIAL_ORIGIN_X,
  INITIAL_ORIGIN_Y,
  ROTATION_Y_LIMIT,
  ROTATION_SENSITIVITY,
}

/**
 * @category Empty
 */
export const EMPTY_CAMERA_DATA: CameraData = {
  rotation: EMPTY_COORD,
}
