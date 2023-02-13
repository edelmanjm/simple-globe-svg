/**
 * used to test globe module features
 * @category Dev
 * @module Dev Constants
 */

import { Coord } from "./classes";
import { MarkerData } from "./markers/types";
import { GlobeProps } from "./types";
import { ViewData } from "./view/classes";
import { EMPTY_CARTOGRAPHY_DATA } from "./cartography/constants";
// const DEV_VIEW_DATA = new ViewData(undefined, undefined, document.body, true);

/**
 * dummy locations to [[Marker]] testing
 * @category Constant
 */
const LOCATIONS: Record<string, MarkerData> = {
  NYC: {
    id: "nyc",
    coordinates: new Coord(-74.006111, 40.712778),
    // svg: CustomMaker,
    pin: {
      fill: "blue",
    },
    label: {
      text: "New York",
      style: {
        stroke: "darkblue",
      },
    },
  },
  BRAZIL: {
    // props: {
    //   onClick: (e) => noop(e),
    //   hover: {
    //     enter: {
    //       callback: (e: any) => noop(e),
    //       props: {},
    //     },
    //   },
    // },
    id: "br",
    coordinates: new Coord(-47.8825, -15.7942),
    pin: {
      fill: "green",
    },
    label: {
      text: "Brazil",
      style: {
        stroke: "green",
      },
    },
  },
};

/**
 * dummy props to [[Globe]] testing
 * @category Constant
 */
const PROPS: GlobeProps = {
  camera: {
    // onMouseDown: (e: any) => noop,
    // onWheel: (e: any) => noop,
    // onTouchMove: (e: any) => noop,
  },
  marker: {
    label: {
      text: "",
      textAnchor: "middle",
      y: 24,
      style: {
        fill: "white",
        fontFamily: "system-ui",
      },
    },
    pin: {
      shape: "circle",
      fill: "white",
      stroke: "black",
      strokeWidth: 2,
      r: 8,
    },
  },
  geo: {
    // onClick: (e: any) => noop,
    // onMouseEnter: (e: any) => noop,
    // onMouseDown: (e: any) => noop,
    hover: {
      enter: {
        // callback: noop,
        props: {
          style: {
            fill: "red",
            outline: "none",
          },
        },
      },
    },
  },
};

export default { PROPS, LOCATIONS, EMPTY_CARTOGRAPHY_DATA };
