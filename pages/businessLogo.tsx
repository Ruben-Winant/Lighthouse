import { FormEvent } from "react";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import styles from "../styles/businessLogo.module.css";
import FileInputCard from "../components/FileInputCard";
import { FileType } from "../interfaces";

const businessLogoPage = () => {
  const router = useRouter();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault;
    router.push("/businessLogoVariations");
  };

  return (
    <Layout title="Lighthouse - Brand guide specialist">
      <section className="contentContainer">
        <h1>
          Add your
          <span> business Logo.</span>
        </h1>
        <p>We've got the basic stuff done now, let's start with the details.</p>
        <div className={styles.logoOuterInputContainer}>
          <FileInputCard type={FileType.Logo} startWithImage={false} />
          <FileInputCard type={FileType.Logomark} startWithImage={false} />
          <FileInputCard type={FileType.Icon} startWithImage={false} />
        </div>

        <button onClick={onSubmit} type="submit" className="nextButton">
          Next
        </button>
      </section>
    </Layout>
  );
};

export default businessLogoPage;
