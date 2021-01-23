import { FormEvent, useContext, useState } from "react";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import FileInputCard from "../components/FileInputCard";
import { FileType } from "../interfaces";
import { BusinessContext } from "../context/businessContext";

const BusinessLogoVariantionsPage = () => {
  const router = useRouter();
  const [customWhiteLogo, setCustomWhiteLogo] = useState<string>("");
  const [customBlackLogo, setCustomBlackLogo] = useState<string>("");
  const [customWhiteLogomark, setCustomWhiteLogomark] = useState<string>("");
  const [customBlackLogomark, setCustomBlackLogomark] = useState<string>("");
  const [customWhiteAppicon, setCustomWhiteAppicon] = useState<string>("");
  const [customBlackAppicon, setCustomBlackAppicon] = useState<string>("");
  const {
    businessLogo,
    businessLogoMark,
    businessAppIcon,
    handleBusinessAppIconVarBlackCustom,
    handleBusinessAppIconVarWhiteCustom,
    handleBusinessLogoVarBlackCustom,
    handleBusinessLogoMarkVarBlackCustom,
    handleBusinessLogoMarkVarWhiteCustom,
    handleBusinessLogoVarWhiteCustom,
  } = useContext(BusinessContext);

  const handleCustomImage = (src: string, type: FileType) => {
    switch (type) {
      case FileType.LogoWhite:
        setCustomWhiteLogo(src);
        break;

      case FileType.LogoBlack:
        setCustomBlackLogo(src);
        break;

      case FileType.LogomarkWhite:
        setCustomWhiteLogomark(src);
        break;

      case FileType.LogomarkDark:
        setCustomBlackLogomark(src);
        break;

      case FileType.IconWhite:
        setCustomWhiteAppicon(src);
        break;

      case FileType.IconBlack:
        setCustomBlackAppicon(src);
        break;
    }
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault;
    handleBusinessAppIconVarBlackCustom(customBlackAppicon);
    handleBusinessAppIconVarWhiteCustom(customWhiteAppicon);
    handleBusinessLogoMarkVarBlackCustom(customBlackLogomark);
    handleBusinessLogoMarkVarWhiteCustom(customWhiteLogomark);
    handleBusinessLogoVarBlackCustom(customBlackLogo);
    handleBusinessLogoVarWhiteCustom(customWhiteLogo);
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

        <div style={{ display: "flex" }}>
          <FileInputCard
            title="Black logo"
            type={FileType.LogoBlack}
            startWithImage={true}
            startImage={businessLogo}
            handleSubmit={handleCustomImage}
          />
          <FileInputCard
            title="White logo"
            type={FileType.LogoWhite}
            startWithImage={true}
            startImage={businessLogo}
            handleSubmit={handleCustomImage}
          />
        </div>

        <div style={{ display: "flex" }}>
          <FileInputCard
            title="Black logomark"
            type={FileType.LogomarkDark}
            startWithImage={businessLogoMark ? true : false}
            startImage={businessLogoMark}
            handleSubmit={handleCustomImage}
          />
          <FileInputCard
            title="White logomark"
            type={FileType.LogomarkWhite}
            startWithImage={businessLogoMark ? true : false}
            startImage={businessLogoMark}
            handleSubmit={handleCustomImage}
          />
        </div>

        <div style={{ display: "flex" }}>
          <FileInputCard
            title="Black app icon"
            type={FileType.IconBlack}
            startWithImage={businessAppIcon ? true : false}
            startImage={businessAppIcon}
            handleSubmit={handleCustomImage}
          />
          <FileInputCard
            title="White app icon"
            type={FileType.IconWhite}
            startWithImage={businessAppIcon ? true : false}
            startImage={businessAppIcon}
            handleSubmit={handleCustomImage}
          />
        </div>

        <button onClick={onSubmit} type="submit" className="nextButton">
          Next
        </button>
      </section>
    </Layout>
  );
};

export default BusinessLogoVariantionsPage;
