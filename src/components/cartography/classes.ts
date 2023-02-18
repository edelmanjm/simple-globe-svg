/**
 * @category Globe
 * @module Globe Cartography Classes
 */

/**
 * @category Data
 * @param jsons
 * topojson or geojson data
 * @param props
 * list of urls for raw jsons
 */
export class CartographyData {
  constructor(public urls?: string[], public jsons?: JSON[]) {}
}
