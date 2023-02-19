/**
 * initial props
 * @category Dev
 * @module Dev Constants
 */

import { Coord } from "./components/classes";
import { EMPTY_VIEW_DATA } from "./components/view/constants";

const VIEW_PROPS = {
  ...EMPTY_VIEW_DATA,
  target: document.body as HTMLElement | null,
  fetchToTarget: true,
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
    coordinates: new Coord(-47.8825, -15.7942),
    label: {
      text: "Brazil",
      style: {
        stroke: "green",
      },
    },
  },
];

export default {
  VIEW_PROPS,
  GEO_PROPS,
  MARKERS,
};
