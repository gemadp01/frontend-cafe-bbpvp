import { Eye, Heart, Lightbulb, Shield, Target, Zap } from "lucide-react";

const ValueCard = ({ icon: Icon, title, description }) => (
  <div className="text-center p-6">
    <div className="w-16 h-16 bg-bgColor-2 rounded-full flex items-center justify-center mx-auto mb-4">
      {Icon && <Icon className="w-6 h-6 text-white" />}
    </div>
    <h3 className="text-xl font-semibold text-primary mb-3">{title}</h3>
    <p className="text-textColor-1 leading-relaxed">{description}</p>
  </div>
);

const ValuesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-bgColor-1 to-textColor-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Nilai-Nilai</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ValueCard
            icon={Target}
            title="User-Centered"
            description="Setiap fitur yang dikembangkan selalu mengutamakan kebutuhan dan kepuasan pengguna."
          />
          <ValueCard
            icon={Lightbulb}
            title="Innovation"
            description="Terus berinovasi untuk memberikan pengalaman terbaik dalam menemukan cafe impian."
          />
          <ValueCard
            icon={Shield}
            title="Trustworthy"
            description="Membangun kepercayaan melalui layanan yang konsisten dan dapat diandalkan."
          />
          <ValueCard
            icon={Zap}
            title="Excellence"
            description="Berkomitmen untuk selalu memberikan layanan dengan standar kualitas tertinggi."
          />
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
