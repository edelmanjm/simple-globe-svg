/**
 * initial props
 * @category Dev
 * @module Dev Constants
 */

import { Coord } from "../components/classes";
import { EMPTY_VIEW_DATA } from "../components/view/constants";

const VIEW_PROPS = {
  view: {
    ...EMPTY_VIEW_DATA,
    target: document.body as HTMLElement | null,
    fetchToTarget: true,
  },
};

const GEO_PROPS = {
  hover: {
    enter: {
      props: {
        style: {
          fill: "red",
          outline: "none",
        },
      },
    },
  },
};

const MARKERS = [
  {
    props: {
      // onClick: (e) => console.log(e),
      hover: {
        enter: {
          // callback: (e: any) => console.log(e),
          props: {
            style: {
              opacity: 0,
            },
          },
        },
      },
    },
    id: "br",
    coordinates: new Coord(-15.7942, -47.8825),
    label: {
      text: "★",
      style: {
        stroke: "none",
        fill: "green",
        fontSize: "64px"
      },
    },
  },
];

export default {
  VIEW_PROPS,
  GEO_PROPS,
  MARKERS,
};
