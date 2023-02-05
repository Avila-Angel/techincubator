import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Createpost from "../CreatePost/CreatePost";

function Main() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <Createpost />
      </div>
    </div>
  );
}

export default Main;
