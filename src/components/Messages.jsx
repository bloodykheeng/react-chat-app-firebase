import React, { useContext, useEffect, useState } from "react";

import Message from "./Message";

const Messages = () => {
  const sampleMessages = [
    {
      id: "1",
      senderId: "user_1",
      text: "Hey, how's it going?",
      img: null // No image for this message
    },
    {
      id: "2",
      text: "I'm doing well, thanks! How about you?",
      senderId: "67890", // Other user's ID
      img: null
    },
    {
      id: "3",
      text: "Here's a picture from my trip.",
      senderId: "12345", // Current user's ID
      img: "https://example.com/trip.jpg" // Sample image URL
    },
    {
      id: "4",
      text: "Wow, that looks amazing!",
      senderId: "67890",
      img: null
    }
  ];
  const [messages, setMessages] = useState(sampleMessages);

  console.log(messages);

  return (
    <div className="messages">
      {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}
    </div>
  );
};

export default Messages;
