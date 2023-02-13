/**
 * @category Globe
 * @module Globe Markers Label
 */

import React from 'react'
import { PropsWithChildren } from 'react'
import { MarkerData } from './types'

/**
 * @category Component
 * @param props `label.text`
 * @return `SVGTextElement`
 */
function Label({ label }: PropsWithChildren<MarkerData>) {
  return <>{label && <text {...label}>{label?.text}</text>}</>
}
export default Label
