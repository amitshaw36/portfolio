
import React, { forwardRef } from 'react';

const TiltText = forwardRef((props, ref) => {
  return (
    <div ref={ref} className='text-right text-white font-serif will-change-transform'>
      <h1 className='text-[5vw] text-black sm:text-4xl md:text-4xl lg:text-5xl uppercase font-bold leading-tight'>
        I'm <span className='text-black'>ML</span>
      </h1>
      <h1 className='text-[4vw] text-black sm:text-2xl md:text-3xl lg:text-4xl uppercase font-semibold'>
        <span className='text-black font-extrabold'></span> Engineer
      </h1>
      <h1 className='text-[3.5vw] text-black sm:text-xl md:text-2xl lg:text-3xl uppercase font-medium'>
        & <span className='text-black font-extrabold'>Web Dev</span>
      </h1>
    </div>
  );
});

export default TiltText;
