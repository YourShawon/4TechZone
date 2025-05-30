"use client";
import React, { useEffect } from "react";
import Container from "./container";
import Image from "next/image";
import Aos from "aos";
// import audience from "/audience.png"

const SmartSolution = () => {
    useEffect(() =>{
    Aos.init({
        duration: 300,
        easing: "ease-in-out"
    })
    }, [])
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center md:justify-center gap-12">
          {/* Left: Image with overlays */}
          <div className="relative w-full "
          data-aos= "fade-right"
          data-aos-delay= "1"
          >
            <div className="rounded-3xl overflow-hidden ">
              <Image
                src="/audience.png"
                width={700}
                height={500}
                alt="Audience"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          {/* Right: Text Content */}
          <div className="" data-aos="fade-left" data-aos-delay="200">
            <div className="uppercase text-sm tracking-widest text-gray-500 font-semibold mb-2" data-aos="fade-left" data-aos-delay="300">
              Endless Possibilities
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight" data-aos="fade-left" data-aos-delay="400">
              Smart solutions that
              <br />
              deliver the results
            </h2>
            <p className="text-gray-600 mb-6" data-aos="fade-left" data-aos-delay="500">
              Tempor sapien sodales quaerat ipsum congue undo laoreet turpis
              neque auctor turpis vitae dolor luctus placerat magna and ligula
              cursus purus vitae purus an ipsum suscipit auris diam dapibus
              libero at fusce blandit neque sagittis
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700" data-aos="fade-left" data-aos-delay="600">
              <li>
                Tempor sapien quaerat ipsum laoreet purus and sapien dolor diam
                ultrice ipsum aliquam congue and dolor cursus
              </li>
              <li>
                Tempor sapien quaerat ipsum laoreet purus and sapien dolor diam
                ultrice ipsum aliquam congue and dolor congue
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SmartSolution;
