import React from "react";
import "./card.css";
const Card = () => {
  return (
    <div className="max-width flex card-wrapper">
      <div className="card-image">
        <img
          className="book-cover"
          src={require("../../assets/abama.png")}
          alt="abama"
        />
      </div>
      <div className="card-text">
        <div className="card-book-title">
          Harry Potter and the Prisoner of Azkaban
        </div>
        <div className="card-book-description">J.K. Rowling</div>
      </div>
    </div>
  );
};

export default Card;
