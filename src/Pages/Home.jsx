
import img1 from "../assets/images/1.jpg";
import img3 from "../assets/images/3.jpg";
import img4 from "../assets/images/4.jpg";
import img5 from "../assets/images/5.jpg";
import img6 from "../assets/images/6.jpg";
import img7 from "../assets/images/7.jpg";
import img8 from "../assets/images/8.jpg";

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
      <section className="max-w-[1300px] mx-auto px-6 py-24">
        <div className="grid grid-cols-3 gap-3">
          {/* Image 1 (Small) */}
          <div className="h-52">
            <img
              src={img6}
              alt="Banner 1"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Image 2 (Big) */}
          <div className="h-64">
            <img
              src={img1}
              alt="Banner 2"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Image 3 (Small) */}
          <div className="h-52">
            <img
              src={img3}
              alt="Banner 3"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
