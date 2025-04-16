"use client";
import React, { useState, useRef } from "react";
import WorkExperienceCard from "./WorkExperienceCard";
import { motion, useInView } from "framer-motion";

const workExperienceDate = [
  {
    id: 1,
    companyLogo: "public/images/Geotab.png",
    companyName: "Geotab",
    position: "Software Developer Intern",
    technologiesUsed: ["JavaScript", "TypeScript", "React", "C#", "Git", "PostGres"],
    date: "January - April 2025"
  },
  {
    id: 2,
    companyLogo: "public/images/MoodysLogo.png",
    companyName: "Moody's",
    position: "Software Developer Intern",
    technologiesUsed: ["C++", "Microsoft Azure", "TFS"],
    date: "May - August 2024"
  },
  {
    id: 3,
    companyLogo: "public/images/safeline-logo.png",
    companyName: "Safeline Group of Companies",
    position: "Business Development Intern",
    technologiesUsed: ["Python", "Microsoft Sharepoint", "Power Automate"],
    date: "May - August 2023"
  }
]
 const WorkExperience = () => {
   return (
     <div>WorkExperience</div>
   )
 }
 
 export default WorkExperience