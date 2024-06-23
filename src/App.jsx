import { useMotionValue, motion } from "framer-motion";
import { useRef, useState } from "react";
import { data } from "./utils/data";

const moveRestrictionVertical = 25;
const moveRestrictionHorizontal = 25;

const val = {
  mainLogo: "/karya-logo.svg",
};

const dynamicStyles = [
  "top-[250px] left-[250px]",
  "top-[450px] left-[150px]",
  "right-[110px] top-[70px]",
  "top-[450px] right-[160px]",
  "top-[550px] right-[300px]",
  "top-[280px] right-[90px]",
  "top-[190px] right-[300px]",
  "top-[100px] left-[100px]",
  "top-[530px] left-[325px]",
];

function App() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const ref = useRef(null);

  const [state, setState] = useState(val);

  const handleMouseMove = (e) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();

      const mousePositionHorizontalFromMiddle =
        (e.clientX + scrollX) / rect.width;
      const mousePositionVerticalFromMiddle =
        (e.clientY - rect.top) / rect.height;

      const objectX = Math.floor(
        -moveRestrictionHorizontal / 2 +
          moveRestrictionHorizontal * mousePositionHorizontalFromMiddle
      );

      const objectY = Math.floor(
        -moveRestrictionVertical / 2 +
          moveRestrictionVertical * mousePositionVerticalFromMiddle
      );

      x.set(objectX);
      y.set(objectY);
    }
  };

  return (
    <>
      <div
        className="h-screen w-full overflow-hidden flex justify-center items-center relative"
        ref={ref}
        onMouseMove={handleMouseMove}
      >
        <svg
          // className="testimonials_circles_"
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
            fill-opacity="0.2"
            stroke="#bfe9d3"
            stroke-width="2"
            stroke-dasharray="6 10"
            style={{ x, y }}
          ></motion.circle>
          <motion.circle
            cx="700"
            cy="700"
            r="658.5"
            fill="#d7f8e8"
            fill-opacity="0.2"
            stroke="#bfe9d3"
            stroke-width="2"
            stroke-dasharray="4 10"
            style={{ x, y }}
          ></motion.circle>
          <motion.circle
            cx="700"
            cy="700"
            r="638.5"
            fill="#d7f8e8"
            fill-opacity="0.2"
            stroke="#bfe9d3"
            stroke-width="2"
            stroke-dasharray="9 10"
            style={{ x, y }}
          ></motion.circle>
          <motion.circle
            cx="700"
            cy="700"
            r="528.5"
            fill="#d7f8e8"
            fill-opacity="0.2"
            stroke="#b7e7ce"
            stroke-width="2"
            stroke-dasharray="6 10"
            style={{ x, y }}
          ></motion.circle>
          <motion.circle
            cx="700"
            cy="700"
            r="418.5"
            fill="#d7f8e8"
            fill-opacity="0.2"
            stroke="#b4e6cb"
            stroke-width="2"
            stroke-dasharray="6 10"
            style={{ x, y }}
          ></motion.circle>
          <motion.circle
            cx="700"
            cy="700"
            r="398.5"
            fill="#d7f8e8"
            fill-opacity="0.2"
            stroke="#b8deca"
            stroke-width="2"
            stroke-dasharray="4 10"
            style={{ x, y }}
          ></motion.circle>
          <motion.circle
            cx="700"
            cy="700"
            r="378.5"
            fill="#d7f8e8"
            fill-opacity="0.2"
            stroke="#9fdebc"
            stroke-width="2"
            stroke-dasharray="6 10"
            style={{ x, y }}
          ></motion.circle>
          <motion.circle
            cx="700"
            cy="700"
            r="318.5"
            fill="#d7f8e8"
            fill-opacity="0.2"
            stroke="#8cdcb2"
            stroke-width="2"
            stroke-dasharray="4 10"
            style={{ x, y }}
          ></motion.circle>
        </svg>
        <div className="absolute top-1/2 left-1/2 z-[500] h-[350px] w-[420px] pointer-events-none -translate-x-1/2 -translate-y-1/2 select-none">
          {state.mainLogo ? (
            <div className="flex justify-center items-center">
              <img
                alt="karya-logo"
                src={state.mainLogo}
                className="w-96 h-96"
              />
            </div>
          ) : (
            <>
              <h1 className="font-bold text-xl tracking-wide mb-8 text-[#1e293b] text-center">
                Trusted by the world's top companies
              </h1>
              <div className="flex justify-center  flex-col">
                <p>{state.testimonial}</p>
                <div className="flex justify-start items-start gap-4 mt-8">
                  <img
                    alt="user-img"
                    src={state.userImg}
                    className="w-70 h-70"
                  />
                  <div>
                    <p className="text-[#41b47d] text-lg font-bold">
                      {state.userName}
                    </p>
                    <p>
                      {state.role}, {state.companyName}
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        {Object.keys(data).map((item, index) => {
          const testimonialData = data[item];
          return (
            <motion.div
              key={index}
              id={item}
              className={`bg-white h-32 w-32 z-[100] rounded-[1000px] absolute flex justify-center items-center shadow-[rgba(0,0,0,0.24)_0px_3px_8px] cursor-pointer ${dynamicStyles[index]}`}
              style={{ x, y }}
              whileHover={{ scale: 1.05 }}
              onMouseEnter={() => setState(testimonialData)}
              onMouseLeave={() => setState(val)}
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
