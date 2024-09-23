/**
 * @category Dev
 * @module Dev Page
 */

import ASSETS from "./assets";
import pkg from "../../package.json";
import { SVG_ID } from "./constants";

const DOCS_URL = "https://gaushao.github.io/d3-react-globe/docs";
const GIT_URL = "https://github.com/Gaushao/d3-react-globe";
const NPM_URL = "https://www.npmjs.com/package/d3-react-globe";

function logo(src: string, url: string) {
  const style = {
    height: "24px",
    margin: 8,
  };
  const onClick = () => {
    window.open(url, "_blank");
  };
  return {
    src,
    style,
    onClick,
  };
}

const logos: React.CSSProperties = {
  position: "fixed",
  margin: 16,
  zIndex: 1,
  borderRadius: 5,
  backgroundColor: "white",
};

const footer: React.CSSProperties = {
  display: pkg.version ? "flex" : "none",
  position: "fixed",
  padding: 4,
  bottom: 16,
  right: 16,
  gap: 16,
  zIndex: 1,
  borderRadius: 5,
  backgroundColor: "white",
};

function DownloadSvg() {
  const svgElement = document.getElementById(SVG_ID);
  if (!svgElement) {
    return false;
  }

  const svgString = new XMLSerializer().serializeToString(svgElement)
  const blob = new Blob([svgString], { type: 'image/svg+xml' });

  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'globe.svg';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * layout wrapper
 * render links to git and docs
 * @category Component
 * @returns
 * >`logos`\
 * >`children`
 */
export default function Page({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <div style={logos}>
        <img {...logo(ASSETS.npm, NPM_URL)} />
        <img {...logo(ASSETS.git, GIT_URL)} />
        <img {...logo(ASSETS.book, DOCS_URL)} />
      </div>
      <div style={footer}>
        <button onClick={DownloadSvg}>Download as SVG</button>
        v{pkg.version}
      </div>
      {children}
    </>
  );
}
