// Flash Sale page connect
import FlashSale from "../Pages/FlashSale";
import img1 from "../assets/images/1.jpg";
import img3 from "../assets/images/3.jpg";
import img4 from "../assets/images/4.jpg";
import img5 from "../assets/images/5.jpg";
import img6 from "../assets/images/6.jpg";
import img7 from "../assets/images/7.jpg";
import img8 from "../assets/images/8.jpg";
// ____________________________________________
import banner5 from "../assets/images/banner-image/banner-5.jpg";
import banner6 from "../assets/images/banner-image/banner-6.jpg";
import banner7 from "../assets/images/banner-image/banner-7.jpg";
import NewArrival from "./NewArrival";
import Shop from "./Shop";

const Home = () => {
  return (
    <>
      {/* ________________Categories Cart____________________ */}
      <section className="">
        <div className="mx-auto grid max-w-screen-xl grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8 px-">
          {/* Example Card 1 */}
          <a
            className="group bg-white border border-gray-200 shadow-md hover:shadow-lg
             hover:shadow-cyan-200 rounded-lg 
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
             hover:shadow-cyan-200 rounded-lg 
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
             hover:shadow-cyan-200 rounded-lg 
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
             hover:shadow-cyan-200 rounded-lg 
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
             hover:shadow-cyan-200 rounded-lg 
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
             hover:shadow-cyan-200 rounded-lg 
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
             hover:shadow-cyan-200 rounded-lg 
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
             hover:shadow-cyan-200 rounded-lg 
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
      <section className="max-w-[1300px] mx-auto py-20">
        <div className="grid grid-cols-4 gap-2">
          {/* Image 1 (Smaller width) */}
          <div className="col-span-1 h-[320px]">
            <img
              src={banner5}
              alt="Banner 1"
              className="w-full h-full object-cover rounded-lg  shadow-lg 
                   transform transition-transform duration-500 hover:scale-110 hover:rotate-2 
                   hover:shadow-2xl"
            />
          </div>

          {/* Image 2 (Big width) */}
          <div className="col-span-2 h-[320px]">
            <img
              src={banner6}
              alt="Banner 2"
              className="w-full h-full object-cover rounded-lg shadow-lg 
                   transform transition-transform duration-500 hover:scale-110 hover:rotate-0
                   hover:shadow-2xl"
            />
          </div>

          {/* Image 3 (Smaller width) */}
          <div className="col-span-1 h-[320px]">
            <img
              src={banner7}
              alt="Banner 3"
              className="w-full h-full object-cover rounded-lg  shadow-lg
                   transform transition-transform duration-500 hover:scale-110 hover:-rotate-2
                   hover:shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ______________Flash Sale____________   এক্সট্রা কম্পোনেন্ট বানিয়ে এখানে সরাসরি ইমপোরট করা হয়েছে */}
      <FlashSale />
      {/* ___________________New Arrival___________________________ */}
      <NewArrival/>

      {/* ________________Shop_________________ */}
      <Shop/>
    </>
  );
};

export default Home;
