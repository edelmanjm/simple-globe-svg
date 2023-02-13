/**
 * @category Globe
 * @module Globe Events Hooks
 */

import { get } from "lodash";
import { useCallback, useMemo } from "react";
import { useBooleanState, useMerge } from "../hooks";
import { EMPTY_EVENT_PROPS, SUPPORTED_EVENTS } from "./constants";
import { HandleHoverEventProps, OnHoverEventProps } from "./types";

/**
 * forwards `data` into `onMouseEnter` and `onMouseLeave`
 * handle `hovered` state
 * `onMouseEnter` = onhover
 * `onMouseLeave` = unhover
 * merge and overwrite props with props.hover.(enter|leave) on `hovered`
 * triggers hover.(enter|leave).callback at respective events
 * @category Hook
 * @returns merged props
 */
export function usePropsOnMouseHover<ComponentProps = Record<string, any>>(
  props: ComponentProps & {
    hover: HandleHoverEventProps;
  } & Partial<OnHoverEventProps>
) {
  const merge = useMerge();
  const {
    hover,
    onMouseEnter: onMouseEnterCb,
    onMouseLeave: onMouseLeaveCb,
  } = props;
  const { props: enterProps, callback: enterCallback } =
    hover?.enter || EMPTY_EVENT_PROPS;
  const { props: leaveProps, callback: leaveCallback } =
    hover?.leave || EMPTY_EVENT_PROPS;
  const {
    bool: hovered,
    trully: onhover,
    falsy: unhover,
  } = useBooleanState(false);
  const onMouseEnter = useCallback(
    (ev: MouseEvent & void) => {
      if (onMouseEnterCb) onMouseEnterCb(ev);
      if (enterCallback) enterCallback(ev);
      onhover();
    },
    [onMouseEnterCb, onhover, enterCallback]
  );
  const onMouseLeave = useCallback(
    (ev: MouseEvent & void) => {
      if (onMouseLeaveCb) onMouseLeaveCb(ev);
      if (leaveCallback) leaveCallback(ev);
      unhover();
    },
    [onMouseLeaveCb, unhover, leaveCallback]
  );
  const forwardedProps = useMemo(
    () =>
      merge(props, {
        onMouseEnter,
        onMouseLeave,
      }),
    [merge, onMouseEnter, onMouseLeave, props]
  );
  const onHoveredProps = useMemo(
    () =>
      hovered
        ? enterProps
          ? merge(forwardedProps, enterProps)
          : forwardedProps
        : leaveProps
        ? merge(forwardedProps, leaveProps)
        : forwardedProps,
    [hovered, merge, forwardedProps, enterProps, leaveProps]
  );
  return onHoveredProps;
}

/**
 * forwards `data` into event callback
 * @category Hook
 * @returns callback to merge props
 */
export function useForwardOnEvent<
  ComponentProps = Record<string, any>,
  ForwardedData = Record<string, any>
>(data: ForwardedData, props?: ComponentProps) {
  return useCallback(
    (event: string) => {
      if (!props) return;
      const callback = get(props, event, null);
      if (!callback) return;
      return (ev: MouseEvent) => {
        const forward = { ...ev, ...data };
        if (typeof callback === "function") callback(forward);
        return callback;
      };
    },
    [data, props]
  );
}

/**
 * checks for supported event keys in use at props
 * @category Hook
 * @param props iterate its keys in search for `supported`
 * @param supported [[SUPPORTED_EVENTS]]
 * @returns supported event keys found at props
 */
export function useSupportedEventKeys<
  ComponentProps extends Record<string, any>
>(props: ComponentProps, supported: string[] = SUPPORTED_EVENTS) {
  return useMemo(() => {
    const result: string[] = [];
    Object.keys(props).forEach((k) => {
      if (supported.includes(k)) {
        result.push(k);
      }
    });
    return result;
  }, [props, supported]);
}
