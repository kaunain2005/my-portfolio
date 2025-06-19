import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, TextPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const Hero = () => {
    const clipRef = useRef(null); // <-- apply clipPath to this
    // Hero section for bg
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

    // Heor section for top text
    // useGSAP(() => {
    //     gsap.to("#hero-top-para1",
    //         {
    //             duration: 3,
    //             text: "Kaunain bolte"
    //         }
    //     )
    //     gsap.fromTo(
    //         "#hero-top-heading",
    //         {
    //             opacity: 0,
    //             fontSize: 2000,
    //         },
    //         {
    //             opacity: 1,
    //             fontSize: 72,
    //             duration: 2,
    //             ease: "power2.out",
    //         }
    //     );

    // }, []);

    return (
        <section className="relative w-screen h-dvh overflow-x-hidden bg-white">

            {/* Clipped Video Wrapper */}
            <div
                ref={clipRef}
                className="relative z-10 h-full w-screen overflow-x-hidden"
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
                        <p id="hero-top-para1" className="text-3xl max-w-64 font-bold text-blue-200">KAUNAIN</p>
                        <h1 id="hero-top-heading" className="text-blue-300 text-6xl"><b>KAUNAIN</b></h1>
                        <p className="text-3xl mb-5 max-w-64 ">I am very powerfull coder</p>
                    </div>
                </div>

            </div>
            <h1 className="font-title absolute bottom-10 right-10 z-3 text-7xl text-black">Hi,</h1>
        </section>
    );
};

export default Hero;
