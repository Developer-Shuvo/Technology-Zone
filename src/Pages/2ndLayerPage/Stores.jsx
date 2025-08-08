import img1 from "./Stores/app.png";
import img2 from "./Stores/clock.png?w=300&format=webp&quality=60";
import img3 from "./Stores/close.png";
import img4 from "./Stores/location.png?w=300&format=webp&quality=60";
import shop from "./Stores/shop.png?w=300&format=webp&quality=60";

const Stores = () => {
  return (
    <section class="bg-gradient-to-r from-cyan-800 to-sky-300">
      <div class="mx-auto grid max-w-lg gap-x-6 gap-y-20 px-4 py-32 md:max-w-screen-xl md:grid-cols-2 md:px-6 lg:grid-cols-3">
        <div>
          <h2 class="text-3xl lg:text-5xl  font-bold text-white">
            Explore Our Stores <br />
          </h2>
        </div>

        {/* 1 */}
        <div className="border-white/40 relative border-4 px-4 pt-14  pb-6 ">
          {/* Icon Box */}
          <div className="absolute -top-22  left-4 sm:left-6  rounded-xl px-4 text-white">
            <img className="h-26 w-26" src={shop} alt="shop" />
          </div>

          {/* Title */}
          <h1 className="mb-4 uppercase text-blue-950 font-bold text-base sm:text-lg md:text-2xl">
            Bashundhara City
          </h1>

          {/* Items */}
          <div className="space-y-2">
            {/* Phone */}
            <div className="flex items-center gap-4">
              <img
                className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10"
                src={img1}
                alt="phone"
              />
              <h1 className="text-sm sm:text-base md:text-lg lg:text-xl text-white">
                01617422764
              </h1>
            </div>

            {/* Open */}
            <div className="flex items-center gap-4">
              <img
                className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10"
                src={img2}
                alt="open"
              />
              <h1 className="text-sm sm:text-base md:text-lg lg:text-xl text-yellow-400">
                Open :{" "}
                <span className="text-white font-semibold">
                  8:00 AM to 9:00 PM
                </span>
              </h1>
            </div>

            {/* Close */}
            <div className="flex items-center gap-4">
              <img
                className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10"
                src={img3}
                alt="close"
              />
              <h1 className="text-sm sm:text-base md:text-lg lg:text-xl text-yellow-400">
                Closed :{" "}
                <span className="text-white font-semibold">Friday</span>
              </h1>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <img
                className="h-6 w-6 sm:h-6 sm:w-6 md:h-8 md:w-8 "
                src={img4}
                alt="location"
              />
              <h1 className="text-sm text-left sm:text-base md:text-lg lg:text-xl text-yellow-400">
                Location :{" "}
                <span className="text-white font-semibold">
                  Bashundhara City, Dhaka
                </span>
              </h1>
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className="border-white/40 relative border-4 px-4 pt-14  pb-6 ">
          {/* Icon Box */}
          <div className="absolute -top-22  left-4 sm:left-6  rounded-xl px-4 text-white">
            <img className="h-26 w-26" src={shop} alt="shop" />
          </div>

          {/* Title */}
          <h1 className="mb-4 uppercase text-blue-950 font-bold text-base sm:text-lg md:text-2xl">
            Bashundhara City
          </h1>

          {/* Items */}
          <div className="space-y-2">
            {/* Phone */}
            <div className="flex items-center gap-4">
              <img
                className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10"
                src={img1}
                alt="phone"
              />
              <h1 className="text-sm sm:text-base md:text-lg lg:text-xl text-white">
                01617422764
              </h1>
            </div>

            {/* Open */}
            <div className="flex items-center gap-4">
              <img
                className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10"
                src={img2}
                alt="open"
              />
              <h1 className="text-sm sm:text-base md:text-lg lg:text-xl text-yellow-400">
                Open :{" "}
                <span className="text-white font-semibold">
                  8:00 AM to 9:00 PM
                </span>
              </h1>
            </div>

            {/* Close */}
            <div className="flex items-center gap-4">
              <img
                className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10"
                src={img3}
                alt="close"
              />
              <h1 className="text-sm sm:text-base md:text-lg lg:text-xl text-yellow-400">
                Closed :{" "}
                <span className="text-white font-semibold">Friday</span>
              </h1>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <img
                className="h-6 w-6 sm:h-6 sm:w-6 md:h-8 md:w-8 "
                src={img4}
                alt="location"
              />
              <h1 className="text-sm text-left sm:text-base md:text-lg lg:text-xl text-yellow-400">
                Location :{" "}
                <span className="text-white font-semibold">
                  Bashundhara City, Dhaka
                </span>
              </h1>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="border-white/40 relative border-4 px-4 pt-14  pb-6 ">
          {/* Icon Box */}
          <div className="absolute -top-22  left-4 sm:left-6  rounded-xl px-4 text-white">
            <img className="h-26 w-26" src={shop} alt="shop" />
          </div>

          {/* Title */}
          <h1 className="mb-4 uppercase text-blue-950 font-bold text-base sm:text-lg md:text-2xl">
            Bashundhara City
          </h1>

          {/* Items */}
          <div className="space-y-2">
            {/* Phone */}
            <div className="flex items-center gap-4">
              <img
                className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10"
                src={img1}
                alt="phone"
              />
              <h1 className="text-sm sm:text-base md:text-lg lg:text-xl text-white">
                01617422764
              </h1>
            </div>

            {/* Open */}
            <div className="flex items-center gap-4">
              <img
                className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10"
                src={img2}
                alt="open"
              />
              <h1 className="text-sm sm:text-base md:text-lg lg:text-xl text-yellow-400">
                Open :{" "}
                <span className="text-white font-semibold">
                  8:00 AM to 9:00 PM
                </span>
              </h1>
            </div>

            {/* Close */}
            <div className="flex items-center gap-4">
              <img
                className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10"
                src={img3}
                alt="close"
              />
              <h1 className="text-sm sm:text-base md:text-lg lg:text-xl text-yellow-400">
                Closed :{" "}
                <span className="text-white font-semibold">Friday</span>
              </h1>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <img
                className="h-6 w-6 sm:h-6 sm:w-6 md:h-8 md:w-8 "
                src={img4}
                alt="location"
              />
              <h1 className="text-sm text-left sm:text-base md:text-lg lg:text-xl text-yellow-400">
                Location :{" "}
                <span className="text-white font-semibold">
                  Bashundhara City, Dhaka
                </span>
              </h1>
            </div>
          </div>
        </div>
        {/* 4 */}
        <div className="border-white/40 relative border-4 px-4 pt-14  pb-6 ">
          {/* Icon Box */}
          <div className="absolute -top-22  left-4 sm:left-6  rounded-xl px-4 text-white">
            <img className="h-26 w-26" src={shop} alt="shop" />
          </div>

          {/* Title */}
          <h1 className="mb-4 uppercase text-blue-950 font-bold text-base sm:text-lg md:text-2xl">
            Bashundhara City
          </h1>

          {/* Items */}
          <div className="space-y-2">
            {/* Phone */}
            <div className="flex items-center gap-4">
              <img
                className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10"
                src={img1}
                alt="phone"
              />
              <h1 className="text-sm sm:text-base md:text-lg lg:text-xl text-white">
                01617422764
              </h1>
            </div>

            {/* Open */}
            <div className="flex items-center gap-4">
              <img
                className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10"
                src={img2}
                alt="open"
              />
              <h1 className="text-sm sm:text-base md:text-lg lg:text-xl text-yellow-400">
                Open :{" "}
                <span className="text-white font-semibold">
                  8:00 AM to 9:00 PM
                </span>
              </h1>
            </div>

            {/* Close */}
            <div className="flex items-center gap-4">
              <img
                className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10"
                src={img3}
                alt="close"
              />
              <h1 className="text-sm sm:text-base md:text-lg lg:text-xl text-yellow-400">
                Closed :{" "}
                <span className="text-white font-semibold">Friday</span>
              </h1>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <img
                className="h-6 w-6 sm:h-6 sm:w-6 md:h-8 md:w-8 "
                src={img4}
                alt="location"
              />
              <h1 className="text-sm text-left sm:text-base md:text-lg lg:text-xl text-yellow-400">
                Location :{" "}
                <span className="text-white font-semibold">
                  Bashundhara City, Dhaka
                </span>
              </h1>
            </div>
          </div>
        </div>
        {/* 5 */}
        <div className="border-white/40 relative border-4 px-4 pt-14  pb-6 ">
          {/* Icon Box */}
          <div className="absolute -top-22  left-4 sm:left-6  rounded-xl px-4 text-white">
            <img className="h-26 w-26" src={shop} alt="shop" />
          </div>

          {/* Title */}
          <h1 className="mb-4 uppercase text-blue-950 font-bold text-base sm:text-lg md:text-2xl">
            Bashundhara City
          </h1>

          {/* Items */}
          <div className="space-y-2">
            {/* Phone */}
            <div className="flex items-center gap-4">
              <img
                className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10"
                src={img1}
                alt="phone"
              />
              <h1 className="text-sm sm:text-base md:text-lg lg:text-xl text-white">
                01617422764
              </h1>
            </div>

            {/* Open */}
            <div className="flex items-center gap-4">
              <img
                className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10"
                src={img2}
                alt="open"
              />
              <h1 className="text-sm sm:text-base md:text-lg lg:text-xl text-yellow-400">
                Open :{" "}
                <span className="text-white font-semibold">
                  8:00 AM to 9:00 PM
                </span>
              </h1>
            </div>

            {/* Close */}
            <div className="flex items-center gap-4">
              <img
                className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10"
                src={img3}
                alt="close"
              />
              <h1 className="text-sm sm:text-base md:text-lg lg:text-xl text-yellow-400">
                Closed :{" "}
                <span className="text-white font-semibold">Friday</span>
              </h1>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <img
                className="h-6 w-6 sm:h-6 sm:w-6 md:h-8 md:w-8 "
                src={img4}
                alt="location"
              />
              <h1 className="text-sm text-left sm:text-base md:text-lg lg:text-xl text-yellow-400">
                Location :{" "}
                <span className="text-white font-semibold">
                  Bashundhara City, Dhaka
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stores;
