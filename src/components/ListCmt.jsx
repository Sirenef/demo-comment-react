import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/slice/users";
import ChildComment from "./ChildComment";
import Comments from "./Comments";

const ListCmt = () => {
  //hook
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.users);

  //variable
  const users = selector.users;
  const childCmt = users.filter((user) => !!user.ParentID === true);
  // const parentCmt = users.filter((user) => !!user.ParentID === false);
  const parentCmt = users.filter(
    (user) => !!user.replies === true || !!user.ParentID === false
  );
  const newUsers = parentCmt.map((user) => {
    // Tìm ra những con của user
    const child = childCmt.filter((cmt) => cmt.ParentID === user.id);
    return {
      ...user,
      childCmt: child,
    };
  });
  const [visible, setVisible] = useState(10);
  const results = newUsers.filter((user) => !!user.ParentID === false);

  const showMoreUsers = () => {
    setVisible((prevValue) => prevValue + 10);
  };
  //UseEffect
  useEffect(() => {
    //side effect
    dispatch(getUsers());
  }, []);
  // console.log("lan 1:", users);
  console.log("chilcmt", childCmt);
  console.log("Parentcmt", parentCmt);
  // console.log("result", results);
  console.log("Parent+Parent's child", newUsers);
  return (
    <div className="box_comment">
      {newUsers &&
        newUsers.slice(0, visible).map((user) => {
          if (user.ParentID == null) {
            return (
              <Comments
                key={user.id}
                userId={user.userId}
                userAva={user.ava}
                userTitle={user.title}
                userBody={user.body}
                user={user}
              ></Comments>
            );
          }
        })}
      {visible < newUsers.length ? (
        <button onClick={showMoreUsers}>Load More</button>
      ) : (
        ""
      )}
    </div>
  );
};

export default ListCmt;
