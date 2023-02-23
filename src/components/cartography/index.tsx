/**
 * load url and validate its data
 * @category Globe
 * @module Globe Cartography
 */
import React from "react";
import { uniqueId } from "lodash";
import { PropsWithChildren, useCallback, useState } from "react";
import { useEffectOnChange, useFetchJSON } from "../hooks";

import { Topology } from "./Topology";
import { CartographyProps } from "./types";
import Path from "./Path";
import { CartographyUrl, EMPTY_CARTOGRAPHY_DATA } from "./constants";

function Switch({
  json,
  geo,
}: PropsWithChildren<CartographyProps & { json: any }>): JSX.Element | null {
  const type = json?.type;
  switch (type) {
    case "Topology":
      return <Topology data={json as TopoJSON.Topology} geo={geo} />;
    case "FeatureCollection":
      const { features } = json as GeoJSON.FeatureCollection;
      return (
        <>
          {features.map((f) => (
            <Path geo={f} key={uniqueId()} {...geo} />
          ))}
        </>
      );
    default:
      return null;
  }
}

const URLS = [Object.values(CartographyUrl)[1]];

/**
 * maps [[CartographyData]] into supported formats render
 * @returns
 * [[Topology]] | `null`
 */
export function Cartography({
  settings = EMPTY_CARTOGRAPHY_DATA,
  geo,
}: PropsWithChildren<CartographyProps>): JSX.Element | null {
  const { urls = URLS, jsons = [] } = settings;
  const [data, setData] = useState(jsons);
  const load = useCallback((j: JSON) => {
    setData((curr) => [...curr, j]);
  }, []);
  const loader = useFetchJSON(load);
  const update = useCallback(() => urls.map(loader), [loader, urls]);
  useEffectOnChange(urls, update);
  return (
    <>
      {data.map((d) => (
        <Switch key={uniqueId()} json={d} geo={geo} />
      ))}
    </>
  );
}
