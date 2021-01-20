import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/index.module.css";

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
    <div className={styles.sideBar}>
      <div
        style={{
          width: 230,
          textAlign: "center",
          marginLeft: "auto",
          marginRight: "auto",
          color: "#FFFFFF",
        }}
      >
        <p>
          This project is still in development but feel free to look around!
        </p>
        <p>
          If you got any ideas to evolve this application feel free to let me
          know on ruben.winant@hotmail.com
        </p>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
