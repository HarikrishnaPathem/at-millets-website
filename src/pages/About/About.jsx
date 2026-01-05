import React from "react";
import CompanyBackgroundSection from "../../components/about/CompanyBackgroundSection";
import VisionMissionSection from "../../components/about/VisionMissionSection";
import WhyArakuMilletsSection from "../../components/about/WhyArakuMilletsSection";
import CommitmentSustainabilitySection from "../../components/about/CommitmentSustainabilitySection";

const About = () => {
  return (
    <div>
      <CompanyBackgroundSection />
      <VisionMissionSection />
      <WhyArakuMilletsSection />
      <CommitmentSustainabilitySection />
    </div>
  );
};

export default About;
