import Layout from "../components/Layout";

const ForgotPasswordPage = () => {
  <Layout title="Lighthouse - Brand guide specialist">
    <section
      className="contentContainer"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h1>Reset password?</h1>
      <form>
        <div className="formInputRow">
          <label>Email</label>
          <input
            className="formInput"
            type="email"
            placeholder="Email"
            required
          />
        </div>
        <button className="nextButton" type="submit">
          Reset
        </button>
      </form>
    </section>
  </Layout>;
};

export default ForgotPasswordPage;
