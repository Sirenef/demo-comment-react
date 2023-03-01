import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReadMoreReadLess from "./ReadMoreReadLess";
import ShowReplies from "./ShowReplies";

const Comments = ({ userId, userAva, userTitle, userBody, user }) => {
  //   console.log(body);
  return (
    <div className="mt-4 ">
      <div className="relative">
        <div className="w-full">
          <div className=" h-full float-left  bg-gray-200  rounded-full solid mr-1 ">
            <a href="">
              <img src={userAva} alt="" className="rounded-full w-9 h-9" />
            </a>
          </div>
          <div className="pl-[5.5%] text-left">
            <div>
              <span className="mr-1 #0f172a">
                <a href="">
                  <b>{userTitle}</b>
                </a>
              </span>
              <ReadMoreReadLess limit={500}>{userBody}</ReadMoreReadLess>
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
      <ShowReplies user={user.childCmt}></ShowReplies>
    </div>
  );
};

export default Comments;
