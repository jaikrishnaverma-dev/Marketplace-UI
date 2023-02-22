import React from "react";

const Body = () => {
  const arr = [1, 1, 1];
  return (
    <>
      <section className="ourdeals">
        <p>Our Top Deals</p>
        <p>
          Explore <img src="Vector (1).png" alt="" />
        </p>
      </section>
      <section className="cardgroup">
        {arr.map((x) => (
          <>
            <div className="card">
              <div className="card__header">
                <div className="card__offer">
                  <span>-59%</span>
                </div>
                <div className="card__like">
                  <img src="Vector (2).png" alt="" />
                </div>
              </div>
              <div className="card__body">
                <img src="Image.png" alt="" />
              </div>
              <div className="card__header card__header--mid">
                <div className="card__devices">
                  <span>Audio Devices</span>
                </div>
                <div className="card__like">₦600,000</div>
              </div>
              <p className="card__title">
                Nokia Essential Wireless Headphones 120CM BLACK
              </p>
              <div className="card__buttons">
                <button className="hero__details">Add to Cart</button>
                <button className="hero__explore">Buy Now</button>
              </div>
            </div>
          </>
        ))}
      </section>
      <section className="ourdeals">
        <p>Best Selling Product</p>
        <p>
          Explore <img src="Vector (1).png" alt="" />
        </p>
      </section>
      <section className="cardgroup">
        {arr.map((x) => (
          <>
            <div className="card">
              <div className="card__header">
                <div className="card__offer">
                  <span>-59%</span>
                </div>
                <div className="card__like">
                  <img src="Vector (2).png" alt="" />
                </div>
              </div>
              <div className="card__body">
                <img src="Image.png" alt="" />
              </div>
              <div className="card__header card__header--mid">
                <div className="card__devices">
                  <span>Audio Devices</span>
                </div>
                <div className="card__like">₦600,000</div>
              </div>
              <p className="card__title">
                Nokia Essential Wireless Headphones 120CM BLACK
              </p>
              <div className="card__buttons">
                <button className="hero__details">Add to Cart</button>
                <button className="hero__explore">Buy Now</button>
              </div>
            </div>
          </>
        ))}
      </section>
      <section className="formpad">
        <div className="formpad__form">
          <p>Subscribe to Our Newsletter</p>
          <p>
            Don't miss out on our top deals! Dont worry we will not spam you.
          </p>
          <div className="inputdiv">
            <input
              type="text"
              placeholder="Enter Your Email Here..."
              className="inputdiv__input"
            />
            <button className="subscribe">Subscribe</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Body;
