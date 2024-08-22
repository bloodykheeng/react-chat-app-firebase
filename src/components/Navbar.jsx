import React, { useContext } from "react";

const Navbar = () => {
  let currentUser = {};
  return (
    <div className="navbar">
      <span className="logo">Lama Chat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => {}}>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
