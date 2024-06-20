import {
  easeInOut,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

import AnimatedCharactersServices from "@/aimations/text-animation-services";

export function Services() {
  const targetRef = useRef(null);
  const services = useRef(null);
  const isInView = useInView(services);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0.1, 1], ["1%", "95%"]);

  const placeholderText = [
    {
      type: "span",
      text: "نحن نقدم جميع الخدمات التقنية التي يحتاجها نشاط عملك 👈",
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
    <section ref={targetRef} className="relative h-[500vh] ">
      <div className="sticky top-0 h-screen w-full flex flex-col items-start justify-start p-6 pt-24 md:p-12 md:pt-32  overflow-hidden">
        <motion.p
          //   key={isInView ? "inView" : "notInView"} // This line is added
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: 0.01,
            ease: easeInOut,
          }}
          className="text-3xl md:text-5xl font-bold text-center w-full mb-10"
        >
          خدماتنا✨
          {/* {isInView ? "test" : "&nbsp;"} */}
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

          <motion.div
            initial="hidden"
            animate={"visible"}
            variants={container}
            className="md:w-screen"
          >
            <p className="whitespace-nowrap text-3xl md:text-5xl md:leading-normal ">
              {placeholderText.map((item, index) => {
                return <AnimatedCharactersServices {...item} key={index} />;
              })}
            </p>
          </motion.div>

          <div ref={services} className="flex gap-12 md:gap-24 mr-20">
            <motion.div
              initial={{ opacity: 0, scale: 1.25 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.25,
                delay: 0.25,
                ease: easeInOut,
              }}
              className="w-[75vw] md:w-[40vw] h-[55vh] md:h-[50vh] relative shadow-xl bg-gray-900 border border-gray-800  px-4 md:px-8 py-8 overflow-hidden rounded-2xl flex flex-col justify-start items-start"
            >
              <img
                src="https://res.cloudinary.com/dbgwe94vv/image/upload/v1718825539/topography_j800ig.svg"
                alt="circuit-board-pattern"
                className="absolute top-0 left-0 invert size-[175%] object-cover opacity-[3%]"
              />
              <div className="w-full flex justify-center mb-5">
                <img
                  src="https://res.cloudinary.com/dbgwe94vv/image/upload/v1718825922/meeting-presentation-training-svgrepo-com_zscnv7.svg"
                  alt="meeting icon"
                  className="size-24 md:size-44 invert"
                />
              </div>
              <h1 className="font-bold text-xl md:text-4xl text-white mb-4">
                استشارات تقنية المعلومات
              </h1>

              <p className="font-normal text-base md:text-3xl text-slate-500 mb-4 ">
                توفر خدماتنا الاستشارية المجانية في مجال تقنية المعلومات،
                الارشاد الإستراتيجي المصمم خصيصًا لتلبية احتياجاتك الفريدة.
                بدءًا من تحسين البنية التحتية لتقنية المعلومات الخاصة بك وحتى
                تعزيز الأمان، نحن نسعى لتقديم احدث التقنيات لمساعدتك في تحقيق
                اهدافك.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 1.25 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.25,
                delay: 0.25,
                ease: easeInOut,
              }}
              className="w-[75vw] md:w-[40vw] h-[55vh] md:h-[50vh] relative shadow-xl bg-gray-900 border border-gray-800  px-4 md:px-8 py-8 overflow-hidden rounded-2xl flex flex-col justify-start items-start"
            >
              <img
                src="https://res.cloudinary.com/dbgwe94vv/image/upload/v1718825539/topography_j800ig.svg"
                alt="circuit-board-pattern"
                className="absolute top-0 left-0 invert size-[175%] object-cover opacity-[3%]"
              />
              <div className="w-full flex justify-center mb-5">
                <img
                  src="https://res.cloudinary.com/dbgwe94vv/image/upload/v1718826705/development_iiwc7t.png"
                  alt="meeting icon"
                  className="size-24 md:size-44 invert"
                />
              </div>
              <h1 className="font-bold text-xl md:text-4xl text-white mb-4">
                تطوير المواقع الإلكترونية
              </h1>

              <p className="font-normal text-base md:text-3xl text-slate-500 mb-4 ">
                ستساعدك خدمات تطوير المواقع الإلكترونية لدينا في إنشاء تواجد
                مؤثر عبر الإنترنت والوصول إلى جمهورك المستهدف بفعالية. سواء كنت
                تبحث عن تصميم موقع ويب مبتكر أو تطوير تطبيق متميز، نحن نجمع بين
                الإبداع والتقنية لنضمن أن تكون تجربة مستخدميك مميزة وملهمة.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 1.25 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.25,
                delay: 0.25,
                ease: easeInOut,
              }}
              className="w-[75vw] md:w-[40vw] h-[55vh] md:h-[50vh] relative shadow-xl bg-gray-900 border border-gray-800  px-4 md:px-8 py-8 overflow-hidden rounded-2xl flex flex-col justify-start items-start"
            >
              <img
                src="https://res.cloudinary.com/dbgwe94vv/image/upload/v1718825539/topography_j800ig.svg"
                alt="circuit-board-pattern"
                className="absolute top-0 left-0 invert size-[175%] object-cover opacity-[3%]"
              />
              <div className="w-full flex justify-center mb-5">
                <img
                  src="https://res.cloudinary.com/dbgwe94vv/image/upload/v1718884394/coding_acvva8.png"
                  alt="meeting icon"
                  className="size-24 md:size-44 invert"
                />
              </div>
              <h1 className="font-bold text-xl md:text-4xl text-white mb-4">
                تطوير البرمجيات المخصصة
              </h1>

              <p className="font-normal text-base md:text-3xl text-slate-500 mb-4 ">
                ان خدمة تطوير البرمجيات المخصصة. تقدم حلول برمجية تتوافق مع
                احتياجات عملك الفريدة. سواء كنت تحتاج إلى إدارة للمخزون، أو
                إدارة لعلاقات العملاء، أو إعداد تقارير مالية تلقائية، فلدينا كل
                ما تحتاجه. تم تصميم حلولنا بدقة لتعزيز الإنتاجية ودفع النمو.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 1.25 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.25,
                delay: 0.25,
                ease: easeInOut,
              }}
              className="w-[75vw] md:w-[40vw] h-[55vh] md:h-[50vh] relative shadow-xl bg-gray-900 border border-gray-800  px-4 md:px-8 py-8 overflow-hidden rounded-2xl flex flex-col justify-start items-start"
            >
              <img
                src="https://res.cloudinary.com/dbgwe94vv/image/upload/v1718825539/topography_j800ig.svg"
                alt="circuit-board-pattern"
                className="absolute top-0 left-0 invert size-[175%] object-cover opacity-[3%]"
              />
              <div className="w-full flex justify-center mb-5">
                <img
                  src="https://res.cloudinary.com/dbgwe94vv/image/upload/v1718894262/automation_y7cffp.png"
                  alt="meeting icon"
                  className="size-24 md:size-44 invert"
                />
              </div>
              <h1 className="font-bold text-xl md:text-4xl text-white mb-4">
                الذكاء الاصطناعي والاتمتة
              </h1>

              <p className="font-normal text-base md:text-3xl text-slate-500 mb-4 ">
                استخدم البرمجيات الاوتوماتيكية والأدخال الآلي للبيانات واسمح
                للأنظمة الذكية بمعالجة المهام المتكررة وتعزيز الدقة والإنتاجية،
                بينما يركز فريقك على الأمور المهمة.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 1.25 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.25,
                delay: 0.25,
                ease: easeInOut,
              }}
              className="w-[75vw] md:w-[40vw] h-[55vh] md:h-[50vh] relative shadow-xl bg-gray-900 border border-gray-800  px-4 md:px-8 py-8 overflow-hidden rounded-2xl flex flex-col justify-start items-start"
            >
              <img
                src="https://res.cloudinary.com/dbgwe94vv/image/upload/v1718825539/topography_j800ig.svg"
                alt="circuit-board-pattern"
                className="absolute top-0 left-0 invert size-[175%] object-cover opacity-[3%]"
              />
              <div className="w-full flex justify-center mb-5">
                <img
                  src="https://res.cloudinary.com/dbgwe94vv/image/upload/v1718894621/resource_lau8xg.png"
                  alt="meeting icon"
                  className="size-24 md:size-44 invert"
                />
              </div>
              <h1 className="font-bold text-xl md:text-4xl text-white mb-4">
                حلول التخزين
              </h1>

              <p className="font-normal text-base md:text-3xl text-slate-500 mb-4 ">
                تظمن حلول التخزين لدينا بأن تكون بياناتك آمنة، وسهلة الوصول
                والإدارة. وتتيح لموظفينك تخزين البيانات المهمه على خادم شبكة
                مركزي، لتوفير نقطة وصول مركزية آمنة لمجموعة كبيرة من البيانات
                للمسخدمين داخل نطاق المنشأة مع توفرها على مدار الساعة.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 1.25 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.25,
                delay: 0.25,
                ease: easeInOut,
              }}
              className="w-[75vw] md:w-[40vw] h-[55vh] md:h-[50vh] relative shadow-xl bg-gray-900 border border-gray-800  px-4 md:px-8 py-8 overflow-hidden rounded-2xl flex flex-col justify-start items-start"
            >
              <img
                src="https://res.cloudinary.com/dbgwe94vv/image/upload/v1718825539/topography_j800ig.svg"
                alt="circuit-board-pattern"
                className="absolute top-0 left-0 invert size-[175%] object-cover opacity-[3%]"
              />
              <div className="w-full flex justify-center mb-5">
                <img
                  src="https://res.cloudinary.com/dbgwe94vv/image/upload/v1718911676/maintenance_jhmm22.png"
                  alt="meeting icon"
                  className="size-24 md:size-44 invert"
                />
              </div>
              <h1 className="font-bold text-xl md:text-4xl text-white mb-4">
                صيانة تقنية المعلومات
              </h1>

              <p className="font-normal text-base md:text-3xl text-slate-500 mb-4 ">
                إن الصيانة الاستباقية لتقنية المعلومات أمر مهم لتحقيق نجاح
                الأعمال. من خلال تنفيذ الفحوصات المنتظمة والتدابير الوقائية،
                يمكنك تقليل وقت التوقف عن العمل وتعزيز الأداء وضمان استقرار
                الانظمة. تعالج خدماتنا المشكلات المحتملة قبل أن تتفاقم، مما يضمن
                بقاء البنية التحتية التقنية لديك موثوقاً بها وفعالة.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
