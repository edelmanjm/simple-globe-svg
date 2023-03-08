/**
 * [[Marker]] mapper
 * @category Globe
 * @module Globe Markers
 */

import React from "react";
import { useMerge } from "../hooks";

import { Marker } from "./Marker";
import { MarkerProps, MarkerData } from "./types";

interface MarkersProps {
  markers?: MarkerData[];
  marker?: MarkerProps;
}

/**
 * maps markers [[MarkerData]] into [[Marker]] component
 * @category Component
 * @param props mapped into [[Marker]]
 * @returns mapped markers into [[Marker]]
 */
export function Markers({ markers = [], marker }: MarkersProps) {
  const merge = useMerge();
  return markers.length === 0 ? null : (
    <>
      {markers.map((m) => (
        <Marker
          key={m.id}
          {...(merge(marker, m) as MarkerProps & MarkerData)}
        />
      ))}
    </>
  );
}
