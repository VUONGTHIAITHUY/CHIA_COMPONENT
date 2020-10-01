import React from "react";

export default function MovieList() {
  return (
    <div className="container mt-5">
      <h1 className="text-center m-3">LIST MOVIE</h1>
      <div className="row">
        <div className="col-sm-3">
          <div className="card">
            <img className="card-img-top" src="./img/minions.jpg" alt />
            <div className="card-body">
              <h4 className="card-title">Minions</h4>
              <p className="card-text">85000</p>
              <button className="btn btn-primary">Detail</button>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card">
            <img className="card-img-top" src="./img/home.jpg" alt />
            <div className="card-body">
              <h4 className="card-title">Home</h4>
              <p className="card-text">85000</p>
              <button className="btn btn-primary">Detail</button>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card">
            <img className="card-img-top" src="./img/harvie.jpg" alt />
            <div className="card-body">
              <h4 className="card-title">Harvie</h4>
              <p className="card-text">85000</p>
              <button className="btn btn-primary">Detail</button>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card">
            <img className="card-img-top" src="./img/insideout.jpg" alt />
            <div className="card-body">
              <h4 className="card-title">Insideout</h4>
              <p className="card-text">85000</p>
              <button className="btn btn-primary">Detail</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
