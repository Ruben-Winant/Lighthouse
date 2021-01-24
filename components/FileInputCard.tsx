import { ChangeEvent, useEffect, useState } from "react";
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

  useEffect(() => {
    const svg: any = document.getElementById("SVGobject" + type);

    const convertToWhite = (svg: any) => {
      //decoding from base64 to string
      var data = svg.src.split("base64,")[1];
      var decoSvg = atob(data);

      //change props of svg
      var parser = new DOMParser();
      var doc = parser.parseFromString(decoSvg as string, "image/svg+xml");
      doc.getElementsByTagName("svg")[0].style.backgroundColor = "#000000";
      var paths = doc.getElementsByTagName("path");
      Array.from(paths).forEach((path) => (path.style.fill = "#FFFFFF"));
      var groups = doc.getElementsByTagName("g");
      Array.from(groups).forEach((g) => (g.style.fill = "#FFFFFF"));

      //set updated file as src
      setItemSrc(doc.getElementsByTagName("svg")[0].outerHTML);
      handleSubmit ? handleSubmit(svg, type) : null;
    };

    const convertToBlack = (svg: any) => {
      //decoding from base64 to string
      var data = svg.src.split("base64,")[1];
      var decoSvg = atob(data);

      //change props of svg
      var parser = new DOMParser();
      var doc = parser.parseFromString(decoSvg as string, "image/svg+xml");
      doc.getElementsByTagName("svg")[0].style.backgroundColor = "#FFFFFF";
      var paths = doc.getElementsByTagName("path");
      Array.from(paths).forEach((path) => (path.style.fill = "#000000"));
      var groups = doc.getElementsByTagName("g");
      Array.from(groups).forEach((g) => (g.style.fill = "#000000"));

      //set updated file as src
      setItemSrc(doc.getElementsByTagName("svg")[0].outerHTML);
      handleSubmit ? handleSubmit(svg, type) : null;
    };

    //handlers for logo variants
    if (svg && itemPresent) {
      switch (type) {
        case FileType.LogoWhite:
          convertToWhite(svg);
          break;
        case FileType.LogoBlack:
          convertToBlack(svg);
          break;
        case FileType.LogomarkWhite:
          convertToWhite(svg);
          break;
        case FileType.LogomarkDark:
          convertToBlack(svg);
          break;
        case FileType.IconWhite:
          convertToWhite(svg);
          break;
        case FileType.IconBlack:
          convertToBlack(svg);
          break;
        default:
          break;
      }
    }
  }, []);

  const onItemAddedHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files !== null) {
      var reader = new FileReader();
      reader.onload = function (e) {
        var svgData = e.target?.result;
        var parser = new DOMParser();
        var doc = parser.parseFromString(svgData as string, "image/svg+xml");
        var svg = doc.getElementsByTagName("svg")[0].outerHTML.toString();
        setItemSrc(svg);
        handleSubmit ? handleSubmit(svg, type) : null;
      };
      reader.readAsText(e.currentTarget.files[0]);
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

      <img
        id={"SVGobject" + type}
        //src={`data:image/svg+xml;base64,${btoa(itemSrc)}`}
        src={`data:image/svg+xml;base64,${Buffer.from(
          itemSrc,
          "binary"
        ).toString("base64")}`}
        alt={type.toString()}
        className={styles.mainLogo}
        style={{
          overflow: "visible",
          display: itemPresent && !inputOnly ? "flex" : "none",
        }}
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
