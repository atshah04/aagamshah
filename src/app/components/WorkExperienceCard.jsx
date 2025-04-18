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
      {/* Ensure the card spans the full width of its grid cell */}
      <div className="w-full">
        {/* Top: Logo */}
        <div className="w-30 h-20 sm:w-60 sm:h-40 relative flex-shrink-0 mx-auto">
          <Image
            src={companyLogo}
            alt={`${companyName} logo`}
            fill
            className="object-contain brightness-150"
          />
        </div>

        {/* Bottom: Content */}
        <div className="flex-1 flex flex-col text-left">
          {/* Company Name + Position + Date */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start w-full">
            <div>
              {companyName.length < 15 ? (
                <h3 className="text-md sm:text-xl font-bold text-white">
                  {companyName}
                </h3>
              ) : (
                <h3 className="text-md font-bold text-white">
                  {companyName}
                </h3>
              )}
              <span className="text-sm text-blue-300">{position}</span>{" "}
            </div>
            <span className="text-sm text-gray-400 sm:ml-auto sm:self-start sm:text-right pr-1 mr-0">
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
                className="text-xs bg-gradient-to-r from-blue-400 to-blue-900 text-white px-3 py-1.5 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceCard;
