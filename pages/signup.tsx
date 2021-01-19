import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import Layout from "../components/Layout";

const SignupPage = () => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault;
    //check for correct sign in credentials
    //log user in
    //return to home
    //if false, display error message
  };

  const checkPasswordMatch = (val: string) => {
    setConfirmPassword(val);
    const elem = document.getElementById("confirm_password");
    if (elem !== null) {
      const confirmPasswordInput: HTMLInputElement = elem as HTMLInputElement;
      password !== val
        ? confirmPasswordInput.setCustomValidity("Passwords don't match.")
        : confirmPasswordInput.setCustomValidity("");
    }
  };

  return (
    <Layout
      title="Lighthouse - Brand guide specialist"
      displayBorder="block"
      displaySquare="block"
    >
      <section className="contentContainer">
        <h1>Signup</h1>
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
            <label>Name</label>
            <input
              className="formInput"
              type="text"
              placeholder="Name"
              required
              value={name}
              onChange={(val: ChangeEvent<HTMLInputElement>) =>
                setName(val.target.value)
              }
            />
          </div>
          <div className="formInputRow">
            <label>Password</label>
            <input
              id="password"
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
          <div className="formInputRow">
            <label>Confirm password</label>
            <input
              id="confirm_password"
              className="formInput"
              type="password"
              placeholder="Confirm password"
              required
              value={confirmPassword}
              onChange={(val: ChangeEvent<HTMLInputElement>) =>
                checkPasswordMatch(val.target.value)
              }
            />
          </div>
          <div className="formButtonRow">
            <button
              onClick={(e: FormEvent) => onSubmit(e)}
              className="nextButton"
              type="submit"
            >
              Continue
            </button>
            <Link href="/login">
              <a>Already have an account</a>
            </Link>
          </div>
        </form>
      </section>
    </Layout>
  );
};

export default SignupPage;
