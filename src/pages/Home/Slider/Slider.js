import React from "react";
import { Link } from "react-router-dom";
import "./Slider.css";

export default function Slider() {
  return (
    <div className="carousel w-full h-screen">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          alt=""
          src="https://www.intrepidgroup.travel/sites/default/files/2018-07/home-banner-02%402x.jpg"
          className="w-full"
        />
        {/* -------- */}
        <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
          <h1 className="text-6xl font-bold text-white">
            Welcome, <br />
            Travel To Go.
          </h1>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
          <p className="text-xl text-white">
            Welcome! Every day I wake up with one goal in mind: “How can I help
            other people travel better for less?
          </p>
        </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
          <button className="btn btn-success mr-5">
            <Link to="/services">Explore Now</Link>
          </button>
          <button className="btn btn-outline btn-success">
            <Link to="/login">Login</Link>
          </button>
        </div>
        {/* ----- */}
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          alt=""
          src="https://www.intrepidtravel.com/adventures/wp-content/uploads/2020/03/Intrepid-Travel-Nepal_Poon-Hill_2019_77125-1.jpg"
          className="w-full"
        />
        {/* -------- */}
        <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
          <h1 className="text-6xl font-bold text-white">
            Welcome, <br />
            Travel To Go.
          </h1>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
          <p className="text-xl text-white">
            Welcome! Every day I wake up with one goal in mind: “How can I help
            other people travel better for less?
          </p>
        </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
          <button className="btn btn-success mr-5">
            <Link to="/services">Explore Now</Link>
          </button>
          <button className="btn btn-outline btn-success">
            <Link to="/login">Login</Link>
          </button>
        </div>
        {/* ----- */}
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          alt=""
          src="https://www.exoticca.com/es/blog/wp-content/uploads/2019/08/Qu%C3%A9-es-el-slow-travel-y-qu%C3%A9-particularidad-tiene.jpg"
          className="w-full"
        />
        {/* -------- */}
        <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
          <h1 className="text-6xl font-bold text-white">
            Welcome, <br />
            Travel To Go.
          </h1>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
          <p className="text-xl text-white">
            Welcome! Every day I wake up with one goal in mind: “How can I help
            other people travel better for less?
          </p>
        </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
          <button className="btn btn-success mr-5">
            <Link to="/services">Explore Now</Link>
          </button>
          <button className="btn btn-outline btn-success">
            <Link to="/login">Login</Link>
          </button>
        </div>
        {/* ----- */}
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      {/* <div id="slide4" className="carousel-item relative w-full">
          <img
            alt=""
            src="https://placeimg.com/800/200/arch"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div> */}
    </div>
  );
}
