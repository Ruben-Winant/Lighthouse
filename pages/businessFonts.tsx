import { FormEvent, useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import styles from "../styles/businessFonts.module.css";
import { FontType, GoogleFontStyles } from "../interfaces";
import FontSelector from "../components/FontSelector";
import { BusinessContext } from "../context/businessContext";

const IndexPage = () => {
  const router = useRouter();
  const {
    handleHeaderFont,
    handleHeaderFontItalic,
    handleHeaderFontBold,
    handleSubheaderFont,
    handleSubheaderFontItalic,
    handleSubheaderFontBold,
    handleBodyFont,
    handleBodyFontItalic,
    handleBodyFontBold,
  } = useContext(BusinessContext);
  const [googleFonts, setGoogleFonts] = useState<GoogleFontStyles>();
  const [sentence, setSentence] = useState<string>("Example sentence");
  const [header, setHeader] = useState<string>("Poppins");
  const [subheader, setSubheader] = useState<string>("Poppins");
  const [body, setBody] = useState<string>("Poppins");

  const [headerItalic, setHeaderItalic] = useState<boolean>(false);
  const [subheaderItalic, setSubheaderItalic] = useState<boolean>(false);
  const [bodyItalic, setBodyItalic] = useState<boolean>(false);

  const [headerBold, setHeaderBold] = useState<boolean>(false);
  const [subheaderBold, setSubheaderBold] = useState<boolean>(false);
  const [bodyBold, setBodyBold] = useState<boolean>(false);

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=" +
        process.env.GOOGLEAPIKEY
    )
      .then((res) => res.json())
      .then((fonts) => setGoogleFonts(fonts));
  }, []);

  const handleFontChange = (font: string, type: FontType) => {
    switch (type) {
      case FontType.Header:
        setHeader(font);
        break;

      case FontType.SubHeader:
        setSubheader(font);
        break;

      case FontType.Body:
        setBody(font);
        break;
    }
  };

  const handleFontBold = (bold: boolean, type: FontType) => {
    switch (type) {
      case FontType.Header:
        setHeaderBold(bold);
        break;

      case FontType.SubHeader:
        setSubheaderBold(bold);
        break;

      case FontType.Body:
        setBodyBold(bold);
        break;
    }
  };

  const handleFontItalic = (italic: boolean, type: FontType) => {
    switch (type) {
      case FontType.Header:
        setHeaderItalic(italic);
        break;

      case FontType.SubHeader:
        setSubheaderItalic(italic);
        break;

      case FontType.Body:
        setBodyItalic(italic);
        break;
    }
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault;
    handleHeaderFont(header);
    handleSubheaderFont(subheader);
    handleBodyFont(body);
    handleHeaderFontItalic(headerItalic);
    handleSubheaderFontItalic(subheaderItalic);
    handleBodyFontItalic(bodyItalic);
    handleHeaderFontBold(headerBold);
    handleSubheaderFontBold(subheaderBold);
    handleBodyFontBold(bodyBold);
    router.push("/");
  };

  return (
    <Layout title="Lighthouse - Brand guide specialist">
      <section className="contentContainer">
        <h1>
          Business <span>fonts</span>
        </h1>
        <p>Which beautiful fonts will you be using?</p>
        <div className={styles.sampleInputRow}>
          <h5 style={{ color: "#3E82F8" }}>Type your sample text here</h5>
          <input
            className="formInput"
            value={sentence}
            style={{ width: 250 }}
            onChange={(val) => setSentence(val.target.value)}
          />
        </div>

        <div style={{ marginBottom: 50 }}>
          <FontSelector
            googleFonts={googleFonts}
            example={sentence}
            fontType={FontType.Header}
            handleChange={handleFontChange}
            handleBold={handleFontBold}
            handleItalic={handleFontItalic}
          />
          <FontSelector
            googleFonts={googleFonts}
            example={sentence}
            fontType={FontType.SubHeader}
            handleChange={handleFontChange}
            handleBold={handleFontBold}
            handleItalic={handleFontItalic}
          />
          <FontSelector
            googleFonts={googleFonts}
            example={sentence}
            fontType={FontType.Body}
            handleChange={handleFontChange}
            handleBold={handleFontBold}
            handleItalic={handleFontItalic}
          />
        </div>
        <button onClick={onSubmit} type="submit" className="nextButton">
          Next
        </button>
      </section>
    </Layout>
  );
};

export default IndexPage;
