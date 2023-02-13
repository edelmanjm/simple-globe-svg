/**
 * @category Globe
 * @module Globe
 */
import { Projection } from './projection'
import { Camera } from './camera'
import { Markers } from './markers'
import { View } from './view'
import { Cartography } from './cartography'
import { GlobeProps } from './types'
import React from 'react'

/**
 * wraps every context around svg elements
 * @category Component
 * @param props
 * `children` will be forwarded into svg projection
 * @returns
 * [[Globe View]]
 * >[[Globe Camera]]
 * >>[[Globe Projection]]
 * >>>[[Globe Cartography]]\
 * >>>[[Globe Markers]]\
 * >>>`children`
 */
function Globe({
  children,
  markers,
  settings,
  geo,
  marker,
  camera,
}: React.PropsWithChildren<GlobeProps>) {
  return (
    <View settings={settings?.view}>
      <Camera settings={settings?.camera} {...camera}>
        <Projection>
          <Cartography settings={settings?.cartography} geo={geo} />
          <Markers markers={markers} marker={marker} />
          {children}
        </Projection>
      </Camera>
    </View>
  )
}

export default Globe
