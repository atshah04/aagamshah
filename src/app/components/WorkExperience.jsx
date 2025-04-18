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
    description: ""
      // "As part of the Pixel Pipeline team, I worked on the Trips History page" +
      // " implementing new features and fixing bugs related to their APIs. I was" + 
      // " also responsible for having a minimum of a 90% code coverage through unit" +
      // " tests on their BETA page which was rolled out to production within my term." +
      // " To improve the user experience, I also implemented an API which would allow users to sort their" +
      // " trips by date, driver name or device name in ascending or descending order to allow for better insights.",
  },
  {
    id: 2,
    companyLogo: MoodysLogo,
    companyName: "Moody's",
    position: "Software Developer Intern",
    technologiesUsed: ["C++", "Microsoft Azure", "TFS"],
    date: "May - August 2024",
    description: ""
      // "As part of Moody’s AXIS team, I improved the efficiency of reserve component" +
      // "calculations by integrating SQL-driven automation, cutting runtime by 7%. I " + 
      // "refactored legacy storage logic into a modular class, reducing the codebase by" +
      // " over 1,200 lines and decreasing compile time by 12%. I also developed real-time"+
      // " error walk-throughs within AXIS feature codes to enhance user guidance and troubleshooting."
  },
  {
    id: 3,
    companyLogo: SafelineLogo,
    companyName: "Safeline",
    position: "Business Development Intern",
    technologiesUsed: ["Python", "Sharepoint", "Power Automate"],
    date: "May - August 2023",
    description: ""
      // "During my internship at Safeline, I built a Python automation tool that analyzed and compared" +
      // " over 1 million words across various legislations, helping identify key discrepancies for policy" +
      // " updates. I also engineered an automated VBA-driven database to catalog and update company files" +
      // " through an intuitive interface. To improve internal operations, I designed and launched a " +
      // "centralized company hub on Microsoft SharePoint, streamlining access to essential resources" + 
      // " and boosting team productivity.",
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
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
