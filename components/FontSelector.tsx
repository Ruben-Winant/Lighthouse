import { FontType, GoogleFontStyles } from "../interfaces";
import styles from "../styles/businessFonts.module.css";
import { useState } from "react";

interface FontSelectorProps {
  googleFonts?: GoogleFontStyles;
  fontType: FontType;
  example: string;
}

const FontSelector = ({
  example,
  googleFonts,
  fontType,
}: FontSelectorProps) => {
  const [selectedFont, setSelectedFont] = useState<string>("Poppins");
  const [bold, setBold] = useState<boolean>(false);
  const [italic, setItalic] = useState<boolean>(false);

  const onHandleFontChange = (newFont: string) => {
    import("webfontloader").then((WebFontLoader) => {
      WebFontLoader.load({
        google: {
          families: [newFont],
        },
      });
    });

    setSelectedFont(newFont);
  };

  const displaySentence = () => {
    switch (fontType) {
      case FontType.Header:
        return (
          <h1
            style={{
              fontFamily: selectedFont,
              fontWeight: bold ? "bold" : "normal",
              fontStyle: italic ? "italic" : "normal",
            }}
          >
            {example}
          </h1>
        );

      case FontType.SubHeader:
        return (
          <h3
            style={{
              fontFamily: selectedFont,
              fontWeight: bold ? "bold" : "normal",
              fontStyle: italic ? "italic" : "normal",
            }}
          >
            {example}
          </h3>
        );

      case FontType.Body:
        return (
          <p
            style={{
              fontFamily: selectedFont,
              fontWeight: bold ? "bold" : "normal",
              fontStyle: italic ? "italic" : "normal",
            }}
          >
            {example}
          </p>
        );

      default:
        break;
    }
  };

  return (
    <div className={styles.selectFontContainer}>
      <div className={styles.selectFontContainerRow}>
        {displaySentence()}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <select onChange={(e) => onHandleFontChange(e.target.value)}>
            {googleFonts?.items.map((font) => (
              <option key={font.family} value={font.family}>
                {font.family}
              </option>
            ))}
          </select>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <span
              onClick={() => setBold(!bold)}
              style={{ border: bold ? "3px solid #000" : "none" }}
            >
              <b>𝐁</b>
            </span>
            <span
              onClick={() => setItalic(!italic)}
              style={{ border: italic ? "3px solid #000" : "none" }}
            >
              <b>𝐼</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FontSelector;
