import React from "react";

const CmtField = () => {
  return (
    <form className=" w-700 font-merriweather">
      <div className="">
        <p className="float-left font-bold text-18 mb-5 font-lg ">
          Ý kiến <span className="font-thin">(97)</span>
        </p>
      </div>
      <div className=" mt-10 relative">
        <input
          type="text"
          name="username"
          placeholder="Ý kiến của bạn"
          className="w-[100%] p-4  h-56  border-2 border-solid font-xs "
        />
        <i className="fa-regular fa-face-smile absolute right-3 top-[65%]"></i>
      </div>
    </form>
  );
};

export default CmtField;
