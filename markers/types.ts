/**
 * @category Globe
 * @module Globe Markers Types
 */

import { Coord } from '../classes'
import { HandleEventProps } from '../events/types'

/**
 * used to switch from marker shapes at [[Pin]]
 * @category Enum
 */
export enum PinShape {
  CIRCLE = 'circle',
  LOCATION = 'location',
}
/**
 * list of pin shape names
 * @category Alias
 */
export type PinShapes = keyof PinShape | string
/**
 * svg attributes forward
 * @category Props
 */
export type PinProps<T = SVGPathElement> = React.SVGProps<T>
/**
 * svg props overrides theme
 * @category Data
 */
export interface PinData {
  shape?: PinShapes
}

/**
 * svg attributes forward
 * @category Props
 */
export type LabelProps<T = SVGTextElement> = React.SVGProps<T>
/**
 * label data
 * @category Data
 */
export interface LabelData {
  text: string
}
/**
 * forwarded on events with [[MarkerData]]
 * @property pin - forwarded into [[Pin]] or custom svg
 * @property label - forwarded into `text`
 * @property props - forwarded into `g` svg element
 * @category Props
 */
export interface MarkerProps {
  pin?: PinProps & PinData
  label?: LabelProps & LabelData
  props?: React.SVGProps<SVGGElement> & HandleEventProps
}

/**
 * @category Data
 * @property id - unique identifier
 * @property coordinates - where to affix the marker
 */
export interface MarkerData extends MarkerProps {
  id: string
  coordinates: Coord
  svg?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

/**
 * data will be forwarded to `g` svg element of Marker component
 * @category Data
 * @globeMarkerData forwarded data
 */
export interface MarkerForwardedData {
  globeMarkerData: MarkerData
}
