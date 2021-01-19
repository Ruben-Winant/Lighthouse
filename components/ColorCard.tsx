import { useState } from "react";
import styles from "../styles/colorCard.module.css";
import { ChromePicker } from "react-color";

interface colorCardProps {
  startColor: string;
  onColorItemChange: Function;
}

const colorCard = ({
  startColor = "#FFFFFF",
  onColorItemChange,
}: colorCardProps) => {
  const [currColor, setColor] = useState(startColor);
  const [showPicker, setShowPicker] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <div
        className={styles.ColorCardOuter}
        style={{ backgroundColor: currColor, margin: 15 }}
        onClick={() => setShowPicker(!showPicker)}
      >
        <div className={styles.ColorCardInfo}>
          <span>Hex: {currColor}</span>
        </div>
      </div>

      <div style={{ marginBottom: 25, display: showPicker ? "flex" : "none" }}>
        <ChromePicker
          color={currColor}
          onChange={(c) => (
            onColorItemChange(currColor, c.hex), setColor(c.hex)
          )}
        />
      </div>
    </div>
  );
};

export default colorCard;
