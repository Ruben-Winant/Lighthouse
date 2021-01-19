import { ChangeEvent, useState } from "react";
import styles from "../styles/FileInputCard.module.css";
import Image from "next/image";
import { FileType } from "../interfaces/index";

interface FileInputProps {
  type: FileType;
  startWithImage: boolean;
  startImage?: any;
  handleSubmit?: Function;
  inputOnly?: boolean;
}

const FileInputCard = ({
  type,
  startWithImage,
  startImage,
  handleSubmit,
  inputOnly = false,
}: FileInputProps) => {
  const [itemSrc, setItemSrc] = useState(startImage ? startImage : null);
  const [itemPresent, setItemPresent] = useState<boolean>(startWithImage);

  const onItemAddedHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e !== null) {
      //! add item to context
      setItemSrc(URL.createObjectURL(e.currentTarget.files[0]));
      handleSubmit
        ? handleSubmit(URL.createObjectURL(e.currentTarget.files[0]))
        : null;
      setItemPresent(true);
    } else {
      setItemPresent(false);
    }
  };

  return (
    <div className={styles.logoInnerInputContainer}>
      <h3>{type}</h3>
      <label
        className={styles.logoFileContainer}
        htmlFor="mainLogo"
        style={{ display: itemPresent && !inputOnly ? "none" : "flex" }}
      >
        <Image
          src="/images/svgIcon.svg"
          alt="scg icon"
          width={65}
          height={65}
        />
        <p style={{ margin: 7 }}>
          Click to upload your <br /> svg file.
        </p>
      </label>
      <input
        id="mainLogo"
        hidden
        type="file"
        accept=".svg"
        onChange={(e) => onItemAddedHandler(e)}
        multiple={false}
      />
      <img
        src={itemSrc}
        className={styles.mainLogo}
        style={{ display: itemPresent && !inputOnly ? "flex" : "none" }}
      />
      <div
        className={styles.logoInnerInputContainerRemove}
        style={{ display: itemPresent && !inputOnly ? "flex" : "none" }}
        onClick={() => (
          //! remove item from context
          setItemSrc("" as any), setItemPresent(false)
        )}
      >
        <span>
          <b>Remove</b>
        </span>
      </div>
    </div>
  );
};

export default FileInputCard;
