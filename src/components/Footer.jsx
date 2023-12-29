import React from "react";
import Layout from "./Layout";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark dark:border-light font-medium text-lg sm:text-base">
      <Layout classname="py-8 flex items-center justify-between dark:text-light lg:flex-col lg:py-6 md:text-sm sm:text-xs">
        <span>{new Date().getFullYear()} &copy; All rights reserved</span>
        <Link href="/">Hindol Banerjee</Link>
        <Link href="/">Say Hello</Link>
      </Layout>
    </footer>
  );
};

export default Footer;
