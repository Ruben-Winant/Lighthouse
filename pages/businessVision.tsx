import { ChangeEvent, FormEvent, useContext, useState } from "react";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { BusinessContext } from "../context/businessContext";

const BusinessVisionpage = () => {
  const { businessName } = useContext(BusinessContext);
  const router = useRouter();
  const [businessVisionState, setBusinessVisionState] = useState<string>("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault;
    router.push("/businessValues");
  };

  return (
    <Layout title="Lighthouse - Brand guide specialist">
      <section className="contentContainer">
        <h1>
          {businessName ? "Tell us about " + businessName + "'s " : "Business "}
          <span>vision</span>
        </h1>
        <p>That's a lovely name! What's the vision of your business?</p>
        <form onSubmit={(e: FormEvent) => onSubmit(e)}>
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
          <button type="submit" className="nextButton">
            Next
          </button>
        </form>
      </section>
    </Layout>
  );
};

export default BusinessVisionpage;
