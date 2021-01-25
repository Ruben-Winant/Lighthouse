import { FormEvent, useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import ColorCard from "../components/ColorCard";
import { BusinessContext } from "../context/businessContext";

const BusinessColorsPage = () => {
  const router = useRouter();
  const { businessLogo, handleBusinessColors } = useContext(BusinessContext);
  const [colorList, setColorList] = useState([""]);

  useEffect(() => {
    const colorRegex = new RegExp(/(#[a-zA-Z0-9]{6})/gm);

    //decode
    var data = businessLogo.split("base64,")[1];
    const decoSvg = Buffer.from(data, "base64").toString();
    let svgColors = decoSvg.match(colorRegex) as string[];

    svgColors = svgColors.filter(
      (value, index, self) => self.indexOf(value) === index
    );
    svgColors = svgColors.filter((value) => value !== "");
    setColorList(svgColors);
  }, []);

  const onColorChooserDeleted = (currColor: string) => {
    setColorList(colorList.filter((val) => val !== currColor));
  };

  const onColorListItemChanged = (currentColor: string, hex: string) => {
    colorList[colorList.indexOf(currentColor)] = hex;
    setColorList(colorList);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault;
    handleBusinessColors(colorList);
    router.push("/businessIcons");
  };

  return (
    <Layout title="Lighthouse - Brand guide specialist">
      <section className="contentContainer">
        <h1>
          Color<span> pallette</span>
        </h1>
        <p>
          Here we tried collecting the colors from your logo. If there not right
          you can just click the card and change it. You can even add more
          colors to your liking.
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {colorList.map((col) => (
            <ColorCard
              key={col + "key"}
              startColor={col}
              onColorItemChange={onColorListItemChanged}
              onRemove={onColorChooserDeleted}
            />
          ))}
        </div>
        <div style={{ display: "flex" }}>
          <button
            onClick={() => setColorList([...colorList, "#FFFFFF"])}
            style={{ marginRight: 15 }}
            className="nextButton"
          >
            Add color
          </button>
          <button
            onClick={onSubmit}
            type="submit"
            className="nextButton"
            style={{ background: colorList.length > 0 ? "#3e82f8" : "#888888" }}
            disabled={colorList.length > 0 ? false : true}
          >
            Next
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default BusinessColorsPage;
