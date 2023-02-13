/**
 * D3 topojson projection
 * @category Globe
 * @module Globe Cartography Topology
 */
import React from 'react'
import { useEffect, useMemo, useState } from 'react'
import { useTopologyLoader } from './hooks'

import Path from './Path'
import { PathProps } from './types'

/**
 * @category Props
 */
export interface TopologyProps {
  data: TopoJSON.Topology
  geo?: Partial<PathProps>
}

/**
 * @hook [[useInCameraRange]] `inCameraRange` [WIP](https://gitlab.com/gaushao/react-simple-map-globe/-/issues/2)
 * @hook [[useTopologyLoader]] from [[TopologyProps.data]]
 *
 * @returns
 * map of `inCameraRange` [[Feature<Geometry, GeoJsonProperties>]] rendered by [[GeoPath]]
 */
export function Topology({ data, geo }: TopologyProps) {
  const { keys, topologies } = useTopologyLoader(data)
  const [selected, setSelected] = useState(keys[0])

  useEffect(() => {
    setSelected(keys[0])
  }, [keys])

  const topology = useMemo(() => topologies[selected], [selected, topologies])

  if (!topology) return null

  return (
    <g>
      {topology.map((feat, i) => (
        <Path key={`${i}-${feat.id}`} geo={feat} {...geo} />
      ))}
    </g>
  )
}
