import { easeInOut, easeOut, motion } from "framer-motion";
import ReactDOM from "react-dom/client";

import { LoadingLogo } from "./components/Logo.tsx";
import { Router } from "./Router.tsx";
import { BackgroundGradientAnimation } from "./shadcn/ui/background-gradient-animation.tsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <motion.div
      initial={{ boxShadow: "0 0 100dvw 100dvh #191825 inset" }}
      animate={{
        boxShadow: "0 0 0dvw 0dvh #191825 inset",
        display: "none",
      }}
      transition={{
        duration: 1,
        delay: 0.5,
        ease: easeOut,
      }}
      className="absolute z-50 w-full h-full flex justify-center items-center"
    >
      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
        }}
        transition={{
          duration: 0.5,
          delay: 1,
          ease: easeOut,
        }}
      >
        <LoadingLogo />
      </motion.div>
    </motion.div>
    <motion.div
      initial={{ translateY: 100, scale: 2 }}
      animate={{
        translateY: 0,
        scale: 1,
      }}
      transition={{
        duration: 1.5,
        delay: 0.5,
        ease: easeInOut,
      }}
      className="opacity-75 fixed top-0 left-0 -z-50 inset-0 h-full w-full dark:bg-blackRgba  bg-whiteRgba bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:72px_72px] shadow-inner"
    >
      <BackgroundGradientAnimation />
    </motion.div>
    <Router />
  </>
);
