import { useMotionValue, motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { data } from "./utils/data";

const moveRestriction = 17;
const moveRestriction0 = 40;
const moveRestriction1 = 18;
const moveRestriction2 = 15;
const moveRestriction3 = 11;
const moveRestriction4 = 8;

const defaultContent = {
  mainLogo: "/karya-logo.svg",
};

const dynamicStyles = [
  "lg:top-[250px] xl:left-[250px] lg:left-[190px] sm:left-[350px] md:top-[80px] md:left-[400px] top-[90px] left-[290px]",
  "lg:top-[450px] lg:left-[150px] md:top-[620px] md:left-[250px] top-[630px] left-[225px] sm:left-[190px]",
  "right-[110px] top-[70px]",
  "lg:top-[450px] lg:right-[160px] md:top-[620px] md:right-[180px] top-[670px] right-[165px]",
  "lg:top-[550px] md:top-[620px] top-[620px]  right-[300px]",
  "lg:top-[280px] right-[30px] md:top-[530px] top-[680px] sm:top-[600px]",
  "lg:top-[190px] xl:right-[300px] lg:right-[200px] md:top-[50px] md:right-[450px] sm:right-[370px] right-[290px] top-[50px]",
  "top-[100px] left-[100px]",
  "xl:top-[550px] xl:left-[290px] lg:top-[570px] lg:left-[100px] sm:top-[630px] top-[680px] left-[70px]",
];

function App() {
  const motionValues = {
    x: useMotionValue(0),
    y: useMotionValue(0),
    x0: useMotionValue(0),
    y0: useMotionValue(0),
    x1: useMotionValue(0),
    y1: useMotionValue(0),
    x2: useMotionValue(0),
    y2: useMotionValue(0),
    x3: useMotionValue(0),
    y3: useMotionValue(0),
    x4: useMotionValue(0),
    y4: useMotionValue(0),
  };

  const ref = useRef(null);

  const [state, setState] = useState(defaultContent);

  const handleProximityHover = (e) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();

      const mousePositionHorizontalFromMiddle =
        (e.clientX + scrollX) / rect.width;
      const mousePositionVerticalFromMiddle =
        (e.clientY - rect.top) / rect.height;

      const objectX = Math.floor(
        -moveRestriction / 2 +
          moveRestriction * mousePositionHorizontalFromMiddle
      );

      const objectY = Math.floor(
        -moveRestriction / 2 + moveRestriction * mousePositionVerticalFromMiddle
      );
      const objectX0 = Math.floor(
        -moveRestriction0 / 2 +
          moveRestriction0 * mousePositionHorizontalFromMiddle
      );

      const objectY0 = Math.floor(
        -moveRestriction0 / 2 +
          moveRestriction0 * mousePositionVerticalFromMiddle
      );
      const objectX1 = Math.floor(
        -moveRestriction1 / 2 +
          moveRestriction1 * mousePositionHorizontalFromMiddle
      );

      const objectY1 = Math.floor(
        -moveRestriction1 / 2 +
          moveRestriction1 * mousePositionVerticalFromMiddle
      );
      const objectX2 = Math.floor(
        -moveRestriction2 / 2 +
          moveRestriction2 * mousePositionHorizontalFromMiddle
      );

      const objectY2 = Math.floor(
        -moveRestriction2 / 2 +
          moveRestriction2 * mousePositionVerticalFromMiddle
      );
      const objectX3 = Math.floor(
        -moveRestriction3 / 2 +
          moveRestriction3 * mousePositionHorizontalFromMiddle
      );

      const objectY3 = Math.floor(
        -moveRestriction3 / 2 +
          moveRestriction3 * mousePositionVerticalFromMiddle
      );
      const objectX4 = Math.floor(
        -moveRestriction4 / 2 +
          moveRestriction4 * mousePositionHorizontalFromMiddle
      );

      const objectY4 = Math.floor(
        -moveRestriction4 / 2 +
          moveRestriction4 * mousePositionVerticalFromMiddle
      );

      motionValues.x.set(objectX);
      motionValues.y.set(objectY);
      motionValues.x0.set(objectX0);
      motionValues.y0.set(objectY0);
      motionValues.x1.set(objectX1);
      motionValues.y1.set(objectY1);
      motionValues.x2.set(objectX2);
      motionValues.y2.set(objectY2);
      motionValues.x3.set(objectX3);
      motionValues.y3.set(objectY3);
      motionValues.x4.set(objectX4);
      motionValues.y4.set(objectY4);
    }
  };

  return (
    <>
      <div
        className="h-screen w-full overflow-hidden flex justify-center items-center relative"
        ref={ref}
        onMouseMove={handleProximityHover}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1600"
          height="1400"
          viewBox="0 0 1400 1400"
          fill="none"
        >
          <motion.circle
            cx="700"
            cy="700"
            r="718.5"
            fill="#d7f8e8" //#d1def9
            fillOpacity="0.2"
            stroke="#bfe9d3"
            strokeWidth="2"
            strokeDasharray="6 10"
            style={{ x: motionValues.x4, y: motionValues.y4 }}
          ></motion.circle>
          <motion.circle
            cx="700"
            cy="700"
            r="638.5"
            fill="#d7f8e8"
            fillOpacity="0.2"
            stroke="#bfe9d3"
            strokeWidth="2"
            strokeDasharray="9 10"
            style={{ x: motionValues.x3, y: motionValues.y3 }}
          ></motion.circle>
          <motion.circle
            cx="700"
            cy="700"
            r="528.5"
            fill="#d7f8e8"
            fillOpacity="0.2"
            stroke="#b7e7ce"
            strokeWidth="2"
            strokeDasharray="6 10"
            style={{ x: motionValues.x2, y: motionValues.y2 }}
          ></motion.circle>
          <motion.circle
            cx="700"
            cy="700"
            r="418.5"
            fill="#d7f8e8"
            fillOpacity="0.2"
            stroke="#b4e6cb"
            strokeWidth="2"
            strokeDasharray="4 10"
            style={{ x: motionValues.x1, y: motionValues.y1 }}
          ></motion.circle>
          <motion.circle
            cx="700"
            cy="700"
            r="318.5"
            fill="#d7f8e8"
            fillOpacity="0.2"
            stroke="#8cdcb2"
            strokeWidth="2"
            strokeDasharray="4 10"
            style={{ x: motionValues.x0, y: motionValues.y0 }}
          ></motion.circle>
        </svg>
        <div className="absolute top-1/2 left-1/2 z-[500] h-[350px] sm:w-[420px] w-11/12 pointer-events-none -translate-x-1/2 -translate-y-1/2 select-none flex justify-center items-center flex-col">
          <AnimatePresence>
            {state.mainLogo && (
              <motion.div
                className="flex justify-center items-center absolute"
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
              >
                <img
                  alt="karya-logo"
                  src={state.mainLogo}
                  className="lg:w-96 lg:h-96 sm:w-72 sm:h-72 w-56 h-56"
                />
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {!state.mainLogo && (
              <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
              >
                <h1 className="font-bold md:text-xl sm:text-lg text-base tracking-wide sm:mb-8 mb-6 text-[#1e293b] text-center">
                  Trusted by the world's top companies
                </h1>
                <div className="flex justify-center  flex-col">
                  <p className="sm:text-base text-sm">{state.testimonial}</p>
                  <div className="flex justify-start items-start gap-4 mt-8">
                    <img
                      alt="user-img"
                      src={state.userImg}
                      className="w-70 h-70"
                    />
                    <div>
                      <p className="text-[#41b47d] sm:text-lg text-base font-bold">
                        {state.userName}
                      </p>
                      <p className="sm:text-base text-sm">
                        {state.role}, {state.companyName}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {Object.keys(data).map((item) => {
          const testimonialData = data[item];
          return (
            <motion.div
              key={item}
              className={`bg-white p-2 h-16 w-16 md:h-20 md:w-20 lg:h-26 lg:w-26 xl:w-32 xl:h-32  z-[100] rounded-[1000px] absolute flex justify-center items-center shadow-[rgba(0,0,0,0.24)_0px_3px_8px] hover:shadow-[rgba(0,0,0,0.35)_0px_5px_15px] cursor-pointer ${dynamicStyles[item]}`}
              style={{ x: motionValues.x, y: motionValues.y }}
              whileHover={{ scale: 1.05 }}
              onMouseEnter={() => setState(testimonialData)}
              onMouseLeave={() => setState(defaultContent)}
            >
              <img
                alt="company-img"
                src={testimonialData?.companyLogo}
                className="h-auto max-w-full"
              />
            </motion.div>
          );
        })}
      </div>
    </>
  );
}

export default App;
