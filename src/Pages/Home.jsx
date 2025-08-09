// Flash Sale page connect
import FlashSale from "../Pages/FlashSale";
import img1 from "../assets/images/categories/iphone.jpg?w=300&format=webp&quality=80";
import img2 from "../assets/images/categories/tablet.jpg?w=300&format=webp&quality=80";
import img3 from "../assets/images/categories/mac.jpg?w=300&format=webp&quality=80";
import img4 from "../assets/images/categories/laptop.jpg?w=300&format=webp&quality=80";
import img5 from "../assets/images/categories/smartwatch.jpg?w=300&format=webp&quality=80";
import img6 from "../assets/images/categories/monitor.jpg?w=300&format=webp&quality=80";
import img7 from "../assets/images/categories/headphone.jpg?w=300&format=webp&quality=80";
import img8 from "../assets/images/categories/accessories.jpg?w=300&format=webp&quality=80";
// ____________________________________________

import FavoriteBrands from "./FavoriteBrands";
import NewArrival from "./NewArrival";
import Shop from "./Shop";
import Banner from "./Banner";

const Home = () => {
  return (
    <>
      {/* ________________Categories Cart____________________ */}
      <section className=" px-4 ">
        <div className="mx-auto max-w-screen-xl px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 justify-center items-center text-center">
          {/* Example Card 1 */}
          <a
            className="group bg-white border border-gray-200 shadow-md hover:shadow-lg
             hover:shadow-[#A4CCD9] rounded-lg 
              transition-shadow duration-300 flex flex-col items-center "
          >
            {/* Image */}
            <div className="flex justify-center items-center h-28 w-full overflow-hidden">
              <img
                className="object-contain h-24 transition-transform duration-700 ease-in-out group-hover:scale-160"
                src={img1}
                alt="Product"
              />
            </div>

            {/* Title */}
            <h1 className="mt-2 mb-3 text-center text-gray-700 font-semibold text-sm ">
              iPhone
            </h1>
          </a>

          {/* Example Card 2 */}
          <a
            className="group bg-white border border-gray-200 shadow-md hover:shadow-lg
             hover:shadow-[#A4CCD9] rounded-lg 
              transition-shadow duration-300 flex flex-col items-center "
          >
            {/* Image */}
            <div className="flex justify-center items-center h-28 w-full overflow-hidden">
              <img
                className="object-contain h-24 transition-transform duration-700 ease-in-out group-hover:scale-160"
                src={img2}
                alt="Product"
              />
            </div>

            {/* Title */}
            <h1 className="mt-2 mb-3 text-center text-gray-700 font-semibold text-sm ">
              Tablet
            </h1>
          </a>
          {/* Example Card 3*/}
          <a
            className="group bg-white border border-gray-200 shadow-md hover:shadow-lg
             hover:shadow-[#A4CCD9] rounded-lg 
              transition-shadow duration-300 flex flex-col items-center "
          >
            {/* Image */}
            <div className="flex justify-center items-center h-28 w-full overflow-hidden">
              <img
                className="object-contain h-24 transition-transform duration-700 ease-in-out group-hover:scale-160"
                src={img3}
                alt="Product"
              />
            </div>

            {/* Title */}
            <h1 className="mt-2 mb-3 text-center text-gray-700 font-semibold text-sm ">
              Mac
            </h1>
          </a>
          {/* Example Card 4 */}
          <a
            className="group bg-white border border-gray-200 shadow-md hover:shadow-lg
             hover:shadow-[#A4CCD9] rounded-lg 
              transition-shadow duration-300 flex flex-col items-center "
          >
            {/* Image */}
            <div className="flex justify-center items-center h-28 w-full overflow-hidden">
              <img
                className="object-contain h-24 transition-transform duration-700 ease-in-out group-hover:scale-160"
                src={img4}
                alt="Product"
              />
            </div>

            {/* Title */}
            <h1 className="mt-2 mb-3 text-center text-gray-700 font-semibold text-sm ">
              Laptop
            </h1>
          </a>
          {/* Example Card 5*/}
          <a
            className="group bg-white border border-gray-200 shadow-md hover:shadow-lg
             hover:shadow-[#A4CCD9] rounded-lg 
              transition-shadow duration-300 flex flex-col items-center "
          >
            {/* Image */}
            <div className="flex justify-center items-center h-28 w-full overflow-hidden">
              <img
                className="object-contain h-24 transition-transform duration-700 ease-in-out group-hover:scale-160"
                src={img5}
                alt="Product"
              />
            </div>

            {/* Title */}
            <h1 className="mt-2 mb-3 text-center text-gray-700 font-semibold text-sm ">
              Smart Watch
            </h1>
          </a>
          {/* Example Card 6*/}
          <a
            className="group bg-white border border-gray-200 shadow-md hover:shadow-lg
             hover:shadow-[#A4CCD9] rounded-lg 
              transition-shadow duration-300 flex flex-col items-center "
          >
            {/* Image */}
            <div className="flex justify-center items-center h-28 w-full overflow-hidden">
              <img
                className="object-contain h-24 transition-transform duration-700 ease-in-out group-hover:scale-160"
                src={img6}
                alt="Product"
              />
            </div>

            {/* Title */}
            <h1 className="mt-2 mb-3 text-center text-gray-700 font-semibold text-sm ">
              Monitor
            </h1>
          </a>
          {/* Example Card 7*/}
          <a
            className="group bg-white border border-gray-200 shadow-md hover:shadow-lg
             hover:shadow-[#A4CCD9] rounded-lg 
              transition-shadow duration-300 flex flex-col items-center "
          >
            {/* Image */}
            <div className="flex justify-center items-center h-28 w-full overflow-hidden">
              <img
                className="object-contain h-24 transition-transform duration-700 ease-in-out group-hover:scale-160"
                src={img7}
                alt="Product"
              />
            </div>

            {/* Title */}
            <h1 className="mt-2 mb-3 text-center text-gray-700 font-semibold text-sm ">
              Headphone
            </h1>
          </a>
          {/* Example Card 8 */}
          <a
            className="group bg-white border border-gray-200 shadow-md hover:shadow-lg
             hover:shadow-[#A4CCD9] rounded-lg 
              transition-shadow duration-300 flex flex-col items-center "
          >
            {/* Image */}
            <div className="flex justify-center items-center h-28 w-full overflow-hidden">
              <img
                className="object-contain h-24 transition-transform duration-700 ease-in-out group-hover:scale-160"
                src={img8}
                alt="Product"
              />
            </div>

            {/* Title */}
            <h1 className="mt-2 mb-3 text-center text-gray-700 font-semibold text-sm ">
              Accessories
            </h1>
          </a>
        </div>
      </section>

      {/* __________________Banner______________________ */}
   <Banner/>

      {/* ______________Flash Sale____________   এক্সট্রা কম্পোনেন্ট বানিয়ে এখানে সরাসরি ইমপোরট করা হয়েছে */}
      <FlashSale />
      {/* ___________________New Arrival___________________________ইমপোর্ট হয়েছে!! */}
      <NewArrival />

      {/* ________________Shop_________________ */}
      <Shop />

      {/* _______________Favorite Brands_______________ */}
      <FavoriteBrands />
    </>
  );
};

export default Home;
