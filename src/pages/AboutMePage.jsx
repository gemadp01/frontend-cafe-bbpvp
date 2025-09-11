import HeroSection from "@/components/Sections/About/HeroSection";
import Layout from "../components/Layout";
import StorySection from "@/components/Sections/About/StorySection";
import ValuesSection from "@/components/Sections/About/ValuesSection";
import AboutMeSection from "@/components/Sections/About/AboutMeSection";

const AboutMePage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection />

      {/* Story */}
      <StorySection />

      {/* Values */}
      <ValuesSection />

      {/* About me */}
      <AboutMeSection />
    </Layout>
  );
};

export default AboutMePage;
