import React from "react";
import Image from "next/image";
import { ContainerScroll } from "../../components/ui/container-scroll-animation";
import { BackgroundBeamsWithCollision } from "../../components/ui/background-beams-with-collision";

function Hero() {
  return (
    <section className="relative bg-gray-50 flex flex-col items-center overflow-hidden min-h-screen">
      <div className="absolute inset-0 z-0 pointer-events-none min-h-full">
        <div className="absolute top-0 left-0 w-full h-full">
          <BackgroundBeamsWithCollision/>
        </div>
      </div>

      <div className="relative z-10 flex flex-col w-full">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                Unleash the power of 
                <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  Expense Tracking
                </span>
              </h1>
            </>
          }
        >
          <img
            src="https://uploads-ssl.webflow.com/646212a7141696732cbf59f2/646239acbb4016750fae06d3_appledash.jpg"
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </section>
  );
}

export default Hero;
