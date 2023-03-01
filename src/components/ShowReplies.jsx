import React, { useRef, useState } from "react";
import ChildComment from "./ChildComment";

const ShowReplies = (user) => {
  // console.log("childs:", user.user);
  //hook
  const [showreplies, setShowreplies] = useState(true);
  const repliesRef = useRef(null);
  const [visible, setVisible] = useState(3);
  //method
  const handleShowreplies = () => {
    setShowreplies((prevState) => true);
    setVisible((prevState) => prevState + 10);
    // repliesRef.current.style.display = "none";
  };
  return (
    <div className="ShowReplies text-left">
      {showreplies ? (
        <div className="childCommentBox">
          {user.user &&
            user.user.slice(0, visible).map((child) => {
              return (
                <ChildComment
                  key={child.id}
                  childId={child.userId}
                  childAva={child.ava}
                  childTitle={child.title}
                  childBody={child.body}
                ></ChildComment>
              );
            })}
        </div>
      ) : (
        ""
      )}
      {user.user.length - visible > 0 ? (
        <div
          className=" ml-10 cursor-pointer"
          ref={repliesRef}
          onClick={handleShowreplies}
        >
          <i className="fa fa-arrow-down mr-5"></i>
          {`Show replies ${user.user.length - visible}`}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ShowReplies;
