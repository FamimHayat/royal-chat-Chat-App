import React from "react";

const SearchBar = () => {
  return (
    <form className="form w-full relative my-3 mx-2">
      <button className="absolute left-2 -translate-y-1/2 top-1/2 p-1">
        <svg
          width={17}
          height={16}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-labelledby="search"
          className="w-5 h-5 text-stone-200 mr-3 inline-block"
        >
          <path
            d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
            stroke="currentColor"
            strokeWidth="1.333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <input
        className="input rounded-full w-full px-8 py-3 border-2 bg-[#2b2b2b] border-transparent focus:outline-none  focus:border-stone-300 placeholder-stone-400 transition-all duration-300 shadow-[inset_2px_5px_10px_rgb(5,5,5)] text-white font-textFont"
        placeholder="Search..."
        type="text"
      />
      <button
        type="reset"
        className="absolute right-3 -translate-y-1/2 top-1/2 p-1 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-stone-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </form>
  );
};

export default SearchBar;
