"use client";

import { FC } from "react";
import { motion } from "framer-motion";

type Tag = "paragraph" | "heading1" | "heading2" | "span";

interface AnimatedCharactersProps {
  text: string;
  type: Tag;
}

const AnimatedCharactersServices: FC<AnimatedCharactersProps> = (props) => {
  const splitWords = props.text.split(" ");

  const words: string[][] = [];

  for (const [, item] of splitWords.entries()) {
    words.push(item.split(""));
  }

  words.map((word) => {
    return word.push("\u00A0");
  });

  return (
    <span className="block">
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
              initial={{ opacity: 0, translateY: 20 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{
                delay: 0.15,
                ease: [0.455, 0.03, 0.515, 0.955],
                duration: 0.5 * (index / 10),
              }}
            >
              {word.join("")}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
};

export default AnimatedCharactersServices;
