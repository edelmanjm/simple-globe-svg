/**
 * @category Globe
 * @module Globe Constants
 */

import { noop } from 'lodash'
import { Coord, Line, Point } from './classes'
import { DispatchState, MutableState } from './types'

/**
 * `() => noop`\
 * used as initial [[EMPTY_MUTABLE_STATES]] dispatch
 * @category Empty
 */
export const EMPTY_DISPATCH_PROXY: DispatchState<any> = noop
/**
 * `[null, noop]`\
 * used as initial value for [[MutableState]]
 * @category Empty
 */
export const EMPTY_MUTABLE_STATE: MutableState<any> = [null, noop]

/**
 * @category Empty
 */
export const EMPTY_POINT = new Point()

/**
 * @category Empty
 */
export const EMPTY_COORD = new Coord()
/**
 * @category Empty
 */
export const EMPTY_LINE = new Line()

/**
 * @category Empty
 */
export const EMPTY_AXLE = EMPTY_POINT.toArray()

/**
 * @category Empty
 */
export const EMPTY_OBJECT = Object.freeze({})

/**
 * @category Empty
 */
export const EMPTY_REF = Object.freeze({ current: null })
