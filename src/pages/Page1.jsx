import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import TiltText from "../components/TiltText";

const Page1 = () => {
  const tiltRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { width, height, left, top } =
        containerRef.current.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      const centerX = width / 2;
      const centerY = height / 2;

      const rotateY = ((x - centerX) / centerX) * 10;
      const rotateX = -((y - centerY) / centerY) * 10;

      gsap.to(tiltRef.current, {
        rotateY,
        rotateX,
        duration: 0.35,
        ease: "power2.out",
        transformPerspective: 1000,
        transformOrigin: "center center",
      });
    };

    const container = containerRef.current;
    container.addEventListener("mousemove", handleMouseMove);

    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="h-screen w-screen bg-white">
      <div className="relative h-full w-full shadow-xl shadow-gray-600 rounded-none overflow-hidden">
        {/* Responsive Background Image */}
        <img
          src="/images/amit.png"
          alt="Amit"
          className="w-full h-full object-cover"
        />

        {/* Tilted Text */}
        <div
          className="
            absolute 
            top-1/2 
            left-1/2 
            -translate-x-1/2 -translate-y-1/2 
            sm:top-[55%] sm:right-10 sm:left-auto sm:translate-x-0
            md:right-16 lg:right-24 xl:right-32
          "
        >
          <TiltText ref={tiltRef} />
        </div>
      </div>
    </div>
  );
};

export default Page1;
