import React from "react";

const Header = () => {
  return (
    <>
      <nav className="nav">
        <p className="logo">YOUR LOGO</p>
        <ul className="links">
          <li>Market Place</li>
          <li>Blog</li>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <ul className="right__nav">
          <li>
            <img src="Vector.png" alt="" />
          </li>
          <li>
            <img src="Ellipse 67.png" alt="" />
          </li>
        </ul>
      </nav>
      <section className="hero">
        <div className="hero__left">
          <div className="hero__box">
            <p>WE'RE STILL</p>
            <p>
              Filling up <br></br>the spaces.
            </p>
            <div className="hero__buttons">
              <button className="hero__explore">Explore Marketplace</button>
              <button className="hero__details">See Top Deals</button>
            </div>
          </div>
        </div>
        <div className="hero__right">
          <img src="Rectangle 10342.png" className="heroimage" alt="" />
        </div>
      </section>
    </>
  );
};

export default Header;
