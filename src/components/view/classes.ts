/**
 * @category Globe
 * @module Globe View Classes
 */

import { Point } from '../classes'
import { EMPTY_POINT } from '../constants'
import { MutableState } from '../types'
import { INITIAL_SCALE } from './constants'

/**
 * @category Data
 */
export class ViewData {
  constructor(
    public dimensions: Point = EMPTY_POINT,
    public scale: number = INITIAL_SCALE,
    public target: HTMLElement | null = null,
    public fetchToTarget: boolean = false
  ) {}
}

/**
 * @category Props
 */
export class ViewProps {
  settings?: MutableState<ViewData>
}
