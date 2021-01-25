import { useState } from "react";
import styles from "../styles/colorCard.module.css";
import { ChromePicker } from "react-color";

interface colorCardProps {
  startColor: string;
  onColorItemChange: Function;
  onRemove: Function;
}

const colorCard = ({
  startColor = "#FFFFFF",
  onColorItemChange,
  onRemove,
}: colorCardProps) => {
  const [currColor, setColor] = useState(startColor);
  const [showPicker, setShowPicker] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
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

      <span
        onClick={() => {
          onRemove(currColor);
        }}
        style={{
          marginTop: -10,
          cursor: "pointer",
          width: 150,
          textAlign: "right",
        }}
      >
        Remove
      </span>

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
