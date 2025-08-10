import img1 from "../assets/images/services/customer-service.png";
import img2 from "../assets/images/services/gift.png";
import img3 from "../assets/images/services/delivery-bike.png";
import img4 from "../assets/images/services/credit-card.png";
import img5 from "../assets/images/services/genuine.png";
import img6 from "../assets/images/services/certified.png";

const Companies = [
  { name: "Samsung", image: "https://logo.clearbit.com/samsung.com" },
  { name: "Sony", image: "https://logo.clearbit.com/sony.com" },
  { name: "LG", image: "https://logo.clearbit.com/lg.com" },
  { name: "Panasonic", image: "https://logo.clearbit.com/panasonic.com" },
  { name: "Philips", image: "https://logo.clearbit.com/philips.com" },
  { name: "Toshiba", image: "https://logo.clearbit.com/toshiba.com" },
  { name: "Intel", image: "https://logo.clearbit.com/intel.com" },
  { name: "AMD", image: "https://logo.clearbit.com/amd.com" },
  { name: "Nvidia", image: "https://logo.clearbit.com/nvidia.com" },
  { name: "Asus", image: "https://logo.clearbit.com/asus.com" },
  { name: "Acer", image: "https://logo.clearbit.com/acer.com" },
  { name: "Lenovo", image: "https://logo.clearbit.com/lenovo.com" },
];

const FavoriteBrands = () => {
  return (
    <>
      <div className="bg-[#3D365C] mt-30 ">
        {/* Brands */}
        <div className="max-w-[1400px]  mx-auto">
          <div className="py-16 lg:py-40 px-4 pl-4 sm:px-6 md:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-20 text-white">
            {/* Left Side Text */}
            <div className="col-span-1 flex flex-col pl-6 justify-center items-center text-center lg:items-start lg:text-left">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl text-white font-bold">
                Shop Products from Your Favorite Brands
              </h1>
              <p className="text-gray-300 text-lg font-semibold mt-8">
                Shop top-quality products from your favorite brands. Find
                trends, essentials, and more in our curated collection. Start
                shopping today!
              </p>
            </div>

            {/* Brands  */}
            <div className="col-span-2 flex justify-center items-center">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {Companies.map((company, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32
                hover:shadow-md hover:shadow-purple-600 bg-white  
                text-gray-800 font-semibold text-center flex flex-col items-center justify-center 
                rounded-full transform transition-transform duration-700 hover:scale-110 
                hover:bg-lime-300 hover:text-gray-900"
                  >
                    <img
                      src={company.image}
                      alt={company.name}
                      className="w-8 h-8 mb-2 object-contain"
                    />
                    <span className="text-sm sm:text-base">{company.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service */}
      <div className="max-w-[1300px] mx-auto mb-50 px-4">
        <div className="border-gray-300  bg-white rounded-b-lg border-l border-r border-b shadow-xl">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 lg:gap-20 h-auto py-8">
            {/* 1 */}
            <div className="flex flex-col gap-2 justify-center items-center w-28">
              <img className="h-12 w-12" src={img1} alt="Online Support" />
              <h3 className="text-sm sm:text-base font-semibold text-gray-700 text-center lg:whitespace-nowrap">
                Online Support
              </h3>
            </div>

            {/* 2 */}
            <div className="flex flex-col gap-2 justify-center items-center w-28">
              <img className="h-12 w-12" src={img2} alt="Official Product" />
              <h3 className="text-sm sm:text-base font-semibold text-gray-700 text-center lg:whitespace-nowrap">
                Official Product
              </h3>
            </div>

            {/* 3 */}
            <div className="flex flex-col gap-2 justify-center items-center w-28">
              <img className="h-12 w-12" src={img3} alt="Fastest Delivery" />
              <h3 className="text-sm sm:text-base font-semibold text-gray-700 text-center lg:whitespace-nowrap">
                Fastest Delivery
              </h3>
            </div>

            {/* 4 */}
            <div className="flex flex-col gap-2 justify-center items-center w-28">
              <img className="h-12 w-12" src={img4} alt="Secure Payment" />
              <h3 className="text-sm sm:text-base font-semibold text-gray-700 text-center lg:whitespace-nowrap">
                Secure Payment
              </h3>
            </div>

            {/* 5 */}
            <div className="flex flex-col gap-2 justify-center items-center w-28">
              <img className="h-12 w-12" src={img5} alt="Genuine Product" />
              <h3 className="text-sm sm:text-base font-semibold text-gray-700 text-center lg:whitespace-nowrap">
                Genuine Product
              </h3>
            </div>

            {/* 6 */}
            <div className="flex flex-col gap-2 justify-center items-center w-28">
              <img className="h-12 w-12" src={img6} alt="ISO Certified" />
              <h3 className="text-sm sm:text-base font-semibold text-gray-700 text-center lg:whitespace-nowrap">
                ISO Certified
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavoriteBrands;
