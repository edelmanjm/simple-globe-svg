/**
 * @category Globe
 * @module Globe Camera Classes
 */

import { Coord } from '../classes'
import { EMPTY_COORD } from '../constants'
import { MutableState } from '../types'

/**
 * @category Data
 */
export class CameraData {
  constructor(public rotation: Coord = EMPTY_COORD) {}
}
/**
 * @property [[CameraSettings|settings]]
 * @category Props
 */
export class CameraProps {
  settings?: MutableState<CameraData>
}
