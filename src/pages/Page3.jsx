import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page3 = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { y: 100, opacity: 0, rotateY: 90 },
      {
        y: 0,
        opacity: 1,
        rotateY: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-white text-black flex items-center justify-center px-4 sm:px-6 md:px-10 py-12 sm:py-16 font-serif"
    >
      <div
        ref={contentRef}
        className="max-w-4xl w-full bg-amber-100 text-black rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 space-y-8"
      >
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center uppercase">
          Connect With Me
        </h2>

        {/* Contact Section */}
        <div className="space-y-4 text-base sm:text-lg">
          <p>
            <span className="font-semibold">Phone:</span> +91 6293900540
          </p>
          <p>
            <span className="font-semibold">Email:</span>{" "}
            amitshawofficial36@gmail.com
          </p>
          <p>
            <a
              href="https://github.com/amitshaw36"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800 transition"
            >
              GitHub
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/amit-shaw-a7406b1bb/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800 transition"
            >
              LinkedIn
            </a>
          </p>
          <div className="pt-2">
            <a
              href="https://docs.google.com/document/d/1EdkbJTHqlirnfTfSvHjDF00kEIoyrhA55LnhaBA0S_k/edit?usp=sharing"
              download
              className="inline-block bg-blue-600 text-white text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition"
            >
              My Resume
            </a>
          </div>
        </div>

        {/* Education */}
        <div className="space-y-3 text-base sm:text-lg">
          <h3 className="text-lg sm:text-xl font-bold">Education</h3>
          <p>
            Indian Institute of Engineering Science and Technology, Shibpur
            <br />
            B. Tech in Metallurgy and Materials Engineering (CGPA - 8.44)
            <br />
            Batch: Dec 2020 - May 2024
          </p>
          <p>
            Modern English Academy, Barrackpore
            <br />
            Intermediate (ISC) - 85.25% | ICSE - 95.2%
            <br />
            Batch: Apr 2012 - Mar 2024
          </p>
        </div>

        {/* Work Experience */}
        <div className="space-y-3 text-base sm:text-lg">
          <h3 className="text-lg sm:text-xl font-bold">Work Experience</h3>
          <p>
            Assistant Manager (Operations) <br />
            JSW Steel, Dolvi Works <br />
            July 2024 - Present
          </p>
        </div>

        {/* Technical Skills */}
        <div className="space-y-3 text-base sm:text-lg">
          <h3 className="text-lg sm:text-xl font-bold">Technical Skills</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Programming - C, C++, Python</li>
            <li>
              Frameworks/Libraries - React.js, Node.js, Express.js, Tailwind
              CSS, GSAP
            </li>
            <li>Database - MongoDB, SQL, SQL2</li>
            <li>
              ML Libraries - Numpy, Pandas, Matplotlib, Seaborn, Scikit Learn
            </li>
            <li>
              Familiar - Git, Machine Learning, Deep Learning, Computer Vision,
              Image Processing
            </li>
            <li>Software - VS Code, Git, Jupyter Notebook</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page3;
