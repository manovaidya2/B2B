import React from "react";
import HeroSection from "../home/HeroSection";
import PartnershipModelsSection from "../home/PartnershipModelsSection";
import PartnershipClaritySection from "../home/PartnershipClaritySection";
import EcosystemSection from "../home/EcosystemSection";
import MarketRealitySection from "../home/MarketRealitySection";
import DevelopmentModelSection from "../home/DevelopmentModelSection";
// import GrowthPathwaysSection from "../home/GrowthPathwaysSection";
import WorkflowSection from "../home/WorkflowSection";
import PartnerProfileSection from "../home/PartnerProfileSection";
import ClinicalEcosystemSection from "../home/ClinicalEcosystemSection";
import OutcomesStoriesSection from "../home/OutcomesStoriesSection";
import PartnershipFAQSection from "../home/PartnershipFAQSection";
import PartnershipApplicationSection from "../home/PartnershipApplicationSection";
import FinalCTASection from "../home/FinalCTASection";




export default function Homepage() {
  return (
    <>
 <HeroSection />
 <EcosystemSection />
 <MarketRealitySection />
 <DevelopmentModelSection />
 {/* <GrowthPathwaysSection /> */}
 <PartnershipModelsSection />
 <PartnershipClaritySection />
 <WorkflowSection />
 <PartnerProfileSection />
 <ClinicalEcosystemSection />
 <OutcomesStoriesSection />
 <PartnershipFAQSection />
 <PartnershipApplicationSection />
 <FinalCTASection />
  
   


    </>
  );
}
