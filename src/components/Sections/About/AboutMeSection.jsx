import profile from "@/assets/images/profile.png";
import clsx from "clsx";

const TeamMember = ({ name, role, image, description, className }) => (
  <div
    className={clsx(
      "bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 text-center",
      className
    )}
  >
    <div className="relative mb-4">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-bgColor-2/50"
      />
    </div>
    <h3 className="text-lg font-semibold text-primary mb-1">{name}</h3>
    <div className="text-orange-600 font-medium mb-3">{role}</div>
    <p className="text-textColor-1 text-sm">{description}</p>
  </div>
);

const AboutMeSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About me</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <TeamMember
            name="Gema Dodi Pranata"
            role="Founder & Developer"
            image={profile}
            description="Aspiring Software Engineer"
            className={"md:col-start-2"}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
