import React, { useContext, useEffect, useRef } from "react";

const Message = ({ message }) => {
  const currentUser = {
    uid: "user_1",
    displayName: "John Doe",
    email: "johndoe@example.com",
    photoURL: "https://randomuser.me/api/portraits/men/1.jpg"
  };

  const data = {
    user: {
      uid: "user_2",
      displayName: "Jane Smith",
      email: "janesmith@example.com",
      photoURL: "https://randomuser.me/api/portraits/women/2.jpg"
    }
  };

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`message ${message?.senderId === currentUser?.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message?.senderId === currentUser?.uid
              ? currentUser?.photoURL
              : data?.user?.photoURL
          }
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>{message?.text}</p>
        {message?.img && <img src={message?.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
