/**
 * @category Globe
 * @module Globe Types
 */
import { Dispatch, SetStateAction } from "react";
import { CameraProps } from "./camera/classes";
import { CartographyProps, PathProps } from "./cartography/types";
import { MarkerProps, MarkerData } from "./markers/types";
import { ViewProps } from "./view/classes";

/**
 * @category Dispatch
 */
export interface DispatchState<T> extends Dispatch<SetStateAction<T>> {}
/**
 * @category State
 */
export type MutableState<T> = [T, Dispatch<SetStateAction<T>>];

/**
 * returned by [[useStates]]
 * @category State
 */
export type MutableStates<T> = [MutableState<T>[], DispatchState<T | T[]>];
/**
 * @category State
 * returned by [[useBooleanState]]
 */
export interface BooleanState {
  /** boolean state */
  bool: boolean;
  /** sets bool to true */
  trully: () => void;
  /** sets bool to false */
  falsy: () => void;
  /** sets bool to !bool */
  negate: () => void;
}
/**
 * define deep partial types
 * @category Alias
 */
export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

/**
 * every setting module can offer
 * @category Settings
 */
export interface GlobeSettings {
  camera?: CameraProps["settings"];
  view?: ViewProps["settings"];
  cartography?: CartographyProps["settings"];
}

/**
 * root component props
 * @category Props
 */
export interface GlobeProps {
  markers?: MarkerData[];
  settings?: GlobeSettings;
  geo?: Partial<PathProps>;
  marker?: MarkerProps;
  camera?: CameraProps;
}
