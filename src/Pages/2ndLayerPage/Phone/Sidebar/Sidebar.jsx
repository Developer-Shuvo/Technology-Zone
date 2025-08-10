import React, { useState } from "react";

const Sidebar = () => {
  const minLimit = 0;
  const maxLimit = 200000;

  const [minPrice, setMinPrice] = useState(minLimit);
  const [maxPrice, setMaxPrice] = useState(maxLimit);
  const [sort, setSort] = useState("Price");

  // Min slider cannot go above maxPrice
  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxPrice);
    setMinPrice(value);
  };

  // Max slider cannot go below minPrice
  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minPrice);
    setMaxPrice(value);
  };

  // Calculate range percentages for styling the selected range track
  const rangePercentMin = ((minPrice - minLimit) / (maxLimit - minLimit)) * 100;
  const rangePercentMax = ((maxPrice - minLimit) / (maxLimit - minLimit)) * 100;

  //   _____________Display Type______________________
  const [showMore, setShowMore] = useState(false);

  const defaultTypes = ["AMOLED", "Analog-Digital", "LCD", "LED"];
  const extraTypes = ["OLED", "TFT", "IPS", "Retina", "MicroLED", "Plasma"];


  const types = showMore ? [...defaultTypes, ...extraTypes] : defaultTypes;
  return (
    <div>
      <div class="w-screen ">
        <div class=" w-80 pb-10">
          <div
            class="flex h-full flex-grow flex-col overflow-y-auto
           rounded-br-lg rounded-tr-lg bg-white pt-5 shadow-md "
          >
            {/* Price Range Field*/}
            <div className="space-y-4 p-4 max-w-sm mx-auto ">
              {/* ________Price Range_______ */}
              <div className="border border-gray-200 rounded shadow-md bg-white">
                <div className="flex justify-between items-center px-4 py-2 border-b border-gray-200">
                  <h2 className="font-bold text-gray-700">Price Range</h2>
                  <button className="text-lg">−</button>
                </div>
                <div className="p-4">
                  {/* Range Slider Container */}
                  <div className="relative w-full h-4 flex items-center">
                    {/* Track Background */}
                    <div className="absolute left-0 right-0 h-1 bg-gray-300 rounded "></div>

                    {/* Selected Range Highlight */}
                    <div
                      className="absolute h-1 bg-lime-600 rounded"
                      style={{
                        left: `${rangePercentMin}%`,
                        width: `${rangePercentMax - rangePercentMin}%`,
                      }}
                    ></div>

                    {/* Min Slider */}
                    <input
                      type="range"
                      min={minLimit}
                      max={maxLimit}
                      value={minPrice}
                      onChange={handleMinChange}
                      className="pointer-events-auto w-full absolute appearance-none bg-transparent"
                      style={{ zIndex: 3 }}
                    />

                    {/* Max Slider */}
                    <input
                      type="range"
                      min={minLimit}
                      max={maxLimit}
                      value={maxPrice}
                      onChange={handleMaxChange}
                      className="pointer-events-auto w-full absolute appearance-none bg-transparent"
                      style={{ zIndex: 4 }}
                    />
                  </div>

                  {/* Number inputs */}
                  <div className="flex gap-4 mt-4">
                    <input
                      type="number"
                      min={minLimit}
                      max={maxLimit}
                      value={minPrice}
                      onChange={handleMinChange}
                      className="w-1/2 border-gray-400 border rounded px-2 py-1"
                    />
                    <input
                      type="number"
                      min={minLimit}
                      max={maxLimit}
                      value={maxPrice}
                      onChange={handleMaxChange}
                      className="w-1/2 border border-gray-400 rounded px-2 py-1"
                    />
                  </div>
                </div>
              </div>

              {/* _______Sort________ */}
              <div
                className="border rounded border-gray-200 shadow
               bg-white"
              >
                <div className="flex justify-between items-center px-4 py-2 border-b border-gray-200">
                  <h2 className="font-bold text-gray-800">Sort</h2>
                  <button className="text-lg">−</button>
                </div>
                <div className="p-4 text-gray-600">
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="w-full border rounded px-2 py-1"
                  >
                    <option>Price</option>
                    <option>Low to High</option>
                    <option>High to low</option>
                  </select>
                </div>
              </div>

              <style>{`
                        input[type=range] {
                        -webkit-appearance: none;
                        height: 30px;
                        background: transparent;
                        margin: 0;
                        }
                        input[type=range]:focus {
                        outline: none;
                        }
                        /* Track */
                        input[type=range]::-webkit-slider-runnable-track {
                        height: 8px;
                        background: transparent;
                        }
                        input[type=range]::-moz-range-track {
                        height: 8px;
                        background: transparent;
                        }
                        /* Thumb for Min Slider */
                        input[type=range]:nth-of-type(1)::-webkit-slider-thumb {
                        -webkit-appearance: none;
                        appearance: none;
                        width: 20px;
                        height: 20px;
                        background: #f97316; /* orange-500 */
                        cursor: pointer;
                        border-radius: 50%;
                        border: none;
                        margin-top: -6px;
                        position: relative;
                        z-index: 5;
                        }
                        input[type=range]:nth-of-type(1)::-moz-range-thumb {
                        width: 20px;
                        height: 20px;
                        background: #f97316;
                        cursor: pointer;
                        border-radius: 50%;
                        border: none;
                        position: relative;
                        z-index: 5;
                        }
                        /* Thumb for Max Slider */
                        input[type=range]:nth-of-type(2)::-webkit-slider-thumb {
                        -webkit-appearance: none;
                        appearance: none;
                        width: 20px;
                        height: 20px;
                        background: #ea580c; /* orange-600 */
                        cursor: pointer;
                        border-radius: 50%;
                        border: none;
                        margin-top: -6px;
                        position: relative;
                        z-index: 6;
                        }
                        input[type=range]:nth-of-type(2)::-moz-range-thumb {
                        width: 20px;
                        height: 20px;
                        background: #ea580c;
                        cursor: pointer;
                        border-radius: 50%;
                        border: none;
                        position: relative;
                        z-index: 6;
                        }
               `}</style>
            </div>
            {/* ____________Display Type______________ */}
            <div className="space-y-4 p-4 max-w-sm mx-auto ">
              <div className="border border-gray-200 rounded shadow p-4  w-68 bg-white ">
                {/* Header */}
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold">Display Type</h3>
                  <button className="text-lg leading-none">−</button>
                </div>

                {/* Checkbox List */}
                <div className="flex flex-col gap-2 mb-3">
                  {types.map((type) => (
                    <label
                      key={type}
                      className="inline-flex items-center gap-2 cursor-pointer select-none"
                    >
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-gray-700 rounded"
                      />
                      <span className="text-sm">{type}</span>
                    </label>
                  ))}
                </div>

                {/* See More Button */}
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="text-xs font-semibold border border-gray-300 rounded-full px-4 py-1 hover:bg-gray-100 transition"
                >
                  {showMore ? "SEE LESS" : "SEE MORE"}
                </button>
              </div>
            </div>
            {/* ____________Ram______________ */}
            <div className="space-y-4 p-4 max-w-sm mx-auto ">
              <div className="border border-gray-200 rounded shadow p-4  w-68 bg-white ">
                {/* Header */}
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold">Ram</h3>
                  <button className="text-lg leading-none">−</button>
                </div>

                {/* Checkbox List */}
                <div className="flex flex-col gap-2 mb-3">
                  {types.map((type) => (
                    <label
                      key={type}
                      className="inline-flex items-center gap-2 cursor-pointer select-none"
                    >
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-gray-700 rounded"
                      />
                      <span className="text-sm">{type}</span>
                    </label>
                  ))}
                </div>

                {/* See More Button */}
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="text-xs font-semibold border border-gray-300 rounded-full px-4 py-1 hover:bg-gray-100 transition"
                >
                  {showMore ? "SEE LESS" : "SEE MORE"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
