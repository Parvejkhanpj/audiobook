import React from "react";
import "./footer.css";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { BiLibrary } from "react-icons/bi";
const HomeFooter = () => {
  return (
    <div className="footer">
      <div class="footer-wrapper flex ">
        <div className="footer-icon-wraper">
          <AiOutlineHome className="icon" />
          <div className="icon-text">Home</div>
        </div>
        <div className="footer-icon-wraper">
          <AiOutlineSearch className="icon" />
          <div className="icon-text">Search</div>
        </div>
        <div className="footer-icon-wraper">
          <BiLibrary className="icon" />
          <div className="icon-text">Library</div>
        </div>
      </div>
    </div>
  );
};

export default HomeFooter;
