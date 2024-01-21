import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import fproject1 from "../../public/images/projects2/admin-panel.png";
import fproject2 from "../../public/images/projects2/Cuisine.png";
import project1 from "../../public/images/projects2/dev-pf.png";
import project2 from "../../public/images/projects2/music-pf.png";
import project3 from "../../public/images/projects2/pentaneuron.png";
import project4 from "../../public/images/projects2/your-recipe.png";
import TransitionEffect from "@/components/TransitionEffect";
const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-br-2xl rounded-3xl relative dark:border-2 border-solid border-light bg-light dark:bg-dark shadow-2xl p-12 lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark opacity-10 blur-2xl" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden lg:w-full"
      >
        {/* <Image src={img} alt={title} className="w-full h-auto" /> */}
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto "
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width:768px) 100vw,
                (max-width:1200px) 50vw,
                50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6 ">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 dark:text-light"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold  sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light/75 sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10 ">
            <GithubIcon className="dark:text-light" />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark  p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github }) => {
  return (
    <motion.article
      className="w-full flex flex-col items-center justify-center rounded-2xl dark:border border-solid border-light bg-light dark:bg-dark p-6 relative xs:p-4"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark opacity-30 blur-2xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 dark:text-light"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline dark:text-light md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon className="dark:text-light" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Hindol Banerjee | Project Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout classname="pt-16">
          <AnimatedText
            text="My Projects"
            classname="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="INSIGHT DASH"
                summary="INSIGHT DASH is a powerful Admin Panel crafted for seamless management. With a user-friendly interface, it simplifies complex tasks, offering intuitive controls for data management, analytics, and streamlined administration. From user management to insightful data visualization, it's designed to empower efficient decision-making and control."
                img={fproject1}
                link="https://react-admin-panel-beta.vercel.app/dashboard"
                github="https://github.com/Hindol19/react-admin-panel"
                type="ReactJS, Material UI, NodeJS, ExpressJS, MongoDB"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Developer Portfolio Website"
                img={project1}
                link="/"
                github="https://github.com/Hindol19/portfolio"
                type="NextJS, Tailwind CSS, Framer Motion"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Music Portfolio Website"
                img={project2}
                link="https://music-portfolio-eight.vercel.app/"
                github="/"
                type="HTML, CSS, Javascript"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Cuisine Cucina"
                summary=" Elevate your dining experience with exquisite flavors and elegant ambiance. Immerse yourself in a refined atmosphere where each dish is a masterpiece. Perfect for intimate dinners and special occasions, our restaurant invites you to savor the art of fine dining."
                img={fproject2}
                link="https://restaurant-template-indol.vercel.app/"
                github="https://github.com/Hindol19/restaurant-template"
                type="ReactJS, SCSS"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Pentaneuron"
                img={project3}
                link="https://www.pentaneuron.com/"
                github="https://github.com/PentaNeuron/website"
                type="ReactJS, SCSS, ThreeJS"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Your Recipe"
                img={project4}
                link="https://your-recipe-hazel.vercel.app/"
                github="https://github.com/Hindol19/your-recipe"
                type="ReactJS, SCSS, API Integration"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
