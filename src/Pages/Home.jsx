// Flash Sale page connect
import FlashSale from "../Pages/FlashSale";
import img1 from "../assets/images/1.jpg?w=300&format=webp&quality=80";
import img3 from "../assets/images/3.jpg?w=300&format=webp&quality=80";
import img4 from "../assets/images/4.jpg?w=300&format=webp&quality=80";
import img5 from "../assets/images/5.jpg?w=300&format=webp&quality=80";
import img6 from "../assets/images/6.jpg?w=300&format=webp&quality=80";
import img7 from "../assets/images/7.jpg?w=300&format=webp&quality=80";
import img8 from "../assets/images/8.jpg?w=300&format=webp&quality=80";
// ____________________________________________
import banner5 from "../assets/images/banner-image/banner-5.jpg?w=800&format=webp&quality=75";
import banner6 from "../assets/images/banner-image/banner-6.jpg?w=800&format=webp&quality=75";
import banner7 from "../assets/images/banner-image/banner-7.jpg?w=800&format=webp&quality=75";
import FavoriteBrands from "./FavoriteBrands";
import NewArrival from "./NewArrival";
import Shop from "./Shop";

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
              Laptop
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
                src={img3}
                alt="Product"
              />
            </div>

            {/* Title */}
            <h1 className="mt-2 mb-3 text-center text-gray-700 font-semibold text-sm ">
              Laptop
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
                src={img4}
                alt="Product"
              />
            </div>

            {/* Title */}
            <h1 className="mt-2 mb-3 text-center text-gray-700 font-semibold text-sm ">
              Laptop
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
                src={img5}
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
                src={img6}
                alt="Product"
              />
            </div>

            {/* Title */}
            <h1 className="mt-2 mb-3 text-center text-gray-700 font-semibold text-sm ">
              Laptop
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
                src={img7}
                alt="Product"
              />
            </div>

            {/* Title */}
            <h1 className="mt-2 mb-3 text-center text-gray-700 font-semibold text-sm ">
              Laptop
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
                src={img8}
                alt="Product"
              />
            </div>

            {/* Title */}
            <h1 className="mt-2 mb-3 text-center text-gray-700 font-semibold text-sm ">
              Laptop
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
                src={img1}
                alt="Product"
              />
            </div>

            {/* Title */}
            <h1 className="mt-2 mb-3 text-center text-gray-700 font-semibold text-sm ">
              Laptop
            </h1>
          </a>
        </div>
      </section>

      {/* __________________Banner______________________ */}
      <section className="max-w-[1300px] mx-auto py-20 px-4 flex items-center justify-center text-center ">
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* Image 1 (Smaller width) */}
          <div className="col-span-1 md:col-span-1 h-[320px]">
            <img
              src={banner5}
              alt="Banner 1"
              className="w-[300px] lg:w-full xl:w-full flex items-center h-full object-cover rounded-lg shadow-lg 
                         transition-all duration-300 ease-in-out 
                          transform hover:scale-110 hover:-rotate-2 
                           hover:shadow-2xl hover:shadow-purple-500"
            />
          </div>

          {/* Image 2 (Big width in medium and above) */}
          <div className="col-span-1 sm:col-span-2 md:col-span-2 h-[320px]">
            <img
              src={banner6}
              alt="Banner 2"
              className="w-[300px] lg:w-full xl:w-full flex items-center h-full object-cover rounded-lg shadow-lg 
               transform transition-transform duration-500 hover:scale-125 hover:rotate-0
                hover:shadow-2xl hover:shadow-cyan-800"
            />
          </div>

          {/* Image 3 (Smaller width) */}
          <div className="col-span-1 md:col-span-1 h-[320px]">
            <img
              src={banner7}
              alt="Banner 3"
              className="w-[300px] lg:w-full xl:w-full flex items-center h-full object-cover rounded-lg shadow-lg 
                         transition-all duration-300 ease-in-out 
                          transform hover:scale-110 hover:rotate-2 
                           hover:shadow-2xl hover:shadow-[#113F67]"
            />
          </div>
        </div>
      </section>

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
