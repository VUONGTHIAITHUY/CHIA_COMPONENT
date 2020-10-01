import React from "react";

export default function Intro() {
  return (
    <div id="demo" className="carousel slide" data-ride="carousel">
      <ul className="carousel-indicators">
        <li data-target="#demo" data-slide-to={0} className="active" />
        <li data-target="#demo" data-slide-to={1} />
      </ul>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="./img/slide_1.png" alt="Los Angeles" width="100%" />
        </div>
        <div className="carousel-item">
          <img src="./img/slide_2.png" alt="Chicago" width="100%" />
        </div>
      </div>
      <a className="carousel-control-prev" href="#demo" data-slide="prev">
        <span className="carousel-control-prev-icon" />
      </a>
      <a className="carousel-control-next" href="#demo" data-slide="next">
        <span className="carousel-control-next-icon" />
      </a>
    </div>
  );
}
