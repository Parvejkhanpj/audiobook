import React from "react";
import "./card.css";
import { useNavigate } from "react-router-dom";

const Card = ({ card }) => {
  const navigavite = useNavigate();
  const playPlaylist = (id) => {
    navigavite("/player", { state: { id: id } });
    console.log(id);
  };

  return (
    <div className="max-width flex card-wrapper">
      <div className="card-image">
        <img
          className="book-cover"
          src={card.cover}
          alt="abama"
          onClick={() => playPlaylist(card.Boxid)}
        />
      </div>
      <div className="card-text">
        <div
          className="card-book-title"
          onClick={() => playPlaylist(card.Boxid)}
        >
          {card.title}
        </div>
        <div className="card-book-description">{card.author}</div>
      </div>
    </div>
  );
};

export default Card;
