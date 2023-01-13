import React from "react";

export const Slider = () => {
  return (
    <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        style={{ objectFit: "contain" }}
      >
        <div className="carousel-inner" style={{ maxHeight: "500px" }}>
          <div className="carousel-item active slider">
            <img
              src="https://source.unsplash.com/random/900x900?biryani"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item slider">
            <img
              src="https://source.unsplash.com/random/900x900?chaat"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item slider">
            <img
              src="https://source.unsplash.com/random/900x900?pizza"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
