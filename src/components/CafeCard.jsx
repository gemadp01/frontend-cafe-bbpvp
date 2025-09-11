import Button from "@/components/Button";
import { MapPin, Phone } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const CafeCard = ({ id, namaCafe, lokasiCafe, noTelp }) => {
  return (
    <Link
      to={{ pathname: `/find-cafe/cafe-detail/${id}` }}
      state={{ namaCafe, lokasiCafe, noTelp }}
    >
      <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden max-w-sm mx-auto">
        {/* Image Section */}
        <div className="relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt={namaCafe}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {/* <div className="absolute top-3 right-3 flex gap-2">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`p-2 rounded-full backdrop-blur-sm transition-all ${isLiked ? "bg-red-500 text-white" : "bg-white/80 text-gray-600 hover:bg-white"}`}
            >
              <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
            </button>
            <div
              className={`px-3 py-1 rounded-full backdrop-blur-sm text-xs font-medium ${isOpen ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}
            >
              {isOpen ? "Open" : "Closed"}
            </div>
          </div>
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
            <MapPin className="w-3 h-3 inline mr-1" />
            {distance}
          </div> */}
        </div>

        {/* Content Section */}
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-semibold text-primary group-hover:text-orange-600 transition-colors">
              {namaCafe}
            </h3>
            {/* <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-textColor-1">{rating}</span>
          </div> */}
          </div>

          <div className="space-y-2 mb-4">
            <div className="flex items-start text-textColor-1 text-sm">
              <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
              <span className="break-words">{lokasiCafe}</span>
            </div>
            <div className="flex items-start text-textColor-1 text-sm">
              <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
              <span className="break-words">{noTelp}</span>
            </div>
          </div>

          <Button width="full">View Details</Button>
        </div>
      </div>
    </Link>
  );
};

export default CafeCard;
