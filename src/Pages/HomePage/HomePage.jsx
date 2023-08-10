import React from "react";
import Advantage from "./Advantage/Advantage";
import CarouselBanner from "./CarouselBanner/CarouselBanner";
import CarouselService from "./CarouselService/CarouselService";
import Explore from "./Explore/Explore";

export default function HomePage() {
  return (
    <div>
      <CarouselBanner />
      <CarouselService />
      <Advantage />
      <Explore />
    </div>
  );
}
