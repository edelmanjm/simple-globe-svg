/**
 * application root used to develop globe module
 * @category Dev
 * @module Dev App
 */

import { useState } from "react";
import Globe from "../components";
import Page from "./Page";
import CONST from "./constants";
import {usePaneInput, useTweakpane} from "react-tweakpane";

window.document.body.style.margin = "0";
window.document.body.style.height = "100vh";
window.document.body.style.width = "100%";
window.document.body.style.overflow = "hidden";
window.document.body.style.fontFamily = "system-ui";

/**
 * setup development props into [[Globe]]
 * @category Component
 * @returns
 * >[[Dev Page]]
 * >>[[Globe]]
 */
function App() {
  const pane = useTweakpane(
    {
      position: { x: 0, y: 0, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
      scale: { x: 1, y: 1, z: 1 },
      color: '#ffa500',
    },
    {
      title: 'Globe settings',
    }
  )

  return (
    <Page>
      <Globe
        settings={CONST.VIEW_PROPS}
        geo={CONST.GEO_PROPS}
        markers={CONST.MARKERS}
      />
    </Page>
  );
}

export default App;
