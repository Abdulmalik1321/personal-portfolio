import AnimatedCharacters from "@/aimations/text-animation";
import { BackgroundGradientAnimation } from "@/shadcn/ui/background-gradient-animation";
import { Badge } from "@/shadcn/ui/badge";
import { Button } from "@/shadcn/ui/button";
import { easeInOut, motion } from "framer-motion";
import { FileUserIcon, MessageCircle } from "lucide-react";

export function Hero() {
  const placeholderText = [
    {
      type: "span1",
      text: "Abdulmalik Almasud",
    },
    {
      type: "span2",
      text: "Accountant, Full-Stack Developer, SAP Application Consultant",
    },
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 2,
      },
    },
  };

  return (
    <section
      id="hero"
      className="h-screen w-full flex flex-col md:flex-row md:items-center p-6 pt-12 md:mt-0 md:p-12 relative"
    >
      <BackgroundGradientAnimation />

      <div className="w-full md:w-1/2">
        <motion.div
          className="w-full"
          initial="hidden"
          animate={"visible"}
          variants={container}
        >
          <h1 className="text-[1.5rem] leading-3 md:!leading-tight md:text-4xl">
            {placeholderText.map((item, index) => {
              return <AnimatedCharacters {...item} key={index} />;
            })}
          </h1>
          <motion.p
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              duration: 0.5,
              delay: 3.5,
              ease: easeInOut,
            }}
            className="text-secondary-foreground text-sm md:text-lg md:w-[90%]"
          >
            <br />I am a highly motivated professional with a Bachelor's degree
            in Accounting 🎓 and a strong background in software development.
            With hands-on experience in full-stack development, SAP consulting,
            and financial automation, I’m passionate about streamlining
            processes 🔄 and delivering impactful results 🚀.
          </motion.p>
        </motion.div>
        <div className="flex gap-2 mt-5">
          <motion.div
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              duration: 0.5,
              delay: 3.75,
              ease: easeInOut,
            }}
          >
            <a href="./Abdulmalik_Almasud_CV.pdf" download>
              <Button>
                <FileUserIcon />
                Download CV
              </Button>
            </a>

            <Button
              onClick={() => {
                const targetElement = document.getElementById(
                  "ContactUs"
                ) as HTMLDivElement;
                targetElement.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-xs md:text-base px-2.5 py-2 h-auto font-normal gap-1 ml-2"
            >
              <MessageCircle />
              Contact Me
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="flex items-end pb-12 justify-center w-full md:w-[50%] h-[50%] md:h-[80%] mt-10 md:mt-0 relative -top-[10%] md:top-0">
        <motion.div
          className="relative flex justify-center items-end rounded-xl md:rounded-3xl w-[60%] h-[85%] bg-no-repeat bg-center bg-cover  ml-[12%]"
          initial={{ opacity: 0, translateX: -20, translateY: 30, rotate: -5 }}
          animate={{ opacity: 1, translateX: 0, translateY: 0, rotate: 0 }}
          transition={{
            duration: 0.5,
            delay: 4.25,
            ease: easeInOut,
          }}
        >
          <motion.img
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              duration: 0.5,
              delay: 5,
              ease: easeInOut,
            }}
            className="w-[100%] ml-5 md:ml-8 z-10 absolute -top-[9%] md:-top-[12%]"
            src="https://res.cloudinary.com/dbgwe94vv/image/upload/v1727618226/hero2_zc17sg.png"
            alt="saudi man"
          />

          <motion.div
            className="bg-muted absolute top-[0%] md:top-[20%] -left-[20%] md:-left-[15%] rounded-xl px-2 py-4 md:px-6 md:py-10 floating"
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              duration: 0.5,
              delay: 4.75,
              ease: easeInOut,
            }}
          >
            <img
              className="size-8 lg:size-14 invert"
              src="https://cdn.icon-icons.com/icons2/2389/PNG/512/laravel_horizon_logo_icon_145119.png"
              alt="logo"
            />
          </motion.div>
          <motion.div
            className="absolute top-[60%] -left-[15%] flex justify-center items-end bg-gradient-to-br to-cyan-500 from-blue-500 rounded-xl md:rounded-3xl w-[100%] h-[45%] bg-no-repeat bg-center bg-cover p-2 md:p-5 z-20"
            initial={{
              opacity: 0,
              translateX: -20,
              translateY: 30,
              rotate: -5,
            }}
            animate={{
              opacity: 1,
              translateX: 0,
              translateY: 0,
              rotate: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 4.25,
              ease: easeInOut,
            }}
          >
            <div className="w-full h-full flex items-center">
              <div
                dir="ltr"
                className="w-full h-[80%] md:h-[90%] flex items-center"
              >
                <div className="h-full flex flex-col justify-between text-[9px] md:text-base">
                  <div>100%</div>
                  <div>80%</div>
                  <div>60%</div>
                  <div>40%</div>
                  <div>20%</div>
                </div>
                <div className="flex justify-center h-full w-[85%] mt-3 md:mt-4 items-end gap-2 md:gap-5 border-b-2 border-l-2 border-white">
                  <motion.div
                    initial={{
                      height: 0,
                    }}
                    animate={{
                      height: "15%",
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 4.75,
                      ease: easeInOut,
                    }}
                    className="bg-white w-[8%] rounded-t-sm md:rounded-t-md"
                  ></motion.div>
                  <motion.div
                    initial={{
                      height: 0,
                    }}
                    animate={{
                      height: "20%",
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 4.75,
                      ease: easeInOut,
                    }}
                    className="bg-white w-[8%] rounded-t-sm md:rounded-t-md"
                  ></motion.div>
                  <motion.div
                    initial={{
                      height: 0,
                    }}
                    animate={{
                      height: "30%",
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 4.75,
                      ease: easeInOut,
                    }}
                    className="bg-white w-[8%] rounded-t-sm md:rounded-t-md"
                  ></motion.div>
                  <motion.div
                    initial={{
                      height: 0,
                    }}
                    animate={{
                      height: "40%",
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 4.75,
                      ease: easeInOut,
                    }}
                    className="bg-white w-[8%] rounded-t-sm md:rounded-t-md"
                  ></motion.div>
                  <motion.div
                    initial={{
                      height: 0,
                    }}
                    animate={{
                      height: "60%",
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 4.75,
                      ease: easeInOut,
                    }}
                    className="bg-white w-[8%] rounded-t-sm md:rounded-t-md"
                  ></motion.div>
                  <motion.div
                    initial={{
                      height: 0,
                    }}
                    animate={{
                      height: "75%",
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 4.75,
                      ease: easeInOut,
                    }}
                    className="bg-white w-[8%] rounded-t-sm md:rounded-t-md"
                  ></motion.div>
                  <motion.div
                    initial={{
                      height: 0,
                    }}
                    animate={{
                      height: "100%",
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 4.75,
                      ease: easeInOut,
                    }}
                    className="bg-white w-[8%] rounded-t-sm md:rounded-t-md"
                  ></motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
