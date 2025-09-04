import React, { forwardRef } from "react";

const TiltText = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="text-center md:text-right text-white font-serif will-change-transform px-4"
    >
      {/* Line 1 */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase font-bold leading-tight">
        I'm <span className="text-black">the</span>
      </h1>

      {/* Line 2 */}
      <h1 className="text-2xl text-black sm:text-3xl md:text-4xl lg:text-5xl uppercase font-semibold">
        <span className="text-black font-extrabold">Machine</span> Learning
      </h1>

      {/* Line 3 */}
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase font-medium">
        with <span className="text-black font-extrabold">Engineer</span>
      </h1>
    </div>
  );
});

export default TiltText;
