/**
 * @category Globe
 * @module Globe Cartography Hooks
 */
import React from 'react'
import _ from 'lodash'
import { useCallback, useMemo } from 'react'
import { feature } from 'topojson-client'
import { useProjectionContext } from '../projection/hooks'
import { Topology, TopologyFeatures, UseTopologyFeatures } from './types'

/**
 * @category Callback
 * @returns callback to get topojson object features
 */
export function useTopologyFeatures(topology?: Topology) {
  return useCallback<UseTopologyFeatures>(
    (name) => {
      if (!topology || !name) return []
      const { features } = feature(
        topology,
        topology.objects[name]
      ) as TopologyFeatures
      return features
    },
    [topology]
  )
}

export type Topologies = Record<string, GeoJSON.Feature[]>

export interface TopologyLoader {
  topology?: TopoJSON.Topology<TopoJSON.Objects<GeoJSON.GeoJsonProperties>>
  features: GeoJSON.Feature[][]
  keys: string[]
  topologies: Topologies
}
/**
 * @category Memo
 * @returns topojson object features
 */
export function useTopologyLoader(
  topology?: TopoJSON.Topology
): TopologyLoader {
  const objects = useMemo(() => _.get(topology, 'objects'), [topology])
  const keys = useMemo(() => _.keys(objects), [objects])
  const feat = useTopologyFeatures(topology)
  const features = useMemo(() => keys.map(feat), [feat, keys])
  const topologies = useMemo<Topologies>(
    () =>
      keys.reduce(
        (acc, topo, i) => ({
          ...acc,
          [topo]: features[i],
        }),
        {}
      ),
    [keys, features]
  )
  return useMemo(
    () => ({ topology, features, keys, topologies }),
    [topology, features, keys, topologies]
  )
}

/**
 * @category Memo
 * @returns projected SVGPathElement
 */
export function useProjectionPath(
  geo: GeoJSON.Feature,
  style?: React.SVGAttributes<SVGPathElement>['style']
) {
  const { path } = useProjectionContext()
  return useMemo(() => {
    if (!geo || !path) return null
    const d = path(geo)
    return d ? <path d={d} style={style} /> : null
  }, [geo, path, style])
}
