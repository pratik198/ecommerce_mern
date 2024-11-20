import React from "react";
import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";
import { lengha_page1 } from "../../../Data/Women/LenghaCholi";

const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel data={lengha_page1} sectionName={"Women's Top"} />
        <HomeSectionCarousel data={lengha_page1} sectionName={"Men's Shoes"} />
        <HomeSectionCarousel data={lengha_page1} sectionName={"Men's Shirt"} />
        <HomeSectionCarousel
          data={lengha_page1}
          sectionName={"Women's Saree"}
        />
        <HomeSectionCarousel
          data={lengha_page1}
          sectionName={"Women's Dress"}
        />
      </div>
    </div>
  );
};

export default HomePage;
