import React from "react";

const Career = () => {
  return (
    <section className="py-16 mb-40 bg-gray-50">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Join Our Team</h2>
          <p className="mt-4 text-gray-600 text-md lg:text-lg xl:text-lg">
            We’re looking for talented individuals to help us shape the future.
            Explore our current opportunities and find your perfect role.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Job Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-gray-800">Sales Officer</h3>
            <p className="mt-2 text-gray-600">Location: Shop</p>
            <p className="mt-2 text-gray-600">
              We're looking for a skilled Senior Sales Officer with expertise in
              2 years
            </p>
            <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300">
              Apply Now
            </button>
          </div>

          {/* Job Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-gray-800">Technician</h3>
            <p className="mt-2 text-gray-600">Location: Shop</p>
            <p className="mt-2 text-gray-600">
              Join our team as a Technician for solving all problems.
            </p>
            <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300">
              Apply Now
            </button>
          </div>

          {/* Job Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-gray-800">
              Marketing Specialist
            </h3>
            <p className="mt-2 text-gray-600">Location: Main Shop</p>
            <p className="mt-2 text-gray-600">
              We need a dynamic marketing specialist to manage campaigns and
              grow our brand.
            </p>
            <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
