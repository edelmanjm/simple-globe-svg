/**
 * provides state and dispatch features to view port handling
 * @category Globe
 * @module Globe View Context
 */
import { createContext, PropsWithChildren } from 'react'
import { EMPTY_MUTABLE_STATE } from '../constants'
import { MutableState, MutableStates } from '../types'
import React from 'react'

export class ViewContextValue {
  scaling: MutableState<number> = EMPTY_MUTABLE_STATE
  dimensions: MutableStates<number> = EMPTY_MUTABLE_STATE
}

/**
 * @category Context
 *
 * @returns
 * [[ViewContextValue]]
 */
export const ViewContext = createContext<ViewContextValue>(
  new ViewContextValue()
)

/**
 * @category Provider
 *
 * @prop {InitialProps} [value] [[ViewContextValue]]
 * @param props
 *
 * @returns `wrap`\
 * [[ViewContext]]
 */
export function ViewProvider({
  children,
  value,
}: PropsWithChildren<{
  value: ViewContextValue
}>) {
  return <ViewContext.Provider value={value}>{children}</ViewContext.Provider>
}
