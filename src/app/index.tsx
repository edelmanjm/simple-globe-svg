/**
 * application root used to develop globe module
 * @category Dev
 * @module Dev App
 */

import Globe from "../components";
import Page from "./Page";
import CONST from "./constants";
import {usePaneInput, useTextBlade, useTweakpane} from "react-tweakpane";
import {MarkerData} from "../components/markers/types";

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
  let marker: MarkerData = CONST.MARKER;

  const pane = useTweakpane(
    {
      labelText: '★',
      labelColor: marker.label?.style?.fill
    },
    {
      title: 'Globe settings',
    }
  )

  // @ts-ignore
  usePaneInput(pane, 'labelColor', { label: 'Label color' }, (event: any) => {
    if (marker.label && marker.label.style) {
      marker.label.style = {
        ...marker.label.style,
        "fill": event.value,
      };
    }
  })

  return (
    <Page>
      <Globe
        settings={CONST.VIEW_PROPS}
        geo={CONST.GEO_PROPS}
        markers={[marker]}
      />
    </Page>
  );
}

export default App;
