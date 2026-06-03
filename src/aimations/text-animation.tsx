"use client";

import { FC } from "react";
import { motion, Variants } from "framer-motion";

type Tag = "paragraph" | "heading1" | "heading2" | "span1" | "span2";

interface AnimatedCharactersProps {
  text: string;
  type: Tag;
}

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.5,
    },
  },
};

const item: Variants = {
  hidden: {
    y: "120%",
  },
  visible: {
    y: 0,
    transition: {
      ease: [0.455, 0.03, 0.515, 0.955],
      duration: 0.75,
    },
  },
};

const AnimatedCharacters: FC<AnimatedCharactersProps> = (props) => {
  const words = props.text.split(" ");

  return (
    <motion.span
      className="block"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => {
        return (
          <span
            style={{
              overflow: "hidden",
              display: "inline-block",
            }}
            key={index}
          >
            <motion.span
              style={{ display: "inline-block" }}
              className={`${
                props.type === "span1"
                  ? "text-3xl md:text-6xl"
                  : "text-lg md:text-4xl"
              }`}
              variants={item}
            >
              {`${word}\u00A0`}
            </motion.span>
          </span>
        );
      })}
    </motion.span>
  );
};

export default AnimatedCharacters;
