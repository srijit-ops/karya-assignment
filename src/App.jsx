import { useMotionValue, motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { data } from './utils/data';

const moveRestrictionVertical = 25;
const moveRestrictionHorizontal = 25;




const val = {
mainLogo:"/karya-logo.svg"
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
 
      <div className='container main' ref={ref} onMouseMove={handleMouseMove}>
        <svg
          className='testimonials_circles_'
          xmlns='http://www.w3.org/2000/svg'
          width='1600'
          height='1400'
          viewBox='0 0 1400 1400'
          fill='none'
        >
          <motion.circle
            cx='700'
            cy='700'
            r='698.5'
            fill='#e2e8f0'
            fill-opacity='0.2'
            stroke='#e2e8f0'
            stroke-width='2'
            stroke-dasharray='8 10'
            style={{ x, y }}
          ></motion.circle>
          <motion.circle
            cx='700'
            cy='700'
            r='598.5'
            fill='#e2e8f0'
            fill-opacity='0.2'
            stroke='#e2e8f0'
            stroke-width='2'
            stroke-dasharray='8 10'
            style={{ x, y }}
          ></motion.circle>
          <motion.circle
            cx='700'
            cy='700'
            r='498.5'
            fill='#e2e8f0'
            fill-opacity='0.2'
            stroke='#e2e8f0'
            stroke-width='2'
            stroke-dasharray='8 10'
            style={{ x, y }}
          ></motion.circle>
          <motion.circle
            cx='700'
            cy='700'
            r='398.5'
            fill='#e2e8f0'
            fill-opacity='0.2'
            stroke='#e2e8f0'
            stroke-width='2'
            stroke-dasharray='8 10'
            style={{ x, y }}
          ></motion.circle>
        </svg>
        <div className='data'>
          <h1>Trusted by the world's top companies</h1>
          {/* <h1>{state.name}</h1> */}
          {
            state.mainLogo &&
            <div className='flex justify-center items-center'>
          <img alt="karya-logo" src={state.mainLogo} className='w-[350px] h-[350px]'/>
          </div>
          }
          
          <p>{state.testimonial}</p>
          <div className='flex justify-between items-start gap-3'>
            {/* <img alt='user-img' src={state.userImg} className='w-70 h-70'/> */}
            <p>{state.userName}</p>
            <p>{state.role}, {state.companyName}</p>
          </div>
        </div>
        <motion.div
          id='a'
          className='box'
          style={{ x, y }}
          onMouseEnter={() => setState(data.a)}
          onMouseLeave={() => setState(val)}
        >
          <img alt='company-img' src={data.a.companyLogo}/>
        </motion.div>
        <motion.div
          id='b'
          className='box'
          style={{ x, y }}
          onMouseEnter={() => setState(data.b)}
          onMouseLeave={() => setState(val)}
        >
          <img alt='company-img' src={data.b.companyLogo}/>
        </motion.div>
        <motion.div
          id='c'
          className='box'
          style={{ x, y }}
          onMouseEnter={() => setState(data.c)}
          onMouseLeave={() => setState(val)}
        >
          <img alt='company-img' src={data.c.companyLogo}/>
        </motion.div>
        <motion.div
          id='d'
          className='box'
          style={{ x, y }}
          onMouseEnter={() => setState(data.d)}
          onMouseLeave={() => setState(val)}
        >
          <img alt='company-img' src={data.d.companyLogo}/>
        </motion.div>
        <motion.div
          id='e'
          className='box'
          style={{ x, y }}
          onMouseEnter={() => setState(data.e)}
          onMouseLeave={() => setState(val)}
        >
          <img alt='company-img' src={data.e.companyLogo}/>
        </motion.div>
        <motion.div
          id='f'
          className='box'
          style={{ x, y }}
          onMouseEnter={() => setState(data.f)}
          onMouseLeave={() => setState(val)}
        >
          <img alt='company-img' src={data.f.companyLogo}/>
        </motion.div>
        <motion.div
          id='g'
          className='box'
          style={{ x, y }}
          onMouseEnter={() => setState(data.g)}
          onMouseLeave={() => setState(val)}
        >
          <img alt='company-img' src={data.g.companyLogo}/>
        </motion.div>
        <motion.div
          id='h'
          className='box'
          style={{ x, y }}
          onMouseEnter={() => setState(data.h)}
          onMouseLeave={() => setState(val)}
        >
          <img alt='company-img' src={data.h.companyLogo}/>
        </motion.div>
        <motion.div
          id='i'
          className='box'
          style={{ x, y }}
          onMouseEnter={() => setState(data.i)}
          onMouseLeave={() => setState(val)}
        >
          <img alt='company-img' src={data.i.companyLogo}/>
        </motion.div>

      </div>
    </>
  )
}

export default App
