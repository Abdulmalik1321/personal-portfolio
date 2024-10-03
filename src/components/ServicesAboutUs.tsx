import {
  easeInOut,
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import AnimatedCharactersServices from "@/aimations/text-animation-services";
import { ServiceCard } from "./ServiceCard";

export function ServicesAboutUs() {
  const [experienceData, setExperienceData] = useState(null); // State to store fetched data
  const targetRef = useRef(null);
  const services = useRef(null);
  const services2 = useRef(null);
  const isInView = useInView(services);
  const isInView2 = useInView(services2);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(
    useSpring(scrollYProgress, { stiffness: 1000, damping: 100 }),
    [0, 1],
    ["-0.25%", "-91.5%"]
  );

  const placeholderText = [
    {
      type: "span",
      text: "A blend of technical skills and accounting experience, Here are key highlights of my work. 👉",
    },
  ];

  const placeholderText2 = [
    {
      type: "span",
      text: "I aim to leverage my skills in full-stack development💻 and my accounting knowledge📊 to drive innovation💡 and efficiency⚡, while continuously learning📚",
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

  // Fetch the data when the component mounts
  useEffect(() => {
    fetch("../src/assets/Experience.json")
      .then((response) => response.json())
      .then((data) => {
        setExperienceData(data); // Store the fetched data
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <section id="about-us" ref={targetRef} className="relative h-[500vh] ">
      <div className="sticky top-0 h-screen w-full flex flex-col items-start justify-start p-6 pt-24 md:p-12 md:pt-32  overflow-hidden">
        <motion.p
          key={isInView ? "inView" : "notInView"}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: 0.01,
            ease: easeInOut,
          }}
          className="text-3xl md:text-5xl font-bold text-center w-full mb-10"
        >
          {isInView2 ? "Objective 🎯" : isInView ? "Experiences ✨" : "\xa0"}
        </motion.p>
        <motion.div style={{ x }} className="flex items-center h-[75%]">
          <div className="w-[105vw] flex justify-center">
            <motion.div
              initial={{ opacity: 0, translateX: 20 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.25,
                ease: easeInOut,
              }}
              className="relative w-[30%] md:w-[12%]"
            >
              <div className="floating2">
                <img
                  src="https://res.cloudinary.com/dbgwe94vv/image/upload/v1727703179/Layer_4_copy_zl9iw2.png"
                  alt="man-pointing"
                  className="w-full rotate-180"
                />
              </div>
              <div className="absolute top-[5%] md:top-[15%] -right-10 md:right-0 inline-block">
                <div className="floating2">
                  <img
                    src="https://wowtheme7.com/tf/agiletech/assets/img/about/2.png"
                    alt="arrow"
                    className="object-contain w-[50%] md:w-[100%]"
                  />
                </div>
              </div>

              <div className="absolute top-[85%] md:top-[85%] -right-[10%] md:right-[25%]  inline-block">
                <div className="floating2">
                  <img
                    src="https://wowtheme7.com/tf/agiletech/assets/img/about/3.png"
                    alt="arrow"
                    className="object-contain !delay-[1500] rotate-180 w-[50%] md:w-[100%]"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            animate={"visible"}
            variants={container}
            ref={services2}
            className="mr-[40vw]"
          >
            <p className="text-2xl md:text-5xl md:leading-normal text-center w-[90vw] md:w-[50vw]">
              {placeholderText2.map((item, index) => {
                return <AnimatedCharactersServices {...item} key={index} />;
              })}
            </p>
          </motion.div>

          <div
            ref={services}
            className="flex items-center gap-12 md:gap-24 mr-20"
          >
            <motion.div
              initial="hidden"
              animate={"visible"}
              variants={container}
              className="md:w-screen"
            >
              <p className="whitespace-nowrap text-2xl md:text-5xl md:leading-normal ">
                {placeholderText.map((item, index) => {
                  return <AnimatedCharactersServices {...item} key={index} />;
                })}
              </p>
            </motion.div>

            {!experienceData
              ? // Display 5 empty placeholder cards while loading
                [...Array(5)].map((_, index) => (
                  <ServiceCard
                    key={index}
                    title="Loading..."
                    img="" // Optional: placeholder image or leave empty
                    jobTitle=""
                    description="Please wait, loading data..."
                    items={[]}
                    link="#"
                  />
                ))
              : // Display actual data once loaded
                experienceData.map((data: any, index: number) => {
                  return (
                    <ServiceCard
                      key={index}
                      title={data.title}
                      img={data.img}
                      jobTitle={data.jobTitle}
                      description={data.description}
                      items={data.items}
                      link={data.link}
                    />
                  );
                })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
