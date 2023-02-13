/**
 * @category Globe
 * @module Globe Camera Types
 */

import { CameraData } from './classes'

/**
 * data will be forwarded to events of Camera component
 * @category Data
 * @globeCameraData forwarded data
 */
export interface CameraForwardedData {
  globeCameraData: CameraData & {
    isDragging: boolean
  }
}
/**
 * @category Props
 */
export interface ScreenProps
  extends React.PropsWithChildren<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >
  > {}
