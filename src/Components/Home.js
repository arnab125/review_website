import React, { useState } from "react";
import "./home.css";
import Reviews from "./Reviews";
import FewReviews from "./FewReviews";
import { Link } from "react-router-dom";

function Home () {
  return (
    <section className="home">
    <div className="main">
        <div className="left">
            <h1>Next Generation product</h1>
            <h1 className="sub-heading">Grab it Now !!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,kahufkgwgdigaigigiguseidg quod.</p>
            <button className="btn">Buy Now</button>
        </div>
        <div className="right">
            <img src="https://img.freepik.com/free-vector/antigravity-technology-with-elements_23-2148072447.jpg?w=740&t=st=1680431023~exp=1680431623~hmac=45221d386d9982dc4c79128ba9320e262bd3877f1b81e2df015da6119c0454aa" alt="hero-img" />
        </div>
    </div>
    <FewReviews />
    <Link to="/reviews">
    <button className="btnn">See More</button>
    </Link>
    </section>
  )
};

export default Home;