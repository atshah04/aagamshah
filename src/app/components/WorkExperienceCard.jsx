import React from "react";
import Image from "next/image";

const WorkExperienceCard = ({
  companyLogo,
  companyName,
  position,
  description,
  technologiesUsed,
  date,
}) => {
  return (
    <div className="bg-transparent border border-zinc-800 rounded-2xl p-4 w-full flex flex-col gap-4 items-start">
      {/* Top: Logo */}
      <div className="w-30 h-20 sm:w-60 sm:h-40 relative flex-shrink-0 mx-auto">
        <Image
          src={companyLogo}
          alt={`${companyName} logo`}
          fill
          className="object-contain"
        />
      </div>

      {/* Bottom: Content */}
      <div className="flex-1 flex flex-col text-left">
        {/* Company Name + Position + Date */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
          <div>
            {companyName.length < 15 ? (
              <h3 className="text-md sm:text-xl font-bold text-white">
                {companyName}
              </h3>
            ) : (
              <h3 className="text-md sm:text-md font-bold text-white">
                {companyName}
              </h3>
            )}
            <span className="text-md text-blue-300">{position}</span>{" "}
            {/* Increased font size */}
          </div>
          <span className="text-sm text-gray-400 mt-2 sm:mt-0 sm:text-right self-start sm:self-auto">
            {date}
          </span>
        </div>

        {/* Description */}
        {description && (
          <p className="text-sm text-gray-400 mt-2 break-words">
            {description}
          </p>
        )}

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {technologiesUsed.map((tech, index) => (
            <span
              key={index}
              className="text-xs bg-zinc-800 text-zinc-200 px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceCard;
