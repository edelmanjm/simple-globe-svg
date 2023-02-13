/**
 * @category Globe
 * @module Globe Projection Context
 */

import { createContext } from 'react'
import { GeoPath, GeoProjection } from 'd3-geo'

/**
 * @category Props
 */
export interface D3GeoProjection extends GeoProjection {}

/**
 * @property [projection](https://github.com/d3/d3-geo-projection)
 * @category Value
 */
export class ProjectionContextValue {
  constructor(
    public width: number = 0,
    public height: number = 0,
    public projection: D3GeoProjection | null = null,
    public path: GeoPath | null = null
  ) {}
}

/**
 * @category Empty
 */
export const EMPTY_PROJECTION_CONTEXT_VALUE = new ProjectionContextValue()

/**
 * @category Component
 */
export const ProjectionContext = createContext<ProjectionContextValue>(
  EMPTY_PROJECTION_CONTEXT_VALUE
)
