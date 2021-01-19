import Layout from "../components/Layout";
import PricingCard from "../components/PricingCard";

const PricingPage = () => (
  <Layout title="Lighthouse - Brand guide specialist">
    <section>
      <h1>Pricing</h1>
      <br />
      <div
        style={{
          width: "auto",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <PricingCard
          title="Lite"
          price="FREE"
          limited={false}
          paymentType="with restrictions"
          features={[
            "Create a stunning brand guide.",
            "Export the brand guide to pdf.",
            "Free, forever",
          ]}
          buttonText="Create an account"
        />

        <PricingCard
          title="Pro"
          price="$25"
          limited={false}
          paymentType="billed monthly or annually"
          features={[
            "Create unlimited stunning brand guides.",
            "Export the brand guide('s) to pdf, ppt, svg and more.",
            "Save your brand guide in your account.",
            "No trademarks.",
          ]}
          buttonText="Create an account"
        />
      </div>
    </section>
  </Layout>
);

export default PricingPage;
