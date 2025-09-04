import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page2 = () => {
  const linesRef = useRef([]);

  useEffect(() => {
    linesRef.current.forEach((line, index) => {
      gsap.fromTo(
        line,
        {
          rotateX: 90,
          opacity: 0,
          transformOrigin: "top center",
        },
        {
          scrollTrigger: {
            trigger: line,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          rotateX: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          delay: index * 0.05,
        }
      );
    });
  }, []);

  const textLines = [
    "Impactful",
    "Code",
    "is the",
    "Solution",
    "that",
    "works!",
  ];

  return (
    <div className="bg-white text-black text-center px-4 py-16 sm:py-20 lg:py-28">
      {/* Subheading */}
      <h3 className="text-gray-500 font-serif text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-8 sm:mb-12 lg:mb-16">
        Indian Institute of Engineering Science and Technology, Shibpur
      </h3>

      {/* Animated Lines */}
      <div className="space-y-2 sm:space-y-4 md:space-y-6 lg:space-y-8">
        {textLines.map((line, index) => (
          <h1
            key={index}
            ref={(el) => (linesRef.current[index] = el)}
            className="
              font-serif uppercase leading-[0.9]
              text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
            "
          >
            {line}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Page2;
