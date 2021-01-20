import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import Layout from "../components/Layout";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault;
    //check for correct sign in credentials
    //log user in
    //return to home
    //if false, display error message.
  };

  return (
    <Layout
      title="Lighthouse - Brand guide specialist"
      displayBorder="block"
      displaySquare="block"
    >
      <section className="contentContainer">
        <h1>Login</h1>
        <form>
          <div className="formInputRow">
            <label>Email</label>
            <input
              className="formInput"
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(val: ChangeEvent<HTMLInputElement>) =>
                setEmail(val.target.value)
              }
            />
          </div>
          <div className="formInputRow">
            <label>Password</label>
            <input
              className="formInput"
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(val: ChangeEvent<HTMLInputElement>) =>
                setPassword(val.target.value)
              }
            />
          </div>
          <div className="formError">
            <p>Invalid email and password combination.</p>
          </div>
          <div className="formButtonRow">
            <button
              onClick={(e: FormEvent) => onSubmit(e)}
              className="nextButton"
              type="submit"
            >
              Login
            </button>
            <Link href="/forgotPassword">
              <a>Forgot your password?</a>
            </Link>
          </div>
        </form>
      </section>
    </Layout>
  );
};

export default LoginPage;
