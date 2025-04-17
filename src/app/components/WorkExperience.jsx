"use client";
import React from "react";
import WorkExperienceCard from "./WorkExperienceCard";
import { motion } from "framer-motion";
import GeotabLogo from "../../../public/images/Geotab.png";
import MoodysLogo from "../../../public/images/MoodysLogo.png";
import SafelineLogo from "../../../public/images/safeline-logo.png";

const workExperiences = [
  {
    id: 1,
    companyLogo: GeotabLogo,
    companyName: "Geotab",
    position: "Software Developer Intern",
    technologiesUsed: ["TypeScript", "React", "C#", "Git", "PostGres"],
    date: "January - April 2025",
    description: "This is a random description to check how the card will look. I will add additional information later.",
  },
  {
    id: 2,
    companyLogo: MoodysLogo,
    companyName: "Moody's",
    position: "Software Developer Intern",
    technologiesUsed: ["C++", "Microsoft Azure", "TFS"],
    date: "May - August 2024",
    description: "This is a random description to check how the card will look. I will add additional information later.",
  },
  {
    id: 3,
    companyLogo: SafelineLogo,
    companyName: "Safeline Group of Companies",
    position: "Business Development Intern",
    technologiesUsed: ["Python", "Microsoft Sharepoint", "Power Automate"],
    date: "May - August 2023",
    description: "This is a random description to check how the card will look. I will add additional information later.",
  },
];

const WorkExperience = () => {
  return (
    <section id="workexperience" className="w-full px-4 py-12 bg-[#121212]">
      <motion.h2
        className="text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-blue-700 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        Work Experience
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {workExperiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: false }}
          >
            <WorkExperienceCard
              companyLogo={experience.companyLogo}
              companyName={experience.companyName}
              position={experience.position}
              description={experience.description}
              technologiesUsed={experience.technologiesUsed}
              date={experience.date}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;