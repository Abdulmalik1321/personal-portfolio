import {
  easeInOut,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { ServiceCard } from "./ServiceCard";
import { useRef } from "react";

export function Services() {
  const targetRef = useRef(null);
  const services = useRef(null);
  const isInView = useInView(services);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0.1, 1], ["1%", "95%"]);

  return (
    <section ref={targetRef} className="relative h-[500vh] ">
      <div className="sticky top-0 h-screen w-full flex flex-col items-start justify-start p-6 pt-24 md:p-12 md:pt-32  overflow-hidden">
        <motion.p
          key={isInView ? "inView" : "notInView"} // This line is added
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: 0.01,
            ease: easeInOut,
          }}
          className="text-3xl text-center w-full mb-10"
        >
          {isInView ? "test" : "نبذة عن شركة الافق المتقدم"}
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
              className="relative w-[75%] md:w-[35%]"
            >
              <img
                src="https://res.cloudinary.com/dbgwe94vv/image/upload/v1718725378/Untitled-1_in2ofd.png"
                alt="man-pointing"
                className="w-full"
              />
              <div className="absolute top-[15%] md:top-[25%] -left-10 md:left-0 inline-block">
                <div className="floating2">
                  <img
                    src="https://wowtheme7.com/tf/agiletech/assets/img/about/2.png"
                    alt="arrow"
                    className="object-contain rotate-180 w-[50%] md:w-[100%]"
                  />
                </div>
              </div>

              <div className="absolute top-[85%] md:top-[85%] right-[25%]  inline-block">
                <div className="floating2">
                  <img
                    src="https://wowtheme7.com/tf/agiletech/assets/img/about/3.png"
                    alt="arrow"
                    className="object-contain !delay-[1500] w-[50%] md:w-[100%]"
                  />
                </div>
              </div>
            </motion.div>
          </div>
          <div className="w-[100vw] flex justify-start items-center">
            <p>
              شركة الافق المتقدم: هي شركة ناشئة في مجال تقنية المعلومات تسعى
              لتقدم الحلول والتقنيات المبتكرة لتمكّنك من تحقيق اهدافك وطموحاتك
            </p>
          </div>
          <div ref={services} className="flex gap-4">
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
