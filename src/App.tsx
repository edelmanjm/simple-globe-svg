/**
 * application root used to develop globe module
 * @category Dev
 * @module Dev App
 */

import { useState } from "react";
import Globe from "./components";
import Page from "./Page";
import CONST from "./constants";

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
  return (
    <Page>
      <Globe
        settings={{
          view: useState(CONST.VIEW_PROPS),
        }}
        geo={CONST.GEO_PROPS}
        markers={CONST.MARKERS}
      />
    </Page>
  );
}

export default App;
