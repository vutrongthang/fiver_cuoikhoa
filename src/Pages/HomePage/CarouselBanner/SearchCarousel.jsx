import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchCarousel() {
  const navigate = useNavigate();
  const [valueSearch, setValueSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setValueSearch("");
  };
  return (
    <div className="w-1/2  absolute top-1/3 left-14 ">
      <p className="text-[32px] font-semibold text-white">
        Find the perfect freelance services for your business
      </p>
      <form className="my-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none "
            placeholder={`Try "building mobile app"`}
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 duration-300"
          >
            Search
          </button>
        </div>
      </form>

      <div className="text-white d-none d-lg-block flex items-center space-x-2">
        <span className="mr-2">Popular:</span>
        <button className="bg-transparent hover:bg-white text-slate-50  hover:text-black py-1 px-2 border border-white hover:border-transparent rounded-full duration-300">
          Website Design
        </button>{" "}
        <button className="bg-transparent hover:bg-white text-slate-50  hover:text-black py-1 px-2 border border-white hover:border-transparent rounded-full duration-300">
          WordPress
        </button>{" "}
        <button className="bg-transparent hover:bg-white text-slate-50  hover:text-black py-1 px-2 border border-white hover:border-transparent rounded-full duration-300">
          Logo Design
        </button>{" "}
        <button className="bg-transparent hover:bg-white text-slate-50  hover:text-black py-1 px-2 border border-white hover:border-transparent rounded-full duration-300">
          NFT Art
        </button>{" "}
      </div>
    </div>
  );
}

export default SearchCarousel;
