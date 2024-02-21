import { BenefitsBlock } from "../../components/pagesComponents/homePage/BenefitsBlock";
import { CoachesBlock } from "../../components/pagesComponents/homePage/CoachesBlock/CoachesBlock";
import { PackagesBlock } from "../../components/pagesComponents/homePage/PackagesBlock";

import { PromoBlock } from "../../components/pagesComponents/homePage/PromoBlock";
import { RegistrationBlock } from "../../components/pagesComponents/homePage/RegistrationBlock";

import { StatsBlock } from "../../components/pagesComponents/homePage/StatsBlock";

export const Home = () => {
  return (
    <>
      <PromoBlock />
      <StatsBlock />
      <BenefitsBlock />
      <CoachesBlock />
      <PackagesBlock />
      <RegistrationBlock />
    </>
  );
};
