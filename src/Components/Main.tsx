import React from "react";
import Body from "./master/Body";
import Footer from "./master/Footer";
import Header from "./master/Header";

const Main = () => {
  return (
    <>
      <div className="container">
        <header className="header">
          <Header />
        </header>
        <main className="main">
          <Body />
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Main;
