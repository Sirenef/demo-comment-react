import React from "react";

const FilterCmt = () => {
  return (
    <div className="border-b-2 mt-5 w-full text-left pb-[12.2px]">
      <a
        href=""
        className="mr-6 border-b-3 border-solid border-red-700 text-red-700 font-bold pb-13"
      >
        Quan tâm nhất
      </a>
      <a className="hover:text-red-700 text-gray-400" href="">
        Mới nhất
      </a>
    </div>
  );
};

export default FilterCmt;
