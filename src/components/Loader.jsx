import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Loader = ({ fullScreen = true }) => {
    const refs = Array.from({ length: 7 }, () => useRef(null));
    const svgRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const paths = refs.map(ref => ref.current).filter(Boolean);
        if (paths.length === 0) return;

        // Initial path setup
        paths.forEach(path => {
            const len = path.getTotalLength();
            path.style.strokeDasharray = len;
            path.style.strokeDashoffset = len;
            path.style.fill = 'none';
            path.style.stroke = '#ffffff';
            path.style.strokeWidth = '1mm';
        });

        const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

        const groups = [
            [refs[0], refs[2]],
            [refs[1], refs[4]],
            [refs[3], refs[5], refs[6]],
        ];

        const colors = ["#FFD700", "#FF6347", "#6A5ACD"];

        groups.forEach((group, i) => {
            const paths = group.map(r => r.current).filter(Boolean);
            const label = `group${i}`;
            const color = colors[i];
            const delay = i * 0.2;

            tl.addLabel(label, `+=${delay}`);
            paths.forEach(p => {
                tl.to(p, {
                    strokeDashoffset: 0,
                    duration: 0.6,
                    stroke: color,
                    opacity: 1,
                }, label);
            });
            tl.to(paths, {
                fill: color,
                duration: 0.4,
                ease: "power1.out"
            }, `${label}+=0.1`);
        });

         // Exit Animation
        tl.to(svgRef.current, {
            x:"450",
            scale: 90,
            opacity: 1,
            duration: 1,
            ease: "power3.inOut"
        }, "+=0.5");

        // Optional: Hide the container after fade-out
        tl.to(containerRef.current, {
            opacity: 1,
            pointerEvents: "none",
            duration: 0.3,
        }, "-=0.5");

        return () => tl.kill();
    }, []);

    return (
        <div
            ref={containerRef}
            className={`${fullScreen ? "fixed inset-0 flex items-center justify-center bg-black z-50" : ""}`}
        >
            <svg
                ref={svgRef}
                width="520"
                height="75"
                viewBox="0 0 520 72"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g strokeLinecap="round" fillRule="evenodd" stroke="#ffffff" strokeWidth="1mm" fill="#000000">
                    <path ref={refs[0]} d="M 37.305 35.986 L 73.291 70.996 L 55.273 70.996 L 26.709 42.383 L 17.773 42.383 L 17.773 29.59 L 26.709 29.59 L 55.273 0.977 L 73.291 0.977 L 37.305 35.986 Z M 12.695 0.977 L 12.695 70.996 L 0 70.996 L 0 0.977 L 12.695 0.977 Z" />
                    <path ref={refs[1]} d="M 149.951 7.373 L 149.951 70.996 L 137.256 70.996 L 137.256 53.809 L 92.627 53.809 L 92.627 70.996 L 79.932 70.996 L 79.932 35.986 Q 79.932 28.32 82.568 21.875 Q 85.205 15.43 89.893 10.791 Q 94.58 6.152 100.977 3.564 Q 107.373 0.977 114.941 0.977 L 143.555 0.977 Q 144.873 0.977 146.045 1.465 Q 147.217 1.953 148.096 2.832 Q 148.975 3.711 149.463 4.883 Q 149.951 6.055 149.951 7.373 Z M 92.627 35.986 L 92.627 41.113 L 137.256 41.113 L 137.256 13.672 L 114.941 13.672 Q 114.355 13.672 112.476 13.843 Q 110.596 14.014 108.13 14.697 Q 105.664 15.381 102.93 16.797 Q 100.195 18.213 97.9 20.703 Q 95.605 23.193 94.116 26.929 Q 92.627 30.664 92.627 35.986 Z" />
                    <path ref={refs[2]} d="M 233.301 0.977 L 233.301 64.6 Q 233.301 65.967 232.813 67.139 Q 232.324 68.311 231.445 69.165 Q 230.566 70.02 229.395 70.508 Q 228.223 70.996 226.904 70.996 L 198.291 70.996 Q 194.238 70.996 190.088 70.117 Q 185.938 69.238 182.056 67.407 Q 178.174 65.576 174.756 62.744 Q 171.338 59.912 168.774 56.03 Q 166.211 52.148 164.746 47.144 Q 163.281 42.139 163.281 35.986 L 163.281 0.977 L 175.977 0.977 L 175.977 35.986 Q 175.977 41.357 177.466 45.068 Q 178.955 48.779 181.25 51.27 Q 183.545 53.76 186.279 55.176 Q 189.014 56.592 191.479 57.275 Q 193.945 57.959 195.825 58.13 Q 197.705 58.301 198.291 58.301 L 220.605 58.301 L 220.605 0.977 L 233.301 0.977 Z" />
                    <path ref={refs[3]} d="M 318.018 0.977 L 318.018 65.576 Q 318.018 66.943 317.505 68.115 Q 316.992 69.287 316.138 70.142 Q 315.283 70.996 314.111 71.484 Q 312.939 71.973 311.621 71.973 Q 310.449 71.973 309.253 71.533 Q 308.057 71.094 307.129 70.117 L 260.742 21.68 L 260.742 70.996 L 248.047 70.996 L 248.047 6.396 Q 248.047 4.443 249.146 2.856 Q 250.244 1.27 251.953 0.488 Q 253.76 -0.244 255.664 0.122 Q 257.568 0.488 258.936 1.904 L 305.322 50.293 L 305.322 0.977 L 318.018 0.977 Z" />
                    <path ref={refs[4]} d="M 401.465 7.373 L 401.465 70.996 L 388.77 70.996 L 388.77 53.809 L 344.141 53.809 L 344.141 70.996 L 331.445 70.996 L 331.445 35.986 Q 331.445 28.32 334.082 21.875 Q 336.719 15.43 341.406 10.791 Q 346.094 6.152 352.49 3.564 Q 358.887 0.977 366.455 0.977 L 395.068 0.977 Q 396.387 0.977 397.559 1.465 Q 398.73 1.953 399.609 2.832 Q 400.488 3.711 400.977 4.883 Q 401.465 6.055 401.465 7.373 Z M 344.141 35.986 L 344.141 41.113 L 388.77 41.113 L 388.77 13.672 L 366.455 13.672 Q 365.869 13.672 363.989 13.843 Q 362.109 14.014 359.644 14.697 Q 357.178 15.381 354.443 16.797 Q 351.709 18.213 349.414 20.703 Q 347.119 23.193 345.63 26.929 Q 344.141 30.664 344.141 35.986 Z" />
                    <path ref={refs[5]} d="M 429.004 0.977 L 429.004 70.996 L 416.309 70.996 L 416.309 0.977 L 429.004 0.977 Z" />
                    <path ref={refs[6]} d="M 513.818 0.977 L 513.818 65.576 Q 513.818 66.943 513.306 68.115 Q 512.793 69.287 511.938 70.142 Q 511.084 70.996 509.912 71.484 Q 508.74 71.973 507.422 71.973 Q 506.25 71.973 505.054 71.533 Q 503.857 71.094 502.93 70.117 L 456.543 21.68 L 456.543 70.996 L 443.848 70.996 L 443.848 6.396 Q 443.848 4.443 444.946 2.856 Q 446.045 1.27 447.754 0.488 Q 449.561 -0.244 451.465 0.122 Q 453.369 0.488 454.736 1.904 L 501.123 50.293 L 501.123 0.977 L 513.818 0.977 Z" />
                </g>
            </svg>
        </div>
    );
};

export default Loader;
