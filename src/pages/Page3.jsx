
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page3 = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      {
        y: 100,
        opacity: 0,
        rotateY: 90,
      },
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
      className="min-h-screen bg-white text-black flex items-center justify-center px-6 py-16 font-serif"
    >
      <div
        ref={contentRef}
        className="max-w-4xl w-full bg-amber-100 text-black rounded-2xl shadow-2xl p-10 space-y-6"
      >
        <h2 className="text-3xl font-bold text-center uppercase">Connect With Me</h2>

        <div className="space-y-2 text-lg">
          <p>
            <span className="font-semibold">Phone:</span> +91 6293900540
          </p>
          <hr className="border-gray-300" />

          <p>
            <span className="font-semibold">Email:</span> amitshawofficial36@gmail.com
          </p>
          <hr className="border-gray-300" />

          <p>
            <span className="font-semibold">
              <a
                href="https://github.com/amitshaw-08"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800 transition duration-300"
              >
                GitHub
              </a>
            </span>
            <hr className="border-gray-300" />

          </p>
          <p>
            <span className="font-semibold">
              <a
                href="https://www.linkedin.com/in/amit-shaw-a7406b1bb/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800 transition duration-300"
              >
                LinkedIn
              </a>
            </span>
            <hr className="border-gray-300" />

          </p>
          <p>
            <span className="font-semibold">
              <a
                href="/Ankit.pdf"
                download
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Download My Resume
              </a>
            </span>
            <hr className="border-gray-300" />

          </p>
        </div>

        <hr className="border-gray-300" />

        <div className="space-y-2 text-lg">
          <h3 className="text-xl font-bold">Education:</h3>
          <p>
            Indian Institute of Engineering Science and Technology, Shibpur<br />
            B. Tech in Metallurgy and Materials Engineering (CGPA - 8.44)<br />
            Batch: December 2020 - May 2024
          </p>
          <hr className="border-gray-300" />

          <p>
            Modern English Academy, Barrackpore<br />
            Intermediate (ISC) - 85.25% | ICSE - 95.2%<br />
            Batch: April 2012 - March 2024
          </p>
          <hr className="border-gray-300" />

           <h4 className="text-xl font-bold">WORK EXPERIENCE</h4>
           <p>
            Assistant Manager (Operations) <br />
            JSW Steel, Dolvi Works<br />
            July 2024 - Present
          </p>
          <hr className="border-gray-300" />

        </div>
        

        <div className="space-y-2 text-lg">
          <h3 className="text-xl font-bold">TECHNICAL SKILLS </h3>
          <p>
            
             ●	Programming - C, C++, Python<br />
             ●	Frameworks/ Libraries - React.js, Node.js, Express.js, Tailwind CSS, GSAP<br />
             ●	Database - MongoDB, SQL, SQL2<br />
             ●	ML Libraries - Numpy, Pandas, Matplotlib, Seaborn, Scikit Learn<br />
             ●	Familiar - Git, Machine Learning, Deep Learning, Computer Vision, Image Processing<br />
             ●	Software - Visual Studio Code, Git, Jupyter Notebook

          </p>
          <hr className="border-gray-300" />

        </div>
      </div>
    </div>
  );
};

export default Page3;

