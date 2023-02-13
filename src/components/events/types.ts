/**
 * @category Globe
 * @module Globe Events Types
 */

/**
 * used set default handlers
 * @property props - will overwrite current component props
 * @property callback - triggers with respective event callback
 * @property data - injected through callback
 * @category Props
 */
export interface EventData<CB = Function, P = Record<string, any>> {
  callback?: CB
  props?: P
}

/**
 * can be set to easily handle `onMouseEnter` and `onMouseLeave` events
 * @category Props
 */
export interface HandleHoverEventProps<CB = Function, P = Record<string, any>> {
  enter?: EventData<CB, P>
  leave?: EventData<CB, P>
}

/**
 * can be used to assist some events setup
 * @category Props
 */
export interface HandleEventProps<CB = Function, P = Record<string, any>> {
  hover: HandleHoverEventProps<CB, P>
}

/**
 * @category Props
 */
export interface EventsProps<
  ComponentProps = Record<string, any>,
  ForwardedData = Record<string, any>
> {
  props: ComponentProps
  forward: ForwardedData
}

/**
 * @category Alias
 */
export interface ForwardedMouseEvent extends MouseEvent {}
/**
 * @category Callback
 */
export interface ForwardedEventCb<ForwardedData = void> {
  (forwardedEvent: ForwardedMouseEvent & ForwardedData): void
}
/**
 * @category Props
 */
export interface OnHoverEventProps<ForwardedData = void> {
  onMouseEnter: ForwardedEventCb<ForwardedData>
  onMouseLeave: ForwardedEventCb<ForwardedData>
}
