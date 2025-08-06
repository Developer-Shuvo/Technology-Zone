import React from "react";
import { Link } from "react-router";

const ServiceCenter = () => {
  return (
    <div className="bg-[#109fa3]">
      <div className="max-w-[1300px] mx-auto py-20 px-4">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12">
          {/* Text */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-white font-bold text-5xl leading-snug">
              Technology Zone - The Official Service <br /> Center of TECHNOLOGY
              ZONE
            </h1>
            <p className="text-gray-300 mt-4 text-lg font-semibold">
              Expert Repair for iPhone, MacBook, Samsung, Android & All Your
              Tech Devices — Fast, Reliable <br /> Service with Genuine Parts
              and Certified Technicians in Dhaka
            </p>

            <div className="flex justify-center lg:justify-start items-center gap-4 mt-8 flex-wrap">
              <Link to="#">
                <button className="bg-white font-semibold text-gray-900 px-6 py-2 rounded hover:bg-black hover:text-white transition duration-500">
                  WhatsApp
                </button>
              </Link>
              <Link to="#">
                <button className="bg-white font-semibold text-gray-900 px-6 py-2 rounded hover:bg-black hover:text-white transition duration-500">
                  Book a Repair
                </button>
              </Link>
            </div>
          </div>

          {/* Map */}
          <div className="lg:w-1/2 w-full bg-gray-300 rounded-lg overflow-hidden relative">
            <div className="relative h-[350px]">
              <iframe
                title="map"
                src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Dhaka+(My%20Business)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
              ></iframe>

              <div className="bg-white relative z-10 flex flex-wrap py-6 rounded shadow-md m-4">
                <div className="w-1/2 px-6">
                  <h2 className="font-semibold text-gray-900 text-xs tracking-widest">
                    ADDRESS
                  </h2>
                  <p className="mt-1 text-sm">
                    123 Book Street, BoiPoka City, Dhaka, Bangladesh
                  </p>
                </div>
                <div className="w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="font-semibold text-gray-900 text-xs tracking-widest">
                    EMAIL
                  </h2>
                  <a
                    className="text-red-500 text-sm"
                    href="mailto:example@email.com"
                  >
                    example@email.com
                  </a>
                  <h2 className="font-semibold text-gray-900 text-xs tracking-widest mt-4">
                    PHONE
                  </h2>
                  <p className="text-sm">+880-123-456789</p>
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
