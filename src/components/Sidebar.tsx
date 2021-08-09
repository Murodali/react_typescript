import React from "react";
import Main from "./Main";

const Header: React.FC = () => {
  return (
    <div className="sidebar">
      <h2>Notes Application</h2>
      <div className="all">
        <h2>Show All</h2>
      </div>

      <div className="all">
        <h2>Show Completed</h2>
      </div>

      <div className="all">
        <h2>Show Ongoing</h2>
      </div>
    </div>
  );
};

export default Header;
