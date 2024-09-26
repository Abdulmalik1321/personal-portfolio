import { FC, ReactNode } from "react";
import { motion, Variants } from "framer-motion";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: FC<WrapperProps> = (props) => {
  return <span className="word-wrapper">{props.children}</span>;
};

type TagMap = {
  paragraph: string;
  heading1: string;
  heading2: string;
  span: string;
};

interface AnimatedCharactersProps {
  text: string;
  type: TagMap;
}

const AnimatedCharactersServices: FC<AnimatedCharactersProps> = (props) => {
  const item: Variants = {
    hidden: {
      y: "200%",
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 0.85,
      },
    },
    visible: {
      y: 0,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 0.75,
      },
    },
  };

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
