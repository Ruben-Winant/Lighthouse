import Link from "next/link";
import Layout from "../components/Layout";
// import styles from "../styles/index.module.css";

const IndexPage = () => (
  <Layout title="Lighthouse - Brand guide specialist" displayBorder="block">
    <section className="contentContainer">
      <h1>
        It's time to <span>brighten up</span>
        <br /> your business.
      </h1>
      <p>
        Let lighthouse be your guiding light in creating a fast and extensive
        brand guide.
      </p>
      <Link href="/businessName">
        <a className="nextButton">Create brand guide</a>
      </Link>
    </section>
    {/* <div className={styles.sideBar}></div> */}
  </Layout>
);

export default IndexPage;
