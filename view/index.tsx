/**
 * rendering view port
 * @category Globe
 * @module Globe View
 */
import {
  useState,
  useMemo,
  PropsWithChildren,
  useEffect,
  useCallback,
} from 'react'
import { ViewProvider } from './Context'
import { INITIAL_DIMENSIONS, INITIAL_SCALE } from './constants'
import { useEffectOnChange, useStates } from '../hooks'
import FetchOnWindowResize from './FetchOnWindowResize'
import { ViewProps } from './classes'
import { Point } from '../classes'
import { EMPTY_MUTABLE_STATE } from '../constants'
import React from 'react'

/**
 * view port wrapper
 * @category Component
 * @returns `wrap`\
 * [[ViewProvider]]
 */
export const View = ({
  children,
  settings = EMPTY_MUTABLE_STATE,
}: PropsWithChildren<ViewProps>) => {
  const data = settings[0]
  const controller = settings[1]
  const initialW = data?.dimensions?.[0]
  const initialH = data?.dimensions?.[1]
  const dimensions = useStates(data?.dimensions || INITIAL_DIMENSIONS)
  const [[[w, setW], [h, setH]], dispatch] = dimensions
  // update settings data avoiding rerenders
  const changed = useMemo(
    () => initialW !== w || initialH !== h,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [w, h /* do not add initialW initialH */]
  )
  const update = useCallback(
    () =>
      (changed || undefined) &&
      controller((curr) => ({ ...curr, dimensions: new Point(w, h) })),
    [changed, controller, h, w]
  )
  useEffect(update, [update])

  // update width with settings data
  useEffectOnChange(initialW, setW, !data?.fetchToTarget)

  // update height with settings data
  useEffectOnChange(initialH, setH, !data?.fetchToTarget)

  const scaling = useState(data?.scale || INITIAL_SCALE)
  const value = useMemo(() => ({ dimensions, scaling }), [dimensions, scaling])
  return (
    <ViewProvider value={value}>
      {data?.fetchToTarget && (
        <FetchOnWindowResize target={data?.target} dispatch={dispatch} />
      )}
      {children}
    </ViewProvider>
  )
}
