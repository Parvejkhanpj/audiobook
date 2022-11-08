import React from "react";
import { BiChevronDown, BiDotsHorizontalRounded } from "react-icons/bi";
import "./player.css";
import "../components/Homefooter/footer.css";
const Player = () => {
  return (
    <div className="max-width">
      <div className="player-header flex ">
        <BiChevronDown className="icon" />
        <div className="player-head-title">Harry Potter and the Soruse</div>
        <BiDotsHorizontalRounded className="icon" />
      </div>
      {/* player -coveŕ images  */}
      <div className="player-cover">
        <img
          className="player-cover-image"
          src={require("../assets/cover.png")}
          alt=""
        />
      </div>
      {/* book title and author name  */}
      <div className="player-description">
        <div className="player-music-title">Harry Potter and the Prison...</div>
        <div className="player-author max-width">J.K. Rowling</div>
      </div>
      {/* music timeline */}
      <div className="music-timeline">
        <input
          type="range"
          id="volume"
          name="volume"
          min="0"
          max="11"
          className="player-timeline"
        />
        <div className="start-time time-stamp">0.0</div>
        <div className="end-time time-stamp">05.15</div>
      </div>
      {/* play - controls  */}
      <div className="play-controls flex">
        <img
          className="play-side-icon controls-icons"
          src={require("../assets/Volume Up.png")}
          alt=""
        />
        <div className="play-main-controls">
          <img
            className="player-play-icon-arrow controls-icons"
            src={require("../assets/Arrow - Left Circle.png")}
            alt=""
          />
          <img
            className="player-play-icon controls-icons"
            src={require("../assets/Play.png")}
            alt=""
          />
          <img
            className="player-play-icon-arrow controls-icons"
            src={require("../assets/Arrow - Right Circle.png")}
            alt=""
          />
        </div>
        <img
          className="play-side-ico controls-icons"
          src={require("../assets/Upload.png")}
          alt=""
        />
      </div>
      {/* player footer */}
      <div className="footer ">
        <div class="footer-wrapper player-footer flex ">
          <div className="footer-icon-wraper">
            <img
              src={require("../assets/Bookmark.png")}
              alt=""
              className="icon"
            />
            <div className="icon-text">Bookmark</div>
          </div>
          <div className="footer-icon-wraper">
            <img src={require("../assets/Paper.png")} alt="" className="icon" />
            <div className="icon-text">Chapter</div>
          </div>
          <div className="footer-icon-wraper">
            <img
              src={require("../assets/Time Square.png")}
              alt=""
              className="icon"
            />
            <div className="icon-text">Speed {}</div>
          </div>
          <div className="footer-icon-wraper">
            <img
              src={require("../assets/downloadarrow.png")}
              alt=""
              className="icon"
            />
            <div className="icon-text">Downlaod</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
