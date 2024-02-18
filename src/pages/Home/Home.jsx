import { Packages } from "../../components/pagesComponents/Packages/Packages";
import { Benefits } from "../../components/pagesComponents/homePage/BenefitsBlock/Benefits";
import { PromoBlock } from "../../components/pagesComponents/homePage/PromoBlock/PromoBlock";
import { Registration } from "../../components/pagesComponents/homePage/Registration/Registration";
import { StatsBlock } from "../../components/pagesComponents/homePage/StatsBlock/StatsBlock";

export const Home = () => {
  return (
    <>
      <PromoBlock />
      <StatsBlock />
      <Benefits />
      <Packages />
      <Registration />
    </>
  );
};
