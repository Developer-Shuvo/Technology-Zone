import img1 from "./About us/pc.jpg?w=800&format=webp&quality=75";
import img3 from "./About us/joystick.jpg?w=300&format=webp&quality=80";
import img4 from "./About us/light.jpg?w=300&format=webp&quality=80";
import img5 from "./About us/2331.jpg?w=300&format=webp&quality=80  ";

const AboutUs = () => {
  return (
    <div>
      {/* ABOUT Section */}
      <div
        className="w-full lg:h-screen h-full m-auto flex items-center
       justify-center py-20  bg-gray-50 dark:bg-gray-900"
      >
        <div className="w-full h-full flex flex-col justify-center items-center sm:px-4 px-2 max-w-[1400px] mx-auto">
          <div className="lg:w-[90%] w-full mx-auto flex flex-col lg:gap-12 lg:flex-row items-center justify-center">
            {/* Side Images */}
            <div className="relative">
              {/* Side Img 1 */}
              <img
                className="absolute z-20 lg:left-[2rem] -top-4 left-[1rem] lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full"
                src={img3}
                alt="Side Image"
              />

              {/* Side Img 2 */}
              <img
                className="absolute z-20 lg:top-[12rem] sm:top-[11rem] top-[5rem] sm:-left-[3rem] -left-[2rem] lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full"
                src={img4}
                alt="Side Image 2"
              />

              {/* Side Img 3 */}
              <img
                className="absolute z-20 lg:top-[23rem] sm:top-[20.5rem] top-[10.5rem] left-[2rem] lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full"
                src={img5}
                alt="Side Image 3"
              />

              {/* Main Img */}
              <img
                className="rounded-full relative object-cover right-0 lg:w-[30rem] lg:h-[30rem] sm:w-[25rem] sm:h-[25rem] w-[12rem] h-[12rem] outline sm:outline-offset-[.77em] outline-offset-[.37em] outline-green-500"
                src={img1}
                alt="About us"
              />
            </div>

            {/* Text Content */}
            <div className="lg:w-[60%] p-4 w-full h-full shadow-xl shadow-green-300/40 flex flex-col justify-center items-center sm:px-6 px-4 rounded-xl">
              <h2 className="text-4xl text-center text-green-600 dark:text-green-400 font-bold px-4 py-1 md:mt-0 mt-10">
                About Us
              </h2>
              <p className="md:text-3xl text-2xl text-center text-gray-800 dark:text-gray-200 font-bold my-5">
                We are Technology Zone
              </p>
              <p
                className="md:text-xl sm:text-lg text-base mt-2 text-justify px-4 sm:px-6 md:px-6 lg:px-2
               dark:text-gray-300"
              >
                Welcome to Technology Zone, your trusted destination for the
                latest and most reliable technology products. We specialize in
                providing top-quality PCs, monitors, desktops, laptops,
                smartphones, and accessories that meet the needs of both
                professionals and everyday users. At Technology Zone, we believe
                technology should be accessible, innovative, and dependable.
                Whether you’re upgrading your workspace, building your dream PC,
                or looking for the latest gadgets, we’re here to guide you every
                step of the way. Our goal is to deliver exceptional products,
                expert advice, and outstanding customer service so you can shop
                with confidence. Your tech journey starts here — where
                performance meets innovation.
              </p>

              {/* Button */}
              <button className="lg:mt-10 mt-6 lg:px-6 px-4 lg:py-4 py-2 bg-green-600 rounded-sm lg:text-xl text-lg text-white font-semibold">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Reach Section */}
      <div id="about" className="py-20 pb-30 md:px-20 lg:px-20 bg-[#121212]">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="mb-12 text-center">
            {/* Heading */}
            <h2 className="text-purple-400 text-lg mb-2" data-aos="fade-down">
              Achievement
            </h2>
            <h3
              className="mb-4 px-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-white section-title leading-tight text-center flex  justify-center items-center lg:text-left break-words"
              data-aos="fade-down"
            >
              Capturing Moments That Last Forever
            </h3>

            <p
              className="mb-8 px-4 max-w-4xl mx-auto text-gray-400 text-sm sm:text-base lg:text-lg text-center lg:text-left leading-relaxed break-words"
              data-aos="fade-down"
            >
              With over a decade of experience in professional photography,
              we've mastered the art of storytelling through our lens. Our
              passion lies in capturing authentic moments and turning them into
              timeless memories.
            </p>

            {/*__ About Cards Section __*/}
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4 justify-center">
              {/* Card 1 */}
              <div className="rounded-lg border border-gray-800 bg-[#1A1A1A] p-6 text-center w-[90%] sm:w-[85%] mx-auto">
                <h4 className="mb-2 text-3xl font-bold text-purple-400">10+</h4>
                <p className="text-gray-400">Years Experience</p>
              </div>
              {/* Card 2 */}
              <div className="rounded-lg border border-gray-800 bg-[#1A1A1A] p-6 text-center w-[90%] sm:w-[85%] mx-auto">
                <h4 className="mb-2 text-3xl font-bold text-purple-400">
                  200+
                </h4>
                <p className="text-gray-400">Projects Completed</p>
              </div>
              {/* Card 3 */}
              <div className="rounded-lg border border-gray-800 bg-[#1A1A1A] p-6 text-center w-[90%] sm:w-[85%] mx-auto">
                <h4 className="mb-2 text-3xl font-bold text-purple-400">
                  150+
                </h4>
                <p className="text-gray-400">Happy Clients</p>
              </div>
              {/* Card 4 */}
              <div className="rounded-lg border border-gray-800 bg-[#1A1A1A] p-6 text-center w-[90%] sm:w-[85%] mx-auto">
                <h4 className="mb-2 text-3xl font-bold text-purple-400">50+</h4>
                <p className="text-gray-400">Awards Won</p>
              </div>
            </div>
          </div>

          {/* Buttons Section */}
          <div
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8"
            data-aos="fade-up"
          >
            <a
              href="#team"
              className="cursor-pointer rounded-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-8"
            >
              Meet Our Team
            </a>
            <a
              href="#contact"
              className="cursor-pointer rounded-full border-2 py-3 px-8 border-white text-white hover:bg-white hover:text-purple-900 transition duration-300 ease-in-out"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
