import { ChangeEvent, FormEvent, useContext, useState } from "react";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { BusinessContext } from "../context/businessContext";

const IndexPage = () => {
  const { handleBusinessName } = useContext(BusinessContext);
  const router = useRouter();
  const [businessNameState, setBusinessnameState] = useState<string>("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault;
    handleBusinessName(businessNameState);
    router.push("/businessVision");
  };

  return (
    <Layout title="Lighthouse - Brand guide specialist">
      <section className="contentContainer">
        <h1>
          How may we call
          <br /> your <span>business?</span>
        </h1>
        <p>Let start of with your name shall we?</p>

        <div className="formInputRow">
          <input
            className="formInput"
            type="text"
            placeholder="Business name"
            required
            value={businessNameState}
            onChange={(val: ChangeEvent<HTMLInputElement>) =>
              setBusinessnameState(val.target.value)
            }
          />
        </div>
        <button
          onClick={onSubmit}
          type="submit"
          className="nextButton"
          disabled={businessNameState ? false : true}
          style={{ backgroundColor: businessNameState ? "" : "#888888" }}
        >
          Next
        </button>
      </section>
    </Layout>
  );
};

export default IndexPage;
