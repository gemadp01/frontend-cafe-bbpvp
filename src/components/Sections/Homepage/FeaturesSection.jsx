import Badge from "@/components/Badge";
import FeatureCard from "@/components/FeatureCard";
import Layout from "@/components/Layout";
import { Coffee, MapPin, Users } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Why Choose Our Platform?
          </h2>
          <p className="text-textColor-1 max-w-2xl mx-auto">
            Kami menyediakan semua yang Anda butuhkan untuk menemukan cafe
            perfect dan menikmati pengalaman yang tak terlupakan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={MapPin}
            title="Find Nearby Cafes"
            description="Temukan cafe terdekat dengan lokasi real-time dan navigasi yang akurat."
          />
          <FeatureCard
            icon={Coffee}
            title="Menu & Availability"
            description="Lihat menu lengkap dan ketersediaan makanan/minuman secara real-time."
          />
          <FeatureCard
            icon={Users}
            title="Table Availability"
            description="Lihat meja yang tersedia dan hindari antrian panjang."
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
