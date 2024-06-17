import { motion, useScroll, useTransform } from "framer-motion";
import { ServiceCard } from "./ServiceCard";
import { useRef } from "react";

export function Services() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "95%"]);

  return (
    <section ref={targetRef} className="relative h-[500vh]">
      <div className="sticky top-0 h-screen w-full flex md:items-center p-6 pt-24 md:p-12 md:pt-32  overflow-hidden">
        <motion.div style={{ x }} className="flex">
          <div className="w-screen"></div>
          <div className="w-screen flex justify-start items-center">
            <p>we do every thing in tech but we specialize in</p>
          </div>
          <div className="flex gap-4">
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
