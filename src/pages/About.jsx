import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      aboutRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={aboutRef}
      id="about"
      className="relative min-h-screen w-screen overflow-x-hidden px-4 sm:px-8 md:px-12 lg:px-20 py-16 bg-gray-950 flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-screen"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-teal-400 mb-8">
          About Me
        </h2>

        <p className="text-base sm:text-lg text-gray-300 text-center leading-relaxed max-w-3xl mx-auto mb-10">
          I'm <span className="text-white font-semibold">Kaunain Shaikh</span>, a creative and dedicated developer passionate about building modern, responsive web applications. I specialize in frontend development using React and love blending design with clean, efficient code.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-teal-500/30 transition duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Skills</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm sm:text-base">
              <li>React.js, Tailwind CSS, GSAP, Framer Motion</li>
              <li>Node.js, Express.js, MongoDB</li>
              <li>Python, Django, Firebase</li>
              <li>Figma, Adobe XD, Git</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-teal-500/30 transition duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Interests</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm sm:text-base">
              <li>Creative Web Development</li>
              <li>UI/UX Design & Animation</li>
              <li>Hackathons & Coding Challenges</li>
              <li>Open Source & Community Work</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
