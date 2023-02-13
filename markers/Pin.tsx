/**
 * svg elements to be rendered as pin marker on the map
 * @category Globe
 * @module Globe Markers Pin
 */

import React from 'react'
import { MarkerData, PinShape } from './types'

/**
 * TODO
 * - not good on rendering, change svg for beauty
 * - should support import of .svg files in here, seems not
 *
 * renders svg custom location icon
 * refers to [[PinShape.LOCATION]]
 * @category PinShape Component
 * @returns SVGElement
 */
export function Location(props: MarkerData) {
  return (
    <svg
      width='24'
      height='24'
      xmlns='http://www.w3.org/2000/svg'
      fill-rule='evenodd'
      clip-rule='evenodd'
      {...props}
    >
      <path d='M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602' />
    </svg>
  )
}

/**
 * refers to [[PinShape.CIRCLE]]
 * @category PinShape Component
 * @returns SVGCircleElement
 */
export function Circle(props: MarkerData) {
  const forward = props.pin || {}
  return <circle {...(forward as React.SVGProps<SVGCircleElement>)} />
}

/**
 * @category Component
 * @returns PinShape Component switched from [[PinData.shape]]
 */
export function Pin(props: MarkerData) {
  if (!props?.pin?.shape) return null
  switch (props.pin.shape) {
    case PinShape.CIRCLE:
      return <Circle {...props} />
    case PinShape.LOCATION:
      return <Location {...props} />
    default:
      return null
  }
}

export default Pin
