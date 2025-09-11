import Badge from "@/components/Badge";
import { MessageSquare } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-6 py-40 lg:py-24">
        <div className="text-center mb-16 space-y-6">
          <Badge text="Get In Touch" icon={MessageSquare} />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-textColor-1 bg-clip-text text-transparent">
            Hubungi
            <br />
            <span className="bg-gradient-to-r from-textColor-1 to-bgColor-2 bg-clip-text text-transparent">
              Kami
            </span>
          </h1>

          <p className="text-xl text-textColor-1 max-w-3xl mx-auto leading-relaxed">
            Ada pertanyaan, atau saran? Jangan ragu untuk menghubungi kami.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
