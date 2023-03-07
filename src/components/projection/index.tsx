/**
 * D3 topojson projection
 * @category Globe
 * @module Globe Projection
 */
import React, { useMemo } from "react";
import { geoPath, geoOrthographic } from "d3-geo";
import { useViewContext } from "../view/hooks";
import { useCameraContext } from "../camera/hooks/index";
import { ProjectionContext } from "./Context";
import { EMPTY_AXLE } from "../constants";

/**
 * provides D3 projected path
 * @returns `wrap`\
 * `React.SVGProps<SVGSVGElement>`\
 * `children`
 */
export const Projection = ({
  children = null,
}: React.PropsWithChildren<{}>) => {
  const {
    dimensions: [[[width], [height]]],
    scaling: [scale],
  } = useViewContext();
  const {
    rotation: {
      x: [rX],
      y: [rY],
    },
  } = useCameraContext();
  const projection = useMemo(
    () =>
      geoOrthographic()
        .scale(scale)
        .center(EMPTY_AXLE)
        .rotate([rX, rY])
        .translate([width / 2, height / 2]),
    [height, rX, rY, scale, width]
  );
  const path = useMemo(() => geoPath().projection(projection), [projection]);
  return (
    <ProjectionContext.Provider
      value={{
        width,
        height,
        projection,
        path,
      }}
    >
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        {children}
      </svg>
    </ProjectionContext.Provider>
  );
};
