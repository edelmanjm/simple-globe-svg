/**
 * @category Globe
 * @module Globe Cartography Path
 */

import React from "react";
import { useMemo } from "react";
import Events from "../events/index";
import { useProjectionPath } from "./hooks";
import { PathProps } from "./types";

const PATH_STYLE: React.SVGAttributes<SVGPathElement>["style"] = {
  shapeRendering: "optimizeSpeed",
  textRendering: "optimizeSpeed",
};

/**
 * pass `{ globePathData: props.geo }` as data to [[Events]]
 * these will be forwarded when props includes [[SUPPORTED_EVENTS]]
 * @category Component
 * @returns SVGPathElement drawing [[ProjectionContextValue.path]] of `GeoJSON.Feature`
 */
function Path(props: PathProps) {
  const { geo } = props;
  const path = useProjectionPath(geo, PATH_STYLE);
  const forward = useMemo(() => ({ globePathData: geo }), [geo]);
  if (!path) return null;
  return (
    <Events props={props} forward={forward}>
      {path}
    </Events>
  );
}

export default Path;
