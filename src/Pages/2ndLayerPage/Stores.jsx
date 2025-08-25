import img1 from "./Stores/app.png";
import img2 from "./Stores/clock.png?w=300&format=webp&quality=60";
import img3 from "./Stores/close.png";
import img4 from "./Stores/location.png?w=300&format=webp&quality=60";
import shop from "./Stores/shop.png?w=300&format=webp&quality=60";

const Stores = () => {
  return (
    <section className="bg-gradient-to-r from-cyan-800 to-sky-300 md:pt-40 lg:pt-30 xl:pt-30">
      <div className="mx-auto grid max-w-lg gap-x-6 gap-y-20 px-4 py-32 md:max-w-screen-xl md:grid-cols-2 lg:grid-cols-3">
        {/* Heading */}
        <div>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white drop-shadow-lg">
            Explore Our Stores <br />
            <span className="text-yellow-400 font-bold text-3xl">
              We Are Here For You
            </span>
          </h2>
        </div>

        {/* Store Card (repeat) */}
        {[1, 2, 3, 4, 5].map((_, index) => (
          <div
            key={index}
            className="relative border-2 border-white/30 rounded-xl px-4 pt-16 pb-6
             shadow-lg bg-white/10 backdrop-blur-md hover:scale-105 
             hover:shadow-2xl transition-all duration-300"
          >
            {/* Icon */}
            <div
              className="absolute -top-10 left-6 rounded-xl p-3 bg-white/20 
            backdrop-blur-md shadow-md"
            >
              <img className="h-20 w-20 object-contain" src={shop} alt="shop" />
            </div>

            {/* Title */}
            <h1 className="mb-4 mt-4 uppercase text-blue-950 font-bold text-lg md:text-2xl tracking-wide">
              {
                [
                  "Bashundhara City",
                  "Jamuna Future Park",
                  "New Elephant Road",
                  "Mirpur 10",
                  "Dhanmondi 27",
                ][index]
              }
            </h1>
            <div className="space-y-3">
              {/* Phone */}
              <div className="flex items-center gap-3">
                <img className="h-8 w-8" src={img1} alt="phone" />
                <p className="text-base md:text-lg text-white font-medium">
                  {
                    [
                      "01617422764",
                      "01617422765",
                      "01617422766",
                      "01617422767",
                      "01617422768",
                    ][index]
                  }
                </p>
              </div>

              {/* Open */}
              <div className="flex items-center gap-3">
                <img className="h-8 w-8" src={img2} alt="open" />
                <p className="text-yellow-400 font-semibold">
                  Open: <span className="text-white">8:00 AM to 9:00 PM</span>
                </p>
              </div>

              {/* Close */}
              <div className="flex items-center gap-3">
                <img className="h-8 w-8" src={img3} alt="close" />
                <p className="text-yellow-400 font-semibold">
                  Closed: <span className="text-white">Friday</span>
                </p>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3">
                <img className="h-7 w-7" src={img4} alt="location" />
                <p className="text-yellow-400 font-semibold text-left">
                  Location:{" "}
                  <span className="text-white">
                    {
                      [
                        "Bashundhara City, Dhaka",
                        "Jamuna Future Park, Dhaka",
                        "New Elephant Road, Dhaka",
                        "Mirpur 10, Dhaka",
                        "Dhanmondi 27, Dhaka",
                      ][index]
                    }
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stores;
