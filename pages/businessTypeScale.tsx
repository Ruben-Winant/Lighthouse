import { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Scales } from "../interfaces";
import styles from "../styles/businessTypeScale.module.css";
import { BusinessContext } from "../context/businessContext";

interface props {}

const businessTypescalePage = ({}: props) => {
  const {
    handleH1FontSize,
    handleH2FontSize,
    handleH3FontSize,
    handleH4FontSize,
    handleH5FontSize,
    handleBodyFontSize,
    handleSubTextFontSize,
    handleCaptionFontSize,
  } = useContext(BusinessContext);
  const [baseFontSize, setBaseFontSize] = useState<number>(16);
  const [scale, setScale] = useState<number>(Scales["Major Third"]);
  const [exampleSentence, setSentence] = useState<string>("Example sentence");
  const [h1, setH1] = useState<number>(baseFontSize);
  const [h2, setH2] = useState<number>(baseFontSize);
  const [h3, setH3] = useState<number>(baseFontSize);
  const [h4, setH4] = useState<number>(baseFontSize);
  const [h5, setH5] = useState<number>(baseFontSize);
  const [p, setP] = useState<number>(baseFontSize);
  const [subText, setSubText] = useState<number>(baseFontSize);
  const [caption, setCaption] = useState<number>(baseFontSize);

  useEffect(() => {
    setH1((baseFontSize * scale * scale * scale * scale * scale).toFixed(2));
    setH2((baseFontSize * scale * scale * scale * scale).toFixed(2));
    setH3((baseFontSize * scale * scale * scale).toFixed(2));
    setH4((baseFontSize * scale * scale).toFixed(2));
    setH5((baseFontSize * scale).toFixed(2));
    setP(baseFontSize.toFixed(2));
    setSubText((baseFontSize / scale).toFixed(2));
    setCaption((baseFontSize / scale / scale).toFixed(2));
  }, [scale, baseFontSize]);

  const onSubmitSizes = () => {
    handleH1FontSize(h1);
    handleH2FontSize(h2);
    handleH3FontSize(h3);
    handleH4FontSize(h4);
    handleH5FontSize(h5);
    handleBodyFontSize(p);
    handleSubTextFontSize(subText);
    handleCaptionFontSize(caption);
  };

  return (
    <Layout title="Lighthouse - Brand guide specialist">
      <section className="contentContainer">
        <h1>
          Business <span>typescale</span>
        </h1>
        <p>
          Great font choice, here you can choose how large you want them to be
          displayed.
        </p>
        <div className={styles.inputElement}>
          <label htmlFor="baseSize">Base size</label>
          <input
            name="baseSize"
            type="number"
            min={1}
            value={baseFontSize.toString()}
            onChange={(e) =>
              setBaseFontSize(Number.parseInt(e.currentTarget.value))
            }
          />
          px
        </div>
        <div className={styles.selectElement}>
          <label htmlFor="Scale">Scale</label>
          <select
            name="Scale"
            value={scale}
            onChange={(e) => setScale(Number.parseFloat(e.currentTarget.value))}
          >
            {Object.values(Scales)
              .filter((s) => isNaN(Number.parseInt(s.toString())))
              .map((scale) => (
                <option key={scale} value={Scales[scale as any]}>
                  {scale + " - " + Scales[scale as any]}
                </option>
              ))}
          </select>
        </div>
        <div className={styles.inputSentence}>
          <label htmlFor="sentence">Preview text</label>
          <input
            name="sentence"
            type="text"
            value={exampleSentence}
            onChange={(e) => setSentence(e.currentTarget.value)}
          />
        </div>

        <div style={{ marginTop: "5%" }}>
          <div className={styles.fontScaleRow}>
            <div className={styles.fontScaleRowLabels}>
              <span>H1</span>
              <label>{h1 + "px | " + (h1 / 16).toFixed(3) + "rem"}</label>
            </div>
            <h1 style={{ fontSize: Number.parseFloat(h1.toString()) }}>
              {exampleSentence}
            </h1>
          </div>
          <div className={styles.fontScaleRow}>
            <div className={styles.fontScaleRowLabels}>
              <span>H2</span>
              <label>{h2 + "px | " + (h2 / 16).toFixed(3) + "rem"}</label>
            </div>
            <h2 style={{ fontSize: Number.parseFloat(h2.toString()) }}>
              {exampleSentence}
            </h2>
          </div>
          <div className={styles.fontScaleRow}>
            <div className={styles.fontScaleRowLabels}>
              <span>H3</span>
              <label>{h3 + "px | " + (h3 / 16).toFixed(3) + "rem"}</label>
            </div>

            <h3 style={{ fontSize: Number.parseFloat(h3.toString()) }}>
              {exampleSentence}
            </h3>
          </div>
          <div className={styles.fontScaleRow}>
            <div className={styles.fontScaleRowLabels}>
              <span>H4</span>
              <label>{h4 + "px | " + (h4 / 16).toFixed(3) + "rem"}</label>
            </div>
            <h4 style={{ fontSize: Number.parseFloat(h4.toString()) }}>
              {exampleSentence}
            </h4>
          </div>
          <div className={styles.fontScaleRow}>
            <div className={styles.fontScaleRowLabels}>
              <span>H5</span>
              <label>{h5 + "px | " + (h5 / 16).toFixed(3) + "rem"}</label>
            </div>
            <h5 style={{ fontSize: Number.parseFloat(h5.toString()) }}>
              {exampleSentence}
            </h5>
          </div>
          <div className={styles.fontScaleRow}>
            <div className={styles.fontScaleRowLabels}>
              <span>Body</span>
              <label>{p + "px | " + (p / 16).toFixed(3) + "rem"}</label>
            </div>

            <p style={{ fontSize: Number.parseFloat(p.toString()) }}>
              {exampleSentence}
            </p>
          </div>
          <div className={styles.fontScaleRow}>
            <div className={styles.fontScaleRowLabels}>
              <span>Sub text</span>
              <label>
                {subText + "px | " + (subText / 16).toFixed(3) + "rem"}
              </label>
            </div>

            <p style={{ fontSize: Number.parseFloat(subText.toString()) }}>
              {exampleSentence}
            </p>
          </div>
          <div className={styles.fontScaleRow}>
            <div className={styles.fontScaleRowLabels}>
              <span>Caption</span>{" "}
              <label>
                {caption + "px | " + (caption / 16).toFixed(3) + "rem"}
              </label>
            </div>

            <p style={{ fontSize: Number.parseFloat(caption.toString()) }}>
              {exampleSentence}
            </p>
          </div>
        </div>
        <button className="nextButton" onClick={() => onSubmitSizes()}>
          Finalize
        </button>
      </section>
    </Layout>
  );
};

export default businessTypescalePage;
