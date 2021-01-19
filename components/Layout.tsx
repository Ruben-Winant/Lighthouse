import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/layout.module.css";

type Props = {
  children?: ReactNode;
  title?: string;
  display?: string;
  displayBorder?: string;
  displaySquare?: string;
};

const Layout = ({
  children,
  title = "Lighthouse",
  displayBorder = "none",
  displaySquare = "none",
}: Props) => {
  return (
    <div className={styles.outerContainer}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav className={styles.navBar}>
          <Link href="/">
            <a className={styles.homeLink}>
              <Image
                priority={true}
                quality={100}
                src="/images/lighthouse_logo.jpg"
                alt="lighthouse logo"
                width={120}
                height={40}
              />
            </a>
          </Link>
          <div className={styles.navBarRight}>
            <select className={styles.languageSelect}>
              <option>EN</option>
              <option>NL</option>
              <option>FR</option>
            </select>{" "}
            <Link href="/pricing">
              <a className={styles.navLink}>Pricing</a>
            </Link>{" "}
            <Link href="/login">
              <a className={styles.navLink}>Login</a>
            </Link>{" "}
            <Link href="/signup">
              <a className={styles.signupButton}>Signup</a>
            </Link>
          </div>
        </nav>
      </header>
      <div className={styles.innerContainer}>
        <div
          className={styles.decoSquareFilled}
          style={{ display: displaySquare }}
        />
        {children}
        <div
          className={styles.decoSquareBorder}
          style={{ display: displayBorder }}
        />
      </div>
      <footer className={styles.footer}>
        <p>
          Made by{" "}
          <b>
            <a href="www.rubenwinant.be" target="_blank">
              Ruben Winant
            </a>
          </b>
        </p>
      </footer>
    </div>
  );
};

export default Layout;
