/**
 * @category Globe
 * @module Globe View Constants
 */

import { Point } from '../classes'
import { ViewData } from './classes'

/**
 * @category Initial
 */
export const INITIAL_WIDTH = 800

/**
 * @category Initial
 */
export const INITIAL_HEIGHT = 600
/**
 * @category Initial
 */
export const INITIAL_DIMENSIONS = new Point(INITIAL_WIDTH, INITIAL_HEIGHT)
/**
 * @category Initial
 */
export const ZOOM_SENSITIVITY = 1.5
/**
 * @category Initial
 */
export const INITIAL_SCALE = 50 ** ZOOM_SENSITIVITY
/**
 * @category Empty
 */
export const EMPTY_VIEW_DATA = new ViewData()
