import React, { useEffect, useState } from "react";

const Chats = () => {
  const [chats, setChats] = useState({
    chat1: {
      userInfo: {
        displayName: "John Doe",
        photoURL: "https://randomuser.me/api/portraits/men/1.jpg"
      },
      lastMessage: {
        text: "Hey, how are you?"
      },
      date: new Date(2024, 7, 20).getTime()
    },
    chat2: {
      userInfo: {
        displayName: "Jane Smith",
        photoURL: "https://randomuser.me/api/portraits/women/2.jpg"
      },
      lastMessage: {
        text: "Let's catch up later!"
      },
      date: new Date(2024, 7, 21).getTime()
    },
    chat3: {
      userInfo: {
        displayName: "Alice Johnson",
        photoURL: "https://randomuser.me/api/portraits/women/3.jpg"
      },
      lastMessage: {
        text: "I sent you the files."
      },
      date: new Date(2024, 7, 19).getTime()
    }
  });

  const handleSelect = (userInfo) => {
    console.log("Selected user:", userInfo);
  };

  return (
    <div className="chats">
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <div
            className="userChat"
            key={chat[0]}
            onClick={() => handleSelect(chat[1].userInfo)}
          >
            <img src={chat[1].userInfo.photoURL} alt="" />
            <div className="userChatInfo">
              <span>{chat[1].userInfo.displayName}</span>
              <p>{chat[1].lastMessage?.text}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Chats;
