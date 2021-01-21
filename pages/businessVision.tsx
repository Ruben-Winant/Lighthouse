import { ChangeEvent, FormEvent, useContext, useState } from "react";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { BusinessContext } from "../context/businessContext";

const BusinessVisionpage = () => {
  const { businessName, handleBusinessVision } = useContext(BusinessContext);
  const router = useRouter();
  const [businessVisionState, setBusinessVisionState] = useState<string>("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault;
    handleBusinessVision(businessVisionState);
    router.push("/businessValues");
  };

  return (
    <Layout title="Lighthouse - Brand guide specialist">
      <section className="contentContainer">
        {businessName ? (
          <h1>
            Tell us about <span>{businessName}'s vision</span>
          </h1>
        ) : (
          <h1>
            Tell us about your <span>business's vision</span>
          </h1>
        )}
        <p>That's a lovely name! What's the vision of your business?</p>
        <div className="formInputRow">
          <textarea
            className="formTextArea"
            placeholder="Business vision"
            rows={6}
            required
            value={businessVisionState}
            onChange={(val: ChangeEvent<HTMLTextAreaElement>) =>
              setBusinessVisionState(val.target.value)
            }
          />
        </div>
        <button
          onClick={onSubmit}
          type="submit"
          className="nextButton"
          disabled={businessVisionState ? false : true}
          style={{ backgroundColor: businessVisionState ? "" : "#888888" }}
        >
          Next
        </button>
      </section>
    </Layout>
  );
};

export default BusinessVisionpage;
