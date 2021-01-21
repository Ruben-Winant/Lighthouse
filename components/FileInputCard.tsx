import { ChangeEvent, useState } from "react";
import styles from "../styles/FileInputCard.module.css";
import Image from "next/image";
import { FileType } from "../interfaces/index";

interface FileInputProps {
  type: FileType;
  startWithImage: boolean;
  startImage?: any;
  handleSubmit?: Function;
  handleDelete?: Function;
  inputOnly?: boolean;
  title: string;
}

const FileInputCard = ({
  type,
  startWithImage,
  startImage,
  handleSubmit,
  inputOnly = false,
  title,
  handleDelete,
}: FileInputProps) => {
  const [itemSrc, setItemSrc] = useState(startImage ? startImage : null);
  const [itemPresent, setItemPresent] = useState<boolean>(startWithImage);

  const onItemAddedHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e !== null) {
      setItemSrc(
        URL.createObjectURL(
          e.currentTarget.files ? e.currentTarget.files[0] : null
        )
      );
      handleSubmit
        ? handleSubmit(
            URL.createObjectURL(
              e.currentTarget.files ? e.currentTarget.files[0] : null
            ),
            type
          )
        : null;
      setItemPresent(true);
    } else {
      setItemPresent(false);
    }
  };

  return (
    <div className={styles.logoInnerInputContainer}>
      <h3>{title}</h3>
      <label
        className={styles.logoFileContainer}
        htmlFor={"LogoType" + type}
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
        id={"LogoType" + type}
        hidden
        type="file"
        accept=".svg"
        onChange={(e) => onItemAddedHandler(e)}
        multiple={false}
      />
      <object
        data={itemSrc}
        className={styles.mainLogo}
        style={{ display: itemPresent && !inputOnly ? "flex" : "none" }}
        type="image/svg+xml"
      />
      <div
        className={styles.logoInnerInputContainerRemove}
        style={{ display: itemPresent && !inputOnly ? "flex" : "none" }}
        onClick={() => (
          handleDelete ? handleDelete(type) : null,
          setItemSrc("" as any),
          setItemPresent(false)
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
