import Layout from "@/components/Layout";
import FeaturesSection from "@/components/Sections/Homepage/FeaturesSection";
import HeroSection from "@/components/Sections/Homepage/HeroSection";
import MissionSection from "@/components/Sections/Homepage/MissionSection";

const HomePage = () => {
  return (
    <>
      <Layout>
        {/* New Layout */}
        <HeroSection />
        <FeaturesSection />
        <MissionSection />

        {/* Oldest Layout */}
        {/* <IntroSection /> */}
        {/* <SupportedSection /> */}
        {/* text-center w-3/4 mx-auto */}
        {/* <DescriptionSection /> */}
      </Layout>
    </>
  );
};

export default HomePage;
