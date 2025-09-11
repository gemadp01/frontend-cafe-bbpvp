import HeroSection from "@/components/Sections/Contact/HeroSection";
import Layout from "../components/Layout";
import ContactFormSection from "@/components/Sections/Contact/ContactFormSection";

const ContactPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection />

      {/* Contact Form */}
      <ContactFormSection />
    </Layout>
  );
};

export default ContactPage;
