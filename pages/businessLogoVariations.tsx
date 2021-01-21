import { FormEvent, useContext, useState } from "react";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import FileInputCard from "../components/FileInputCard";
import { FileType } from "../interfaces";
import { BusinessContext } from "../context/businessContext";

const BusinessLogoVariantionsPage = () => {
  const router = useRouter();
  const { businessLogo } = useContext(BusinessContext);
  const [customWhiteLogo, setCustomWhiteLogo] = useState<string>("");
  const [customWhiteLogomark, setCustomWhiteLogomark] = useState<string>("");
  const [customWhiteAppicon, setCustomWhiteAppicon] = useState<string>("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault;
    router.push("/businessColors");
  };

  return (
    <Layout title="Lighthouse - Brand guide specialist">
      <section className="contentContainer">
        <h1>
          Logo <span>variations</span>
        </h1>
        <p>
          We've tried to create the black and white version of your logo,
          logomark and icon. If one of them isn't the way it should be, remove
          it and upload your own.
        </p>
        <FileInputCard
          title=""
          type={FileType.Logo}
          startWithImage={true}
          startImage={businessLogo}
        />
        <button onClick={onSubmit} type="submit" className="nextButton">
          Next
        </button>
      </section>
    </Layout>
  );
};

export default BusinessLogoVariantionsPage;
