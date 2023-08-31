import React from "react";
import Layout from "./Layout";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Layout classname="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All rights reserved</span>
        <Link href="/">Hindol Banerjee</Link>
        <Link href="/">Say Hello</Link>
      </Layout>
    </footer>
  );
};

export default Footer;
