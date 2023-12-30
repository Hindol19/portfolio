import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
const Logo = () => {
  const MotionLink = motion(Link);
  return (
    <div className="flex items-center justify-center m-2">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-dark text-light flex items-center justify-center text-2xl rounded-full font-bold border border-solid border-transparent "
        whileHover={{
          backgroundColor: [
            "#060608",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#060608",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        HB
      </MotionLink>
    </div>
  );
};

export default Logo;
