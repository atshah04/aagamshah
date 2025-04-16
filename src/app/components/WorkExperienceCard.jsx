import React from "react";

const WorkExperienceCard = ({ companyLogo, companyName, position, description, technologiesUsed, date }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${companyLogo})`, backgroundSize: "cover" }}
      >
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{companyName}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default WorkExperienceCard