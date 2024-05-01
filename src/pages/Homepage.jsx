import React from "react";
import Category from "../components/Home/Category";
import Mainsection from "../components/Home/Mainsection";
import Scrolleffect from "../components/Home/Scrolleffect";
import ReadyToStart from "../components/Home/ReadyToStart";
import DifferentRegion from "../components/Home/DifferentRegion";
import LeadingB2B from "../components/Home/LeadingB2B";
import Explore from "../components/Home/Explore";

const Homepage = () => {
  return (
    <>
      <Mainsection />
      <LeadingB2B />
      <Explore />
      <Scrolleffect />
      <Category />
      <ReadyToStart />
      <DifferentRegion />
    </>
  );
};

export default Homepage;
