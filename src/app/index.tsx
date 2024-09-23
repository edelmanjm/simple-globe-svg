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
import {Coord} from "../components/classes";

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
      latitude: marker.coordinates.latitude,
      longitude: marker.coordinates.longitude,
      labelText: '★',
      labelColor: marker.label?.style?.fill
    },
    {
      title: 'Globe settings',
    }
  )

  const [latitude] = usePaneInput(pane, 'latitude', {
    label: "Latitude",
    min: -90,
    max: 90
  })
  const [longitude] = usePaneInput(pane, 'longitude', {
    label: "Longitude",
    min: -180,
    max: 180
  })
  const [labelText] = usePaneInput(pane, 'labelText', {
    label: "Label text"
  })
  const [labelColor] = usePaneInput(pane, 'labelColor', {
    label: "Label color"
  });

  marker.coordinates = new Coord(latitude, longitude);
  if (marker.label) {
    marker.label.text = labelText;
    if (marker.label.style) {
      marker.label.style = {
        ...marker.label.style,
        "fill": labelColor
      };
    }
  }

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
