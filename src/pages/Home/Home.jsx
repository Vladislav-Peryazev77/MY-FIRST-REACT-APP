import { PromoBlock } from "../../components/pagesComponents/homePage/PromoBlock";
import { StatsBlock } from "../../components/pagesComponents/homePage/StatsBlock";
import { BenefitsBlock } from "../../components/pagesComponents/homePage/BenefitsBlock";
import { CoachesBlock } from "../../components/pagesComponents/homePage/CoachesBlock";
import { PackagesBlock } from "../../components/pagesComponents/homePage/PackagesBlock";
import { RegistrationBlock } from "../../components/pagesComponents/homePage/RegistrationBlock";

export const Home = () => {
  return (
    <>
      <PromoBlock />
      <StatsBlock />
      <BenefitsBlock />
      <CoachesBlock />
      <PackagesBlock />
      {/* <RegistrationBlock /> */}
    </>
  );
};
