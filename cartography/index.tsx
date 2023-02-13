/**
 * load url and validate its data
 * @category Globe
 * @module Globe Cartography
 */
import React from 'react'
import { get, noop, uniqueId } from 'lodash'
import { PropsWithChildren, useCallback, useState } from 'react'
import { useEffectOnChange, useFetchJSON } from '../hooks'

import { Topology } from './Topology'
import { CartographyProps } from './types'
import Path from './Path'
import { EMPTY_MUTABLE_STATE } from '../constants'

function Switch({
  json,
  geo,
}: PropsWithChildren<
  CartographyProps & { json: unknown }
>): JSX.Element | null {
  const type = get(json, 'type')
  switch (type) {
    case 'Topology':
      return <Topology data={json as TopoJSON.Topology} geo={geo} />
    case 'FeatureCollection':
      const { features } = json as GeoJSON.FeatureCollection
      return (
        <>
          {features.map((f) => (
            <Path geo={f} key={uniqueId()} {...geo} />
          ))}
        </>
      )
    default:
      return null
  }
}

/**
 * maps [[CartographyData]] into supported formats render
 * @returns
 * [[Topology]] | `null`
 */
export function Cartography({
  settings = [{}, noop],
  geo,
}: PropsWithChildren<CartographyProps>): JSX.Element | null {
  const [{ urls = [], jsons = [] }] = settings
  const [data, setData] = useState(jsons)
  const load = useCallback((j: JSON) => {
    setData((curr) => [...curr, j])
  }, [])
  const json = useFetchJSON(load)
  const update = useCallback(() => urls.map(json), [json, urls])
  useEffectOnChange(null, update)
  return (
    <>
      {data.map((d) => (
        <Switch key={uniqueId()} json={d} geo={geo} />
      ))}
    </>
  )
}
