const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-bgColor-1 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
      <div className="w-12 h-12 bg-bgColor-2 rounded-xl flex items-center justify-center mb-4">
        {Icon && <Icon className="w-6 h-6 text-white" />}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
      <p className="text-textColor-1">{description}</p>
    </div>
  );
};

export default FeatureCard;
