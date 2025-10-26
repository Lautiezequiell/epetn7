   import React from "react";
import Hero from "./Components/Hero.jsx";
import AcademicPrograms from "./Components/AcademicPrograms.jsx";
import FeaturedProjects from "./Components/FeaturedProjects.jsx";
import ExpoSection from "./Components/ExpoSection.jsx";
import UpcomingEvents from "./Components/UpcomingEvents.jsx";
import CTASection from "./Components/CTAsection.jsx";
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