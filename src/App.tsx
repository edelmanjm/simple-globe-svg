/**
 * application root used to develop globe module
 * @category Dev
 * @module Dev App
 */

import Globe from "./components";

window.document.body.style.margin = "0";
window.document.body.style.height = "100vh";
window.document.body.style.overflow = "hidden";
window.document.body.style.fontFamily = "system-ui";

/**
 * setup development props into [[Globe]] and [[Menu]]
 * @category Component
 * @hooks [[useSettings]] [[useMarkers]]
 * @returns
 * >`div`
 * >>[[Menu]]\
 * >>[[Globe]]
 */
function App() {
  return <Globe />;
}

export default App;
