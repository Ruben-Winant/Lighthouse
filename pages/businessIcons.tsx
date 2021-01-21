import { FormEvent, useState } from "react";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import FileInputCard from "../components/FileInputCard";
import { FileType } from "../interfaces";
import styles from "../styles/businessIcons.module.css";

const BusinessIconPage = () => {
  const router = useRouter();
  const [addedIcons, setAddedIcons] = useState<string[]>([]);

  const removeIcon = (iconSrc: string) => {
    const filteredIcons: string[] = addedIcons.filter(
      (i) => i.toString() !== iconSrc.toString()
    );

    setAddedIcons(filteredIcons);
  };

  const onIconAdded = (iconSource: string) => {
    setAddedIcons([...addedIcons, iconSource]);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault;
    router.push("/businessFonts");
  };

  return (
    <Layout title="Lighthouse - Brand guide specialist">
      <section className="contentContainer">
        <h1>
          Business <span>icons</span>
        </h1>
        <p>
          Which icons will your business be using? Go ahead and add as many as
          you like. Click on any icon on the right to remove them.
        </p>
        <div className={styles.iconOuterContainer}>
          <FileInputCard
            title="Business icons"
            startWithImage={false}
            type={FileType.BusinessIcon}
            handleSubmit={onIconAdded}
            inputOnly={true}
          />
          <div style={{ display: addedIcons.length > 0 ? "block" : "none" }}>
            <h3>Added icons</h3>
            <div className={styles.addedIconsList}>
              {addedIcons.map((icon) => (
                <div
                  className={styles.iconItem}
                  onClick={() => removeIcon(icon)}
                >
                  <img src={icon} width={40} height={40} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <button onClick={onSubmit} className="nextButton">
          Next
        </button>
      </section>
    </Layout>
  );
};

export default BusinessIconPage;
