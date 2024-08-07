import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";
import ProfilePic from "../../public/images/profile/home2.png";
// import ProfilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import { LinkArrow } from "@/components/Icons";
import React, { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Hindol Banerjee | Web Developer</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect />
      <div className="flex items-center text-dark w-full min-h-screen">
        <Layout classname="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-[70%]">
              <Image
                src={ProfilePic}
                alt="hindol banerjee"
                className="w-[80%] h-auto lg:hidden md:inline-block md:w-full "
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Crafting Digital Experiences Beyond Boundaries"
                classname="!text-5xl !text-left xl:!text-5xl lg:!text-center lg:!text-5xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium dark:text-light md:text-sm sm:text-xs">
                Welcome to my digital realm, where innovation meets
                functionality. As a{" "}
                <span className="text-primary dark:text-primaryDark">
                  full-stack web developer
                </span>
                , I transform ideas into captivating digital experiences.
                Explore my world of creativity and precision in code.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="./Resume.pdf"
                  target="_blank"
                  className="flex items-center bg-dark text-light dark:bg-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  Resume
                  <LinkArrow className="w-6 ml-1" />
                </Link>
                <Link
                  href="mailto:hindolbanerjee5@gmail.com"
                  target="_blank"
                  className="ml-4 text-large font-medium text-dark underline dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
}
