/**
 * @category Globe
 * @module Globe Cartography Types
 */
import { Geometry } from 'geojson'

import { MutableState } from '../types'
import { HandleEventProps } from '../events/types'
import { CartographyData } from './classes'

/**
 * @category Props
 */
export interface PathProps
  extends Partial<HandleEventProps>,
    React.SVGProps<SVGPathElement> {
  geo: GeoJSON.Feature
}
/**
 * forwarded into Path events by [[OnEvents]]
 * @category Data
 */
export interface PathForwardedData {
  globePathData: PathProps['geo']
}

/**
 * @category Props
 */
export interface CartographyProps {
  settings?: MutableState<CartographyData>
  geo?: Partial<PathProps>
}

/**
 * @category Alias
 */
export interface TopologyFeatures extends GeoJSON.FeatureCollection {}

/**
 * @category Alias
 */
export interface Topology extends TopoJSON.Topology {}
/**
 * @category Alias
 */
export interface Feature
  extends GeoJSON.Feature<Geometry, GeoJSON.GeoJsonProperties> {}

/**
 * @category Hook
 */
export interface UseTopologyFeatures {
  (name?: string): Feature[]
}
