import * as React from "react";
import Link from "next/link";
import Head from "next/head";

export default ({ children, title = "This is the default title" }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
      </nav>
    </header>

    {children}

    <footer>{"I`m here to stay"}</footer>
  </div>
);