import { Link } from "react-router";

const ServiceCenter = () => {
  return (
    <div className="bg-[#109fa3] min-h-screen ">
      <div className="max-w-[1300px] mx-auto pt-20  px-4">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-16">
          {/* Text */}
          <div className="lg:w-1/2 px-4 lg:text-left">
            <h1 className="text-white font-extrabold text-3xl lg:text-5xl leading-snug drop-shadow-md">
              Technology Zone - The Official Service <br /> Center of TECHNOLOGY
              ZONE
            </h1>
            <p className="text-gray-100 mt-4 lg:text-lg font-medium leading-relaxed">
              Expert Repair for iPhone, MacBook, Samsung, Android & All Your
              Tech Devices — Fast, Reliable Service with Genuine Parts and
              Certified Technicians in Dhaka
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-4 mt-8 flex-wrap">
              <Link to="#">
                <button className="bg-white font-semibold text-gray-900 px-6 py-3 rounded-lg shadow-md hover:bg-black hover:text-white transition-all duration-300 hover:scale-105">
                  WhatsApp
                </button>
              </Link>
              <Link to="#">
                <button className="bg-white font-semibold text-gray-900 px-6 py-3 rounded-lg shadow-md hover:bg-black hover:text-white transition-all duration-300 hover:scale-105">
                  Book a Repair
                </button>
              </Link>
            </div>
          </div>

          {/* Map */}
          <div className="lg:w-1/2 w-full bg-gray-300 rounded-xl overflow-hidden shadow-xl relative">
            <div className="relative h-[350px] sm:h-[400px] md:h-[450px]">
              <iframe
                title="map"
                src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Dhaka+(My%20Business)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allowFullScreen=""
                loading="lazy"
                style={{ filter: "grayscale(1) contrast(1.2) opacity(0.5)" }}
              ></iframe>

              {/* Address Field */}
              <div className="bg-white/90 backdrop-blur-md border border-gray-200 relative z-10 flex flex-col sm:flex-row flex-wrap py-6 rounded-lg shadow-lg mx-4 sm:mx-6 md:mx-10 -bottom-12 sm:-bottom-20">
                <div className="w-full sm:w-1/2 px-4 sm:px-6 mb-4 sm:mb-0">
                  <h2 className="font-semibold text-gray-900 text-xs tracking-widest">
                    ADDRESS
                  </h2>
                  <p className="mt-1 text-sm leading-relaxed">
                    123 Nakhalpara Street, Tejgaon. [Dhaka City, Bangladesh]
                  </p>
                </div>
                <div className="w-full sm:w-1/2 px-4 sm:px-6">
                  <h2 className="font-semibold text-gray-900 text-xs tracking-widest">
                    EMAIL
                  </h2>
                  <a
                    className="text-green-600 font-medium text-sm break-words hover:underline"
                    href="mailto:example@email.com"
                  >
                    im.computer.engineeer@gmail.com
                  </a>
                  <h2 className="font-semibold text-gray-900 text-xs tracking-widest mt-4">
                    PHONE
                  </h2>
                  <p className="text-sm font-medium">+8801817422784</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCenter;
