import { useContext, useState } from "react";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import styles from "../styles/businessValues.module.css";
import { BusinessContext } from "../context/businessContext";

const BusinessValuesPage = () => {
  const { businessName } = useContext(BusinessContext);
  const router = useRouter();
  const [currBValue, setCurrBValue] = useState<string>("");
  const [bValues, setBValues] = useState<string[]>([]);
  const [showAddContent, setShowAddContent] = useState<boolean>(true);

  const handleAddValueClick = () => {
    let currValues: string[] = bValues;
    currValues.push(currBValue);
    if (currValues.length >= 10) {
      setShowAddContent(false);
      setBValues(currValues);
    } else {
      setShowAddContent(true);
      setBValues(currValues);
    }
    setCurrBValue("");
  };

  const handleDeleteValueClick = (toDelete: string) => {
    const filteredVals: string[] = bValues.filter(
      (i) => i.toString() !== toDelete.toString()
    );

    if (filteredVals.length >= 10) {
      setShowAddContent(false);
      setBValues(filteredVals);
    } else {
      setShowAddContent(true);
      setBValues(filteredVals);
    }
  };

  const onSubmit = () => {
    router.push("/businessLogo");
  };

  return (
    <Layout title="Lighthouse - Brand guide specialist">
      <section className="contentContainer">
        {businessName ? (
          <h1>
            What are <span>{businessName}'s values?</span>
          </h1>
        ) : (
          <h1>
            What are your <span>business's values?</span>
          </h1>
        )}

        <p>
          So we now what we can call you and what your vision is. Now we would
          like to know which values your business represents. (max 10)
        </p>
        <div
          className={styles.businessInputRow}
          style={{ display: showAddContent ? "flex" : "none" }}
        >
          <input
            type="text"
            className="formInput"
            value={currBValue}
            onChange={(e) => setCurrBValue(e.target.value)}
          />
          <button onClick={handleAddValueClick} className="nextButton">
            +
          </button>
        </div>

        {bValues.length > 0 ? (
          <div>
            <span>
              <b>[business's] values</b>
            </span>
            <div className={styles.businesValuesRow}>
              {bValues.map((val) => (
                <div>
                  {val}
                  <button
                    onClick={() => handleDeleteValueClick(val)}
                    className={styles.businessValuesSmallButton}
                  >
                    <b>X</b>
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <span>
            <b>no values added yet</b>
          </span>
        )}

        <button onClick={onSubmit} type="submit" className="nextButton">
          Next
        </button>
      </section>
    </Layout>
  );
};

export default BusinessValuesPage;
