import Badge from "@/components/Badge";
import { Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-6 py-40 lg:py-24">
        <div className="text-center mb-16 space-y-6 ">
          <Badge text="About Our Mission" icon={Heart} />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-textColor-1 bg-clip-text text-transparent">
            Tentang
            <br />
            <span className="bg-gradient-to-r from-textColor-1 to-bgColor-2 bg-clip-text text-transparent">
              Cafe Finder
            </span>
          </h1>

          <p className="text-xl text-textColor-1 max-w-3xl mx-auto leading-relaxed">
            Kami adalah platform terdepan yang menghubungkan cafe enthusiast
            dengan cafe-cafe terbaik di Indonesia. Misi kami adalah membuat
            pencarian cafe menjadi mudah, menyenangkan, dan memberikan
            pengalaman yang tak terlupakan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
