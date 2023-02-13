/**
 * @category Globe
 * @module Globe Camera
 */
import React from 'react'
import { CameraProps } from './classes'

import { CameraProvider } from './Context'
import { Screen } from './Screen'

/**
 * provides [[CameraContextValue]]
 * @param props [[CameraProps]]
 * @returns
 * >[[Globe Camera Context]]
 * >>[[Globe Camera Screen]]
 * >>>`children`
 */
export function Camera({
  children,
  settings,
  ...props
}: React.PropsWithChildren<CameraProps>) {
  return (
    <CameraProvider settings={settings}>
      <Screen {...props}>{children}</Screen>
    </CameraProvider>
  )
}
