// import { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Hero = () => {
//   const heroRef = useRef(null);

//   useEffect(() => {
//     gsap.from(heroRef.current, {
//       opacity: 1,
//       y: -50,
//       duration: 1,
//       scrollTrigger: {
//         trigger: heroRef.current,
//         start: "top center",
//       },
//     });
//   }, []);

//   return (
//     <>
//      <section ref={heroRef} className="min-h-screen flex items-center justify-center">
//       <motion.div
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 1 }}
//         className="text-center"
//       >
//         <h1 className="text-5xl font-bold">Hi, I'm Kaunain 👋</h1>
//         <p className="mt-4 text-xl text-gray-400">
//           Developer | Designer | Educator
//         </p>
//       </motion.div>
//      </section>
//     </>
//   );
// };

// export default Hero;

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion } from "framer-motion";

import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
    const clipRef = useRef(null); // <-- apply clipPath to this

    useGSAP(() => {
        gsap.set(clipRef.current, {
            clipPath: "polygon(20% 0%, 80% 0%, 90% 90%, 0% 100%)",
            borderRadius: '0 0 40% 10%'
        })

        gsap.from(clipRef.current, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            borderRadius: '0 0 0 0',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: clipRef.current,
                start: 'center center',
                end: 'bottom center',
                scrub: true,
            }
        })
    }, []);

    return (
        <section className="relative w-full h-dvh overflow-hidden bg-white">

            {/* Clipped Video Wrapper */}
            <div
                ref={clipRef}
                className="relative z-10 h-full w-full overflow-hidden"
            >
                {/* Background Video */}
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover object-center"
                    src="/video3.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/90 z-10"></div>

                <h1 className="font-title absolute bottom-10 right-10 z-40 text-7xl text-blue-600">Hi,</h1>

                <div className="absolute left-0 top-0 z-40 size-full">
                    <div className="mt-25 px-5 sm:px-10">
                        <p className="text-3xl max-w-64 font-bold text-blue-200">Hi, I am</p>
                        <h1 className="text-blue-300 text-6xl"><b>KAUNAIN</b></h1>
                        <p className="text-3xl mb-5 max-w-64 ">I am very powerfull coder</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
