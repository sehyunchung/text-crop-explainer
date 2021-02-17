import * as React from "react";
import { css } from "../stitches.config";

import { Icon } from "./Icon";
import { Canvas } from "./Canvas";

const fonts = ["Noto Sans KR", "Newsreader", "Arial"];

export default function App() {
  const [text, setText] = React.useState("Collapse");
  const [fontFamily, setFontFamily] = React.useState("Noto Sans KR");
  const selectRef = React.useRef<HTMLSelectElement>(null);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText((e.target as HTMLInputElement).value);
  };

  React.useEffect(() => {
    if (selectRef) {
      const listener = (e: Event) => {
        setFontFamily((e.target as HTMLSelectElement).value);
      };
      const selectEl = selectRef.current;

      selectEl?.addEventListener("change", listener);

      return () => {
        selectEl?.removeEventListener("change", listener);
      };
    }
  }, []);

  return (
    <>
      <select ref={selectRef}>
        {fonts.map((font) => (
          <option key={font} value={font}>
            {font}
          </option>
        ))}
      </select>
      <input type="text" onChange={handleTextChange} value={text} />
      <Canvas text={text} />
      <div
        className={css({
          pointerEvents: "none",
          position: "fixed",
          top: 0,

          height: "100%",
          width: "100%",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transform: "scale(2)"
        })}
      >
        <h2
          style={{ fontFamily }}
          className={css({ display: "flex", alignItems: "center" })}
        >
          <Icon
            className={css({
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              borderX: "cyan"
            })}
          />
          <span className={css({ borderX: "orange" })}>{text}</span>
        </h2>
      </div>
    </>
  );
}
