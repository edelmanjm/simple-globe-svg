/**
 * @category Globe
 * @module Globe Camera Classes
 */

import { Coord } from "../classes";
import { EMPTY_COORD } from "../constants";

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
  settings?: CameraData;
}
