import React from "react";

import image from "../../assets/image.jpg";

import "./subscribe.style.css";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <h4 className="sub-title">Join Now</h4>
      <img className="image" src={image} alt="" />

      <div className="offers">
        <div className="offer">
          <h5 className="offer-title">Introductory Trial</h5>
          <h5 className="info">$1 for 2 Months</h5>
          <button className="btn">Act Now</button>
        </div>
        <div className="offer">
          <h5 className="offer-title">Best Value</h5>
          <h5 className="info">$52 for 52 weeks</h5>
          <button className="btn">Act Now</button>
        </div>
      </div>

    </div>
  );
};

export default Subscribe;
