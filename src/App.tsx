/**
 * application root used to develop globe module
 * @category Dev
 * @module Dev App
 */

import { useState } from "react";
import Globe from "./components";
import { Coord } from "./components/classes";
import { EMPTY_VIEW_DATA } from "./components/view/constants";

window.document.body.style.margin = "0";
window.document.body.style.height = "100vh";
window.document.body.style.width = "100%";
window.document.body.style.overflow = "hidden";
window.document.body.style.fontFamily = "system-ui";

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

/**
 * setup development props into [[Globe]]
 * @category Component
 * @returns
 * >`div`
 * >>[[Globe]]
 */
function App() {
  return (
    <Globe
      settings={{
        view: useState(VIEW_PROPS),
      }}
      geo={GEO_PROPS}
      markers={MARKERS}
    />
  );
}

export default App;
