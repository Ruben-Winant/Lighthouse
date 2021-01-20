import { FormEvent } from "react";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import styles from "../styles/businessFonts.module.css";

const IndexPage = () => {
  const router = useRouter();

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

        <div style={{ marginBottom: 50 }}>
          <div className={styles.selectFontContainer}>
            <h1>Example sentence</h1>
            <div className={styles.selectFontContainerRow}>
              <span>
                <b>𝐁</b>
              </span>
              <span>
                <b>𝐼</b>
              </span>
            </div>
          </div>

          <div className={styles.selectFontContainer}>
            <h3>Example sentence</h3>
            <div className={styles.selectFontContainerRow}>
              <span>
                <b>𝐁</b>
              </span>
              <span>
                <b>𝐼</b>
              </span>
            </div>
          </div>

          <div className={styles.selectFontContainer}>
            <p>Example text</p>
            <div className={styles.selectFontContainerRow}>
              <span>
                <b>𝐁</b>
              </span>
              <span>
                <b>𝐼</b>
              </span>
            </div>
          </div>
        </div>

        <button onClick={onSubmit} type="submit" className="nextButton">
          Next
        </button>
      </section>
    </Layout>
  );
};

export default IndexPage;
