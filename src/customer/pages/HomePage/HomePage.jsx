import React from "react";
import MainCarousel from "../../components/HomeCarousel/MailCarousel";
import HomeCarouselSection from "../../components/HomeSectionCarousel/HomeCarouselSection";
import { mens_kurta } from "../../../Data/mens_kurta";
const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeCarouselSection data={mens_kurta} sectionName={"Men's kurta"} />
        <HomeCarouselSection data={mens_kurta} sectionName={"Men's Shoes"} />
        <HomeCarouselSection data={mens_kurta} sectionName={"Men's Shirt"} />
        <HomeCarouselSection data={mens_kurta} sectionName={"Men's Saree"} />
        <HomeCarouselSection data={mens_kurta} sectionName={"Women's Dress"} />
      </div>
    </div>
  );
};

export default HomePage;
