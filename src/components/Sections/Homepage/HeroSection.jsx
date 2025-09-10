import Badge from "@/components/Badge";
import Button from "@/components/Button";
import { ArrowRight, Clock, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden">
      <div className="container mx-auto px-6 py-40 lg:py-24 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
          {/* Content */}
          <div className="flex-1 space-y-6 text-center lg:text-left mb-12 lg:mb-0">
            <Badge />

            <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent leading-tight">
              Discover Amazing
              <br />
              <span className="bg-gradient-to-r from-textColor-1 to-bgColor-2 bg-clip-text text-transparent">
                Cafes Near You
              </span>
            </h1>

            <p className="text-lg text-gray-600 max-w-md mx-auto lg:mx-0 leading-relaxed">
              Temukan café favorit, lihat meja yang kosong, dan cek menu yang
              lagi ready, semua dari HP kamu.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button className="group" color="primary">
                Explore Cafes
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button color="secondary">Learn More</Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 relative">
            <div className="relative">
              <div
                className="absolute inset-0 bg-gradient-to-tr 
							 from-bgColor-1/20 to-bgColor-2/20  rounded-3xl blur-2xl transform rotate-6"
              ></div>
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                alt="Beautiful cafe interior"
                className="relative rounded-3xl shadow-2xl w-full max-w-lg mx-auto transform hover:scale-105 transition-transform duration-700"
              />

              {/* Floating cards */}
              <div
                className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-xl animate-bounce"
                style={{ animationDuration: "3s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-bgColor-2 rounded-full flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Nearby</div>
                    {/* <div className="text-xs text-gray-600">2.3 km</div> */}
                  </div>
                </div>
              </div>

              <div
                className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl animate-bounce"
                style={{ animationDuration: "3s", animationDelay: "1s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-bgColor-2 rounded-full flex items-center justify-center">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Open</div>
                    {/* <div className="text-xs text-gray-600">until 10 PM</div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
