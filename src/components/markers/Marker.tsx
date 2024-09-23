/**
 * @category Globe
 * @module Globe Markers Marker
 */
import React from "react";
import { PropsWithChildren, useMemo } from "react";
import { useProjectionContext } from "../projection/hooks";
import {useCameraCenterDistance, useCameraContext} from "../camera/hooks/index";
import { MarkerData } from "./types";
import Pin from "./Pin";
import Label from "./Label";
import Events from "../events/index";

/**
 * @category Component
 * @return wrapped [[Pin]] (or custom `svg` pin) and [[Label]]
 */
function LabeledPin({ svg: Svg, ...props }: PropsWithChildren<MarkerData>) {
  return (
    <>
      {Svg ? <Svg {...props} /> : <Pin {...props} />}
      <Label {...props} />
    </>
  );
}

/**
 * renders svg map marker
 * forward `globeMarkerData` into marker `g` supported events
 * @hook [[useProjectionContext]] [[ProjectionContextValue.projection|projection]] will process `coordinates`
 * @hook [[useCameraContext]] [[CameraContextValue.center|center]] distance from `coordinates` > 90 returns `null`
 * @category Component
 * @prop [[MarkerData.svg|svg]] - custom marker is rendered in place of default [[Pin]]
 * @prop [[MarkerData.coordinates|coordinates]] - projected by 'projection'
 * @return render if there are coords and is `inCameraRange`
 */
export function Marker(props: PropsWithChildren<MarkerData>) {
  const { projection } = useProjectionContext();
  const distance = useCameraCenterDistance();
  const { id, pin, label, coordinates } = props;
  const forward = useMemo(
    () => ({
      globeMarkerData: {
        id,
        pin,
        label,
        coordinates,
      },
    }),
    [coordinates, id, label, pin]
  );

  if (!projection) return null;

  // Latitude is y, longitude is x
  const projected = projection([props.coordinates.y, props.coordinates.x]);
  if (!projected) return null;
  const [x, y] = projected;

  // FIXME broken
  // const inCameraRange = distance(props.coordinates) <= 90;

  // if (!inCameraRange) return null;
  return (
    <Events props={props.props || {}} forward={forward}>
      <g transform={`translate(${x}, ${y})`}>{<LabeledPin {...props} />}</g>
    </Events>
  );
}
