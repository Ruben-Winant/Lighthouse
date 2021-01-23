import { FormEvent, useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import ColorCard from "../components/ColorCard";
import { BusinessContext } from "../context/businessContext";

const BusinessColorsPage = () => {
  const router = useRouter();
  // const { businessLogo } = useContext(BusinessContext);
  const [colorList, setColorList] = useState([""]);

  useEffect(() => {}, []);

  const onColorListItemChanged = (currentColor: string, hex: string) => {
    colorList[colorList.indexOf(currentColor)] = hex;
    setColorList(colorList);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault;
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
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {colorList.map((col) => (
            <ColorCard
              key={col}
              startColor={col}
              onColorItemChange={onColorListItemChanged}
            />
          ))}
          <button
            onClick={() => setColorList([...colorList, "#FFFFFF"])}
            className="nextButton"
          >
            +
          </button>
        </div>
        <button onClick={onSubmit} type="submit" className="nextButton">
          Next
        </button>
      </section>
    </Layout>
  );
};

export default BusinessColorsPage;
