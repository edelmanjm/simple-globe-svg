/**
 * @category Globe
 * @module Globe Events
 */

import React from 'react'
import { cloneElement, PropsWithChildren, ReactElement } from 'react'
import { useSupportedEventKeys } from './hooks'
import OnEvents from './OnEvents'
import OnHover from './OnHover'
import { EventsProps, HandleEventProps } from './types'

/**
 * will only inject data if event is found in props
 * [[useSupportedEventKeys]] on `props`
 * if `hasSupportedEvents` nest [[OnEvents]]
 * if `hasSupportedHover` nest [[OnHover]]
 * @param props - component props to be injected with data
 * @param forward - data to be forwarded into event
 * @category Component
 * @returns
 * >children
 * >>[[OnEvents]]
 * >>[[OnHover]]
 */
function Events<Props = any, Data = any>({
  props,
  forward,
  children,
}: PropsWithChildren<EventsProps<Props & Partial<HandleEventProps>, Data>>) {
  let nested = children
  const supported = useSupportedEventKeys(props)
  const hasSupportedEvents = !!supported.length
  if (hasSupportedEvents) {
    nested = (
      <OnEvents supported={supported} forward={forward}>
        {nested}
      </OnEvents>
    )
  }
  const hasSupportedHover = !!props?.hover
  if (hasSupportedHover) {
    nested = <OnHover hover={props.hover}>{nested}</OnHover>
  }
  return cloneElement(nested as ReactElement<Props>, props)
}

export default Events
