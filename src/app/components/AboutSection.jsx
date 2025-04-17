"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="text-white" id="about">
      <motion.div
        className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.5 }} // Trigger animation when 50% of the section is in view
      >
        <div className="hidden md:block">
          <Image alt="about image" src="/images/about_image.jpg" width={700} height={700} />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-blue-900">
            About Me
          </h2>
          <p className="text-base lg:text-lg">
            I am a Computer Science student at the University of Waterloo with a
            passion for Software Engineering, particularly backend development.
            I have experience working with C++, Java, JavaScript, and Python to
            build efficient and scalable solutions. I am a quick learner and a
            team player who is excited to work with others to create innovative
            and effective applications. In my free time, you can catch me
            playing Basketball, watching the NBA or trying some new food places
            with some friends!
          </p>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4">Skills</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium">C++</p>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="h-2.5 rounded-full bg-gradient-to-r from-blue-100 to-blue-700"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium">Python</p>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="h-2.5 rounded-full bg-gradient-to-r from-blue-100 to-blue-700"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium">JavaScript</p>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="h-2.5 rounded-full bg-gradient-to-r from-blue-100 to-blue-700"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium">Java</p>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="h-2.5 rounded-full bg-gradient-to-r from-blue-100 to-blue-700"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium">React</p>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="h-2.5 rounded-full bg-gradient-to-r from-blue-100 to-blue-700"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium">Kotlin</p>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="h-2.5 rounded-full bg-gradient-to-r from-blue-100 to-blue-700"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
