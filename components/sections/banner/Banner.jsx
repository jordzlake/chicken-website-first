"use client";

import "./banner.css";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="banner container first-container">
      <div className="banner-background-container">
        <Image
          className="banner-img"
          src="/chickenBanner.jpeg"
          fill
          alt="chickens standing on field"
        />
      </div>
      <div className="banner-controls-container">
        <h1 className="banner-title">
          HIGH QUALITY CHICKENS.
          <br />
          DELIVERED FAST.
        </h1>
        <h2 className="banner-subtitle">Order High Quality Chickens Now.</h2>
        <form className="banner-form-container">
          <label htmlFor="amount" className="banner-text">
            I want to order{" "}
            <span>
              <input
                type="number"
                className="banner-form-input"
                defaultValue={1}
              />
            </span>{" "}
            chickens.
          </label>
          <button className="banner-form-button">ORDER</button>
        </form>
      </div>
    </div>
  );
};

export default Banner;
