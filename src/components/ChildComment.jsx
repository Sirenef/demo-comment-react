import React from "react";
import ReadMoreReadLess from "./ReadMoreReadLess";

const ChildComment = ({ childId, childAva, childTitle, childBody }) => {
  return (
    <div className="mt-4 ml-10">
      <div className="relative">
        <div className="w-full">
          <div className=" h-full float-left  bg-gray-200  rounded-full solid mr-1 ">
            <a href="">
              <img src={childAva} alt="" className="rounded-full w-9 h-9" />
            </a>
          </div>
          <div className="pl-[5.5%] text-left">
            <div>
              <span className="mr-1 #0f172a">
                <a href="">
                  <b>{childTitle}</b>
                </a>
              </span>
              <ReadMoreReadLess limit={500}>{childBody}</ReadMoreReadLess>
            </div>
            <span></span>
            <div className="flex items-center gap-6 opacity-60 mt-3 text-sm mb-3 group">
              <div className="hover:text-red-700 cursor-pointer">
                <i className="fa fa-thumbs-up"></i>123
              </div>
              <div className="hover:text-red-700 cursor-pointer">Trả lời</div>
              <div className="hover:text-red-700 cursor-pointer">Chia sẻ</div>
              <div className="hover:text-red-700 cursor-pointer">6h trước</div>
              <div className="ml-auto group-hover:block hidden cursor-pointer">
                vi phạm
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildComment;
