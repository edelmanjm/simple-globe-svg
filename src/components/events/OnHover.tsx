/**
 * handle props switch on mouse hover
 * see [[HandleEventProps]] hover
 * @category Globe
 * @module Globe Events OnHover
 */

import React from "react";
import { PropsWithChildren, cloneElement, ReactElement } from "react";
import { usePropsOnMouseHover } from "./hooks";
import { HandleEventProps } from "./types";

/**
 * clone children and merge props from [[usePropsOnMouseHover]]
 * @category Component
 * @returns cloned children with onHoveredProps
 */
export function Handler<
  ElementType = any,
  ComponentProps = Record<string, any>
>({
  children,
  ...props
}: PropsWithChildren<ComponentProps & HandleEventProps>) {
  const onHoveredProps = usePropsOnMouseHover<
    ComponentProps & HandleEventProps
  >(props as any);
  return children
    ? cloneElement(
        children as ReactElement<ElementType>,
        onHoveredProps as Partial<ElementType>
      )
    : null;
}

/**
 * checks out for props.hover
 * @category Component
 * @returns cloned children with onHoveredProps
 */
export function OnHover<ComponentProps = Record<string, any>>({
  children,
  hover,
  ...props
}: PropsWithChildren<ComponentProps & Partial<HandleEventProps>>) {
  if (!hover) return <>{children}</>;
  return (
    <Handler hover={hover} {...props}>
      {children}
    </Handler>
  );
}

export default OnHover;
