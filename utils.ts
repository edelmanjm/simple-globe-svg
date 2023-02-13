/**
 * utility functions to handle axis and coords
 * @category Globe
 * @module Globe Utils
 */

import { Line, Point } from './classes'
import { EMPTY_OBJECT } from './constants'

/**
 * if absolute value of origin is smaller than limit value
 * @category Condition
 * @param origin - will take its absolute value
 * @param limit - should be positive in order to work properly
 * @returns absolute(`origin`) < `limit`
 */
export function inAbsRange(origin: number, limit: number): boolean {
  return Math.abs(origin) < limit
}

/**
 * limit projected `to` value into the `range`
 * @category Operation
 * @param from - starting value
 * @param to - projected value
 * @param range - max value `to` should reach
 * @returns `to` if is [[inAbsRange]] else `from`
 */
export function limit(from: number, to: number, range: number): number {
  return inAbsRange(to, range) ? to : from
}

/**
 * reflects a projected value back into its axis\
 * `to` will be reflected between `into ~ -into`
 * @category Operation
 *
 * @param to - projected value
 * @param into - limit `to` can reaches
 * @returns the reflected axis value
 */
export function reflect(to: number, into: number): number {
  try {
    if (!inAbsRange(to, into)) {
      if (to > 0) {
        return reflect((to % into) - into, into)
      } else {
        return reflect((to % into) + into, into)
      }
    }
  } catch (e) {
    return 0
  }
  return to
}

/**
 * accepts positive and negative at any order
 * @category Operation
 * @returns difference between `a` to `b`
 */
export function diff(a: number, b: number): number {
  return a > b ? a - b : b - a
}
/**
 * first param may be initial position
 * @category Operation
 * @returns diff between `initial` to `last` regarded direction
 */
export function axisDiff(initial: number, last: number): number {
  const result = diff(initial, last)
  return initial > last ? -result : result
}

/**
 * takes distance between two [[Point]]\
 * accepts positive and negative at any order
 * @category Operation
 * @param a - any point
 * @param b - other point
 * @returns distance between `a` and `b`
 */
export function getDistance(a: Point, b: Point) {
  let deltaX = diff(a.x, b.x)
  let deltaY = diff(a.y, b.y)
  const dist = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2))
  return dist
}

/**
 * takes distance between two [[Coord]]\
 * accepts positive and negative at any order
 * @category Operation
 * @param el any html element
 * @returns [[Line]] diagonal of element bounding box
 */
export function getDOMRectDiagonal(el: Element): Line {
  const { left, top, right, bottom } = el.getBoundingClientRect()
  return new Line(Line.point(left, top), Line.point(right, bottom))
}

/**
 * Simple object check.
 * @category Condition
 * @param item
 * @returns {boolean}
 */
export function isObject(item: Record<string, any> = EMPTY_OBJECT) {
  return item && typeof item === 'object' && !Array.isArray(item)
}

/**
 * merge and overwrite objects recursively
 * @category Tool
 * @param target - overwritten object
 * @param source - properties to merge on
 * @returns merged objects
 */
export default function mergeDeep(
  target: Record<string, any> = EMPTY_OBJECT,
  source: Record<string, any> = EMPTY_OBJECT
) {
  let output = Object.assign({}, target)
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key])) {
        if (!(key in target)) Object.assign(output, { [key]: source[key] })
        else output[key] = mergeDeep(target[key], source[key])
      } else {
        Object.assign(output, { [key]: source[key] })
      }
    })
  }
  return output
}
