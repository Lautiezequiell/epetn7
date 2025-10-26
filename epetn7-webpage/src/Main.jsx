   import React from "react";
import Hero from "./Components/Home/Hero.jsx";
import AcademicPrograms from "./Components/Home/AcademicPrograms.jsx";
import FeaturedProjects from "./Components/Home/FeaturedProjects.jsx";
import ExpoSection from "./Components/Home/ExpoSection.jsx";
import UpcomingEvents from "./Components/Home/UpcomingEvents.jsx";
import CTASection from "./Components/Home/CTAsection.jsx";
import Layout from "./Layout.jsx";

const Main = () => {
  return (
    <Layout>
      <Hero />
      <AcademicPrograms />
      <FeaturedProjects />
      <ExpoSection />
      <UpcomingEvents />
      <CTASection />
    </Layout>
  )
}
export default Main;