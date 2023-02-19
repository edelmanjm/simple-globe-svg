/**
 * @category Page
 * @module Page
 */

import ASSETS from "./assets";

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

const DOCS_URL = "https://gaushao.github.io/d3-react-globe/docs";
const GIT_URL = "https://github.com/Gaushao/d3-react-globe";

const page: React.CSSProperties = {
  position: "fixed",
  margin: 16,
  zIndex: 1,
  backgroundColor: "white",
  borderRadius: 5,
};

/**
 * layout wrapper
 * render links to git and docs
 * @category Component
 * @returns
 * >'logos'
 * >`children`
 */
export default function Page({ children }: React.PropsWithChildren) {
  return (
    <>
      <div style={page}>
        <img {...logo(ASSETS.git, GIT_URL)} />
        <img {...logo(ASSETS.book, DOCS_URL)} />
      </div>
      {children}
    </>
  );
}
