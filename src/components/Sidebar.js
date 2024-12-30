// src/components/Sidebar.js
import React from "react";
import "./Sidebar.css";

const Sidebar = ({ searches }) => {
  return (
    <div className="sidebar">
      <h2>Available Credits</h2>
      <div className="credits">3</div>

      <h3>Explore</h3>
      <div className="search-list">
        {searches.length > 0 ? (
           
          searches.map((search, index) => (
            <div key={index} className="search-item">
              {search}
            </div>
          ))
        ) : (
          <div className="no-searches">No recent searches</div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
