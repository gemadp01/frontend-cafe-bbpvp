import { useParams, useLocation } from "react-router-dom";
import { ProjectAccordion } from "../components/ProjectAccordion";
import { Coffee, MapPin, Phone } from "lucide-react";

const CafeDetailPage = () => {
  const { userId } = useParams();
  const location = useLocation();
  const { namaCafe, lokasiCafe, noTelp } = location.state || {};

  // Sample product data
  // const products = Array.from({ length: 10 }, (_, index) => ({
  //   id: index + 1,
  //   name: "Nama Product",
  //   price: "Rp. xxx",
  //   stock: "Stock",
  //   image: `https://via.placeholder.com/600x400/000000/FFFFFF?text=600+x+400`,
  // }));

  return (
    <div className="min-h-screen mt-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Cafe Info */}
        <div className="bg-white border border-gray-300 rounded-lg p-6 mb-8">
          <div className="flex items-center space-x-4 flex-col md:flex-row">
            <div className="w-12 h-12 bg-bgColor-2 rounded-full flex-shrink-0 flex items-center justify-center">
              <Coffee className="w-5 h-5 text-white" />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-primary">{namaCafe}</h2>
              <p className="text-gray-600 flex items-center">
                <MapPin className="w-6 h-6 mr-2 shrink-0" />
                {lokasiCafe}
              </p>
              <p className="text-gray-600 flex items-center">
                <Phone className="w-6 h-6 mr-2 shrink-0" />
                {noTelp}
              </p>
            </div>
          </div>
        </div>

        <ProjectAccordion userParam={userId} />
      </div>
    </div>
  );
};

export default CafeDetailPage;
