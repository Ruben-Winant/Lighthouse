import { FormEvent, useState } from "react";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import styles from "../styles/businessFonts.module.css";
import FontSelector from "../components/FontSelector";

const IndexPage = () => {
  const router = useRouter();
  const [sentence, setSentence] = useState<string>("Example sentence");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault;
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
            onChange={(val) => setSentence(val.target.value)}
          />
        </div>

        <div style={{ marginBottom: 50 }}>
          <FontSelector example={sentence} />
        </div>
        <button onClick={onSubmit} type="submit" className="nextButton">
          Next
        </button>
      </section>
    </Layout>
  );
};

export default IndexPage;
