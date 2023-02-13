/**
 * @category Globe
 * @module Globe Hooks
 */
import { noop } from 'lodash'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { EMPTY_OBJECT } from './constants'
import { BooleanState, MutableStates } from './types'
import mergeDeep, { getDistance } from './utils'

/**
 * @param ref element target to call addEventListener
 * @param event event name
 * @param listener event handler callback
 *
 * @returns event handler
 *
 * @category Listener
 */
export function useEventListener(
  ref: Window | Element | null,
  event?: string,
  listener?: EventListener
) {
  useEffect(() => {
    if (!event || !listener || !ref) return
    ref?.addEventListener(event, listener)
    return () => ref?.removeEventListener(event, listener)
  }, [listener, ref, event])
}

/**
 * sets window resize listener
 *
 * @param listener event handler callback
 *
 * @category Listener
 */
export function useOnWindowResize(listener?: EventListener) {
  useEventListener(window, 'resize', listener)
}

/**
 *
 * @returns boolean state handler
 *
 * @category State
 */
export function useBooleanState(initial: boolean = false) {
  const [bool, setBool] = useState(initial)
  const trully = useCallback(() => setBool(true), [])
  const falsy = useCallback(() => setBool(false), [])
  const negate = useCallback(() => setBool((b) => !b), [])
  return useMemo<BooleanState>(
    () => ({ bool, trully, falsy, negate }),
    [bool, falsy, negate, trully]
  )
}

/**
 * TODO: support dispatch callbacks
 *
 * map `initials` into `useState`
 *
 * @param initials initial values to `useState`
 *
 * @prop {Function} [dispatch] array argument fires one value by dispatch else fire its value to every dispatch
 *
 * @returns multi-state handler: [states, dispatchToAll]
 *
 * @category State
 */
export function useStates<T = any>(initials: Array<T>): MutableStates<T> {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const states = initials.map((s) => useState(s))
  const dispatch = useCallback(
    (p) => {
      states.forEach(([s, d], i) => (Array.isArray(p) ? d(p[i]) : d(p)))
    },
    [states]
  )
  return [states, dispatch]
}

/**
 * fetch api state handler
 * @prop {string} [url] url to be fetched
 * @returns url fetch response
 * @category Callback
 */
export function useFetch(
  callback: (res: Response) => any,
  throwback: (e: any) => any = noop
) {
  return useCallback(
    (url: string) => {
      fetch(url).then(callback).catch(throwback)
    },
    [callback, throwback]
  )
}

/**
 * fetch api listener
 * @prop {string} [url] url to be fetched
 * @returns url fetch response
 * @category Listener
 */
export function useFetchOnEffect(url?: string) {
  const [response, store] = useState<Response>()
  const load = useFetch(store)
  useEffect(() => {
    if (url) load(url)
  }, [load, url])
  return response
}

/**
 * fetch api listener
 * @prop {string} [url] url to be fetched
 * @returns url fetch response JSON
 * @category Listener
 */
export function useFetchJSON(
  callback: (json: JSON) => any,
  throwback: (e: any) => any = noop
) {
  return useFetch(
    useCallback(
      (res: Response) => {
        res.json().then(callback).catch(throwback)
      },
      [callback, throwback]
    )
  )
}

/**
 * tool for updating state by props
 * dispatches value on change
 * condition can be used for avoiding rerenders
 * @category Effect
 */
export function useEffectOnChange<T>(
  value?: T,
  dispatch?: (c: T) => void,
  condition: boolean = true
) {
  useEffect(() => {
    if (dispatch && condition && value !== undefined) dispatch(value)
  }, [dispatch, condition, value])
}
/**
 * merge objects
 * @category Memo
 */
export function useMerge() {
  return useCallback(
    (
      object: Record<string, any> = EMPTY_OBJECT,
      source: Record<string, any> = EMPTY_OBJECT
    ) => mergeDeep(object, source),
    []
  )
}

interface UseParamBroadcast {
  (callbacks: any[]): any
}

/**
 * forwards `data` into event callback
 * @category Hook
 * @returns callback to merge props
 */
export function useParamBroadcast<ForwardedData = Record<string, any>>(
  forward: ForwardedData
) {
  return useCallback<UseParamBroadcast>(
    (callbacks) => (params: any) => {
      const data = { ...params, ...forward }
      callbacks.forEach((cb) => typeof cb === 'function' && cb(data))
    },
    [forward]
  )
}

/**
 * @category Hook
 */
export function useGetDistance() {
  return useCallback(getDistance, [])
}
