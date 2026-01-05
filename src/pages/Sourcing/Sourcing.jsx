import React from "react";
import TribalSourcingHeroSection from "../../components/sourcing/TribalSourcingHeroSection";
import DirectTribalSourcingSection from "../../components/sourcing/DirectTribalSourcingSection";
import EthicalProcurementSection from "../../components/sourcing/EthicalProcurementSection";
import FarmerEmpowermentSection from "../../components/sourcing/FarmerEmpowermentSection";
import EnvironmentalResponsibilitySection from "../../components/sourcing/EnvironmentalResponsibilitySection";

const Sourcing = () => {
  return (
    <div>
      <TribalSourcingHeroSection />
      <DirectTribalSourcingSection />
      <EthicalProcurementSection />
      <FarmerEmpowermentSection />
      <EnvironmentalResponsibilitySection />
    </div>
  );
};

export default Sourcing;
