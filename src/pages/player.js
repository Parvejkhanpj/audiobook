import React from "react";
import { BiChevronDown, BiDotsHorizontalRounded } from "react-icons/bi";
import "./player.css";
const Player = () => {
  return (
    <div className="max-width">
      <div className="player-header flex ">
        <BiChevronDown className="icon" />
        <div className="player-head-title">Harry Potter and the Soruse</div>
        <BiDotsHorizontalRounded className="icon" />
      </div>
      <div className="player-cover">
        <img
          className="player-cover-image"
          src={require("../assets/cover.png")}
        />
        <div className="player-music-title">Harry Potter and the Prison...</div>
        <div className="player-author max-width">J.K. Rowling</div>
      </div>
    </div>
  );
};

export default Player;
