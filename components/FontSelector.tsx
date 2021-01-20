// import { useState } from "react";
import { FontType } from "../interfaces";
import styles from "../styles/businessFonts.module.css";

interface FontSelectorProps {
  fontType?: FontType;
  example: string;
}
//"AIzaSyCXRnBbrTL2gJxk5DUk1swxE4-GNwthVV4"
const FontSelector = ({ example }: FontSelectorProps) => {
  //   const [activeFontFamily, setFamily] = useState<string>("");

  return (
    <div className={styles.selectFontContainer}>
      <div className={styles.selectFontContainerRow}>
        <p>{example}</p>

        <span>
          <b>𝐁</b>
        </span>
        <span>
          <b>𝐼</b>
        </span>
      </div>
    </div>
  );
};

export default FontSelector;
