import React, { useEffect, useRef, useState } from "react";
import { BiChevronDown, BiDotsHorizontalRounded } from "react-icons/bi";
import "./player.css";
import "../components/Homefooter/footer.css";
import { useLocation, useNavigate } from "react-router-dom";
import DATA from "../api/data";
import { IoPlaySkipBack, IoPlaySkipForward, IoPlay } from "react-icons/io5";
import { IconContext } from "react-icons";
import { FaPause } from "react-icons/fa";

const Player = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [tracks, setTracks] = useState({});
  const [currentTrack, setCurrentTrack] = useState([]);
  console.log(location);

  // getting data and music

  useEffect(() => {
    if (location.state) {
      setTracks(DATA);
      setCurrentTrack(DATA[currentIndex]);
    }
  });

  useEffect(() => {
    // setCurrentTrack(DATA[0].audios);
    setCurrentTrack(tracks[currentIndex]?.audios[0]?.source);
    console.log(currentTrack, "currentTrack");
    console.log(tracks, "tracks");
    console.log(currentIndex, "currentIndex");
  }, [currentIndex, tracks]);

  // back to playlist
  const gobackPlaylist = () => {
    navigate("/");
  };

  // audio player source
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);
  var audioSrc = DATA[currentIndex]?.audios[0]?.source;
  const audioRef = useRef(new Audio(DATA[0]?.audios[0]?.source));
  console.log("audioref", audioRef);
  const intervalRef = useRef();
  const isReady = useRef(false);
  const { duration } = audioRef.current;
  const currentPercentage = duration ? (trackProgress / duration) * 100 : 0;

  const startTimer = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        handleNext();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  useEffect(() => {
    if (audioRef.current.src) {
      if (isPlaying) {
        audioRef.current.play();
        startTimer();
      } else {
        clearInterval(intervalRef.current);
        audioRef.current.pause();
      }
    } else {
      if (isPlaying) {
        audioRef.current = new Audio(audioSrc);
        audioRef.current.play();
        startTimer();
      } else {
        clearInterval(intervalRef.current);
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(audioSrc);

    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      isReady.current = true;
    }
  }, [currentIndex]);

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  const handleNext = () => {
    if (currentIndex < DATA.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else setCurrentIndex(0);
  };

  const handlePrev = () => {
    if (currentIndex - 1 < 0) setCurrentIndex(DATA.length - 1);
    else setCurrentIndex(currentIndex - 1);
  };

  const addZero = (n) => {
    return n > 9 ? "" + n : "0" + n;
  };

  return (
    <div className="max-width">
      <div className="player-header flex ">
        <BiChevronDown className="icon" onClick={gobackPlaylist} />
        <div className="player-head-title">
          {DATA[currentIndex]?.title.slice(0, 15)} ...
        </div>
        <BiDotsHorizontalRounded className="icon" />
      </div>
      {/* player -coveŕ images  */}
      <div className="player-cover">
        <img
          className="player-cover-image"
          src={DATA[currentIndex]?.cover}
          alt=""
        />
      </div>
      {/* book title and author name  */}
      <div className="player-description">
        <div className="player-music-title">
          {DATA[currentIndex]?.title.slice(0, 15)} ...
        </div>
        <div className="player-author max-width">
          {DATA[currentIndex]?.author}
        </div>
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
        <div className="end-time time-stamp">{DATA[currentIndex]?.Runtime}</div>
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
            onClick={handlePrev}
          />
          {/* <img
            className="player-play-icon controls-icons"
            src={require("../assets/Play.png")}
            alt=""
            onClick={""}
          /> */}
          <div
            className="player-play-icon controls-icons"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? (
              <FaPause className="play-iocn" />
            ) : (
              <IoPlay className="play-iocn" />
            )}
          </div>
          <img
            className="player-play-icon-arrow controls-icons"
            src={require("../assets/Arrow - Right Circle.png")}
            alt=""
            onClick={handleNext}
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
