import { useMotionValue, motion } from "framer-motion";
import { useRef, useState } from "react";
import { data } from "./utils/data";

const moveRestrictionVertical = 25;
const moveRestrictionHorizontal = 25;

const val = {
  mainLogo: "/karya-logo.svg",
};

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
      <div className="h-screen w-full overflow-hidden flex justify-center items-center relative" ref={ref} onMouseMove={handleMouseMove}>
        <svg
          className="testimonials_circles_"
          xmlns="http://www.w3.org/2000/svg"
          width="1600"
          height="1400"
          viewBox="0 0 1400 1400"
          fill="none"
        >
          <motion.circle
            cx="700"
            cy="700"
            r="698.5"
            fill="#e2e8f0"
            fill-opacity="0.2"
            stroke="#e2e8f0"
            stroke-width="2"
            stroke-dasharray="8 10"
            style={{ x, y }}
          ></motion.circle>
          <motion.circle
            cx="700"
            cy="700"
            r="598.5"
            fill="#e2e8f0"
            fill-opacity="0.2"
            stroke="#e2e8f0"
            stroke-width="2"
            stroke-dasharray="8 10"
            style={{ x, y }}
          ></motion.circle>
          <motion.circle
            cx="700"
            cy="700"
            r="498.5"
            fill="#e2e8f0"
            fill-opacity="0.2"
            stroke="#e2e8f0"
            stroke-width="2"
            stroke-dasharray="8 10"
            style={{ x, y }}
          ></motion.circle>
          <motion.circle
            cx="700"
            cy="700"
            r="398.5"
            fill="#e2e8f0"
            fill-opacity="0.2"
            stroke="#e2e8f0"
            stroke-width="2"
            stroke-dasharray="8 10"
            style={{ x, y }}
          ></motion.circle>
        </svg>
        <div className="absolute top-1/2 left-1/2 z-[500] h-[350px] w-[430px] pointer-events-none -translate-x-1/2 -translate-y-1/2 select-none">
          {/* <h1>{state.name}</h1> */}
          {state.mainLogo ? (
            <div className="flex justify-center items-center">
              <img
                alt="karya-logo"
                src={state.mainLogo}
                className="w-[370px] h-[370px]"
              />
            </div>
          ) : (
            <>
              <h1>Trusted by the world's top companies</h1>
              <p>{state.testimonial}</p>
              <div className="flex justify-between items-start gap-3">
                <img alt="user-img" src={state.userImg} className="w-70 h-70" />
                <p>{state.userName}</p>
                <p>
                  {state.role}, {state.companyName}
                </p>
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
              className="bg-white h-[112px] w-[112px] z-[100] rounded-[1000px] absolute flex justify-center items-center shadow-[rgba(0,0,0,0.24)_0px_3px_8px] top-[100px] box"
              style={{ x, y }}
              onMouseEnter={() => setState(testimonialData)}
              onMouseLeave={() => setState(val)}
            >
              <img alt="company-img" src={testimonialData?.companyLogo} />
            </motion.div>
          );
        })}
      </div>
    </>
  );
}

export default App;
