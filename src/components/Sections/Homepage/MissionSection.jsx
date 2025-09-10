import Badge from "@/components/Badge";
import { Heart } from "lucide-react";

const MissionSection = () => {
  return (
    <section className="py-20 ">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge text="Our Mission" icon={Heart} className="mb-8" />

          <h2 className="text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent leading-tight">
            Our mission is to bring
            <br />
            <span className="bg-gradient-to-r from-bgColor-2 to-textColor-1 bg-clip-text text-transparent">
              happiness to our customers
            </span>
          </h2>

          <p className="text-lg text-textColor-1 max-w-3xl mx-auto leading-relaxed mb-8">
            Kami selalu mendengarkan masukan, memperbaiki kekurangan, dan
            menghadirkan fitur-fitur baru supaya Anda bisa menikmati pengalaman
            yang lebih nyaman dan menyenangkan setiap kali menggunakan layanan
            kami.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-textColor-1">Customer Support</div>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-textColor-1">Satisfaction Guarantee</div>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-primary mb-2">Fast</div>
              <div className="text-textColor-1">Real-time Updates</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
