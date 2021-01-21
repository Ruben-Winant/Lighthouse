import { FormEvent, useContext, useState } from "react";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import styles from "../styles/businessLogo.module.css";
import FileInputCard from "../components/FileInputCard";
import { FileType } from "../interfaces";
import { BusinessContext } from "../context/businessContext";

const businessLogoPage = () => {
  const router = useRouter();
  const {
    handleBusinessLogo,
    handleBusinessLogoMark,
    handleBusinessAppIcon,
  } = useContext(BusinessContext);
  const [logoSrc, setLogo] = useState<string>("");
  const [logomarkSrc, setLogomark] = useState<string>("");
  const [appiconSrc, setAppicon] = useState<string>("");

  const onPictureAdded = (src: string, type: FileType) => {
    switch (type) {
      case FileType.Logo:
        setLogo(src);
        break;
      case FileType.Logomark:
        setLogomark(src);
        break;
      case FileType.Icon:
        setAppicon(src);
        break;
      default:
        break;
    }
  };

  const onDeleteSrc = (type: FileType) => {
    switch (type) {
      case FileType.Logo:
        setLogo("");
        break;
      case FileType.Logomark:
        setLogomark("");
        break;
      case FileType.Icon:
        setAppicon("");
        break;
      default:
        break;
    }
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault;
    handleBusinessLogo(logoSrc);
    handleBusinessLogoMark(logomarkSrc);
    handleBusinessAppIcon(appiconSrc);
    router.push("/businessLogoVariations");
  };

  return (
    <Layout title="Lighthouse - Brand guide specialist">
      <section className="contentContainer">
        <h1>
          Add your
          <span> Logo.</span>
        </h1>
        <p>We've got the basic stuff done now, let's start with the details.</p>
        <div className={styles.logoOuterInputContainer}>
          <FileInputCard
            title="Logo*"
            type={FileType.Logo}
            startWithImage={false}
            handleSubmit={onPictureAdded}
            handleDelete={onDeleteSrc}
          />
          <FileInputCard
            title="Logomark"
            type={FileType.Logomark}
            startWithImage={false}
            handleSubmit={onPictureAdded}
            handleDelete={onDeleteSrc}
          />
          <FileInputCard
            title="App icon"
            type={FileType.Icon}
            startWithImage={false}
            handleSubmit={onPictureAdded}
            handleDelete={onDeleteSrc}
          />
        </div>

        <button
          onClick={onSubmit}
          type="submit"
          className="nextButton"
          disabled={logoSrc ? false : true}
          style={{ backgroundColor: logoSrc ? "#3E82F8" : "#888888" }}
        >
          Next
        </button>
      </section>
    </Layout>
  );
};

export default businessLogoPage;
