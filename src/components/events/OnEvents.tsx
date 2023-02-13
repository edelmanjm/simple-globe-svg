/**
 * @category Globe
 * @module Globe Events OnEvents
 */

import React from 'react'
import { PropsWithChildren, cloneElement, ReactElement } from 'react'
import { useForwardOnEvent } from './hooks'

/**
 * forwards `data` into `supported` events
 * @category Component
 * @returns cloned children with data injected into `supported` events
 */
export function OnEvents<
  ElementType = any,
  ComponentProps = Record<string, any>,
  ForwardedData = Record<string, any>
>({
  children,
  supported,
  unsupported,
  forward: data,
  ...props
}: PropsWithChildren<
  {
    supported: string[]
    unsupported?: string[]
    forward: ForwardedData
  } & ComponentProps
>) {
  const forward = useForwardOnEvent<any, ForwardedData>(data, props)
  if (!props) return <>{children}</>
  const forwarded: Record<string, any> = { ...props }
  supported.forEach((event) => {
    if (unsupported?.includes(event)) return
    forwarded[event] = forward(event)
  })
  return cloneElement(children as ReactElement<ElementType>, forwarded as any)
}

export default OnEvents
