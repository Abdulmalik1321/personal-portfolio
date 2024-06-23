import AnimatedCharacters from "@/aimations/text-animation";
import { Badge } from "@/shadcn/ui/badge";
import { Button } from "@/shadcn/ui/button";
import { easeInOut, motion } from "framer-motion";

export function Hero() {
  const placeholderText = [
    {
      type: "span",
      text: "تمكين الأعمال باستخدام",
    },
    {
      type: "span",
      text: "حلول الذكاء الاصطناعي والبرمجيات",
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
      className="h-screen w-full flex flex-col md:flex-row md:items-center p-6 pt-28 md:mt-0 md:p-12 relative"
    >
      <div className="w-full md:w-1/2">
        <motion.div
          className="w-full"
          initial="hidden"
          animate={"visible"}
          variants={container}
        >
          <h1 className="text-[1.5rem] leading-8 md:!leading-tight md:text-6xl">
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
            تمكين الصناعات باستخدام الذكاء الاصطناعي والحلول البرمجية المبتكرة:
            إحداث ثورة في القطاعات، وتبسيط العمليات، ودفع الشركات إلى نجاح غير
            مسبوق في مشهد دائم التطور.🚀🌟
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
            <Button
              onClick={() => {
                const targetElement = document.getElementById(
                  "ContactUs"
                ) as HTMLDivElement;
                targetElement.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-xs md:text-base px-2.5 py-2 h-auto font-normal gap-1"
            >
              📌 احجز استشارة مجانية الان!
            </Button>
          </motion.div>
          {/* <motion.div
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              duration: 0.5,
              delay: 4,
              ease: easeInOut,
            }}
          >
            <Badge className="text-xs md:text-base px-2.5 py-0.5  font-normal gap-1">
              <strong>⦿</strong>الأتمتة
            </Badge>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              duration: 0.5,
              delay: 4.25,
              ease: easeInOut,
            }}
          >
            <Badge className="text-xs md:text-base px-2.5 py-0.5 font-normal gap-1">
              <strong>⦿</strong>البرمجيات
            </Badge>
          </motion.div> */}
        </div>
        {/* <div className="relative flex md:w-[75%] mt-5 items-center">
          <Input placeholder="Email" />
          <Button className="absolute left-2 rounded-sm text-xs p-3 h-[65%]">
            احجز استشارتك المجانية اليوم
          </Button>
        </div> */}
        {/* <div className="absolute top-[77%] md:top-[85%] w-[90%] md:w-[50%]">
          <motion.div
            initial={{ opacity: "0%" }}
            animate={{ opacity: "100%" }}
            transition={{
              duration: 1,
              delay: 4.25,
              ease: easeInOut,
            }}
            className="relative flex items-center gap-2 z-[2] top-3 md:top-0"
          >
            <span className="text-2xl font-bold">35+</span>
            <span className="opacity-35">شريك عمل</span>
          </motion.div>
          <motion.div
            initial={{ visibility: "hidden" }}
            animate={{ visibility: "visible" }}
            transition={{
              duration: 0.5,
              delay: 5.25,
              ease: easeInOut,
            }}
            className="relative"
          >
            <div className="absolute  md:-top-[25%] -right-[5%] backdrop-blur-sm z-[1] w-[25%] h-full md:h-[150%] mask-linear mask-dir-to-l"></div>
            <div className="absolute  md:-top-[25%] -right-[5%] backdrop-blur-sm z-[1] w-[25%] h-full md:h-[150%] mask-linear mask-dir-to-l"></div>
            <div className="absolute  md:-top-[25%] -right-[5%] backdrop-blur-sm z-[1] w-[25%] h-full md:h-[150%] mask-linear mask-dir-to-l"></div>
            <div className="absolute  md:-top-[25%] -right-[5%] backdrop-blur-sm z-[1] w-[25%] h-full md:h-[150%] mask-linear mask-dir-to-l"></div>
            <div className="absolute  md:-top-[25%] -right-[5%] backdrop-blur-sm z-[1] w-[25%] h-full md:h-[150%] mask-linear mask-dir-to-l"></div>
            <div className="absolute  md:-top-[25%] -right-[5%] backdrop-blur-sm z-[1] w-[25%] h-full md:h-[150%] mask-linear mask-dir-to-l"></div>
            <div className="absolute  md:-top-[25%] -right-[5%] backdrop-blur-sm z-[1] w-[25%] h-full md:h-[150%] mask-linear mask-dir-to-l"></div>

            <div className="absolute md:-top-[25%] -left-[5%] backdrop-blur-sm z-[1] w-[25%] h-full md:h-[150%] mask-linear mask-dir-to-r"></div>
            <div className="absolute md:-top-[25%] -left-[5%] backdrop-blur-sm z-[1] w-[25%] h-full md:h-[150%] mask-linear mask-dir-to-r"></div>
            <div className="absolute md:-top-[25%] -left-[5%] backdrop-blur-sm z-[1] w-[25%] h-full md:h-[150%] mask-linear mask-dir-to-r"></div>
            <div className="absolute md:-top-[25%] -left-[5%] backdrop-blur-sm z-[1] w-[25%] h-full md:h-[150%] mask-linear mask-dir-to-r"></div>
            <div className="absolute md:-top-[25%] -left-[5%] backdrop-blur-sm z-[1] w-[25%] h-full md:h-[150%] mask-linear mask-dir-to-r"></div>
            <div className="absolute md:-top-[25%] -left-[5%] backdrop-blur-sm z-[1] w-[25%] h-full md:h-[150%] mask-linear mask-dir-to-r"></div>
            <div className="absolute md:-top-[25%] -left-[5%] backdrop-blur-sm z-[1] w-[25%] h-full md:h-[150%] mask-linear mask-dir-to-r"></div>
            <div className="w-full  overflow-hidden">
              <motion.div
                initial={{ translateX: "53%" }}
                animate={{ translateX: "0%" }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  delay: 5,
                  ease: "linear",
                }}
                className="w-fit  gap-10 md:gap-12 flex items-center relative h-16 opacity-35"
              ></motion.div>
            </div>
          </motion.div>
        </div> */}
      </div>
      <div className="flex items-end pb-12 justify-center w-full md:w-[50%] h-[50%] md:h-[80%] mt-10 md:mt-0 ">
        <motion.div
          className="relative flex justify-center items-end bg-[#eff2fb] rounded-xl md:rounded-3xl w-[50%] h-[75%] bg-no-repeat bg-center bg-cover  ml-[12%]"
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
              delay: 4.5,
              ease: easeInOut,
            }}
            className="w-[58%] ml-5 md:ml-8 z-10"
            src="https://res.cloudinary.com/dbgwe94vv/image/upload/v1719006626/man-reading_m8fabo.png"
            alt="saudi man"
          />

          <span className="absolute text-black text-lg md:text-5xl z-0 top-[30%] md:top-[35%] left-[5%]  opacity-15">
            طور
            <br />
            منشأتك
          </span>
          <motion.div
            className="bg-muted absolute top-[10%] -left-[40%] md:-left-[30%] rounded-xl px-3 py-5 md:px-6 md:py-10 floating"
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
            className="absolute top-[60%] -left-[30%] flex justify-center items-end bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl md:rounded-3xl w-[120%] h-[50%] bg-no-repeat bg-center bg-cover p-2 md:p-5 z-20"
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
