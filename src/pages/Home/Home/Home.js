import React from "react";
import useTitle from "../../../hook/useTitle";
import CTA from "../CTA/CTA";
import Feature from "../Feature/Feature";
import Banner from "../Banner/Banner";
import HomeServices from "../HomeServicesCard/HomeServices";
import Slider from "../Slider/Slider";

export default function Home() {
  useTitle("Home");
  return (
    <div>
      <Slider></Slider>
      <HomeServices></HomeServices>
      <Banner></Banner>
      <Feature></Feature>
      <CTA></CTA>
    </div>
  );
}
