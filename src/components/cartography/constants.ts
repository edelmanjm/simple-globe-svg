/**
 * @category Globe
 * @module Globe Cartography Constants
 */

import { CartographyData } from "./classes";

/**
 * @category Preset
 */
export enum CartographyUrl {
  LAND = "https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json",
  COUNTRIES = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json",
  OCEANS = "https://gist.githubusercontent.com/jrrickard/8755532505a40f3b8317/raw/ecd98849d3a5f4502b773b986254f19af3b8d8fb/oceans.json",
}
/**
 * @category Empty
 */
export const EMPTY_CARTOGRAPHY_DATA = new CartographyData([
  CartographyUrl.COUNTRIES,
]);
