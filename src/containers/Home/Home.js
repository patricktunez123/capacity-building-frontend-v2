import React from "react";
import Header from "../../components/Header";
import Programs from "../../components/Sections/Programs";
import Services from "../../components/Sections/Services";
import Join from "../../components/Sections/Join";
import Initiatives from "../../components/Sections/Initiatives";
import Footer from "../../components/Footer";
import "./_home.scss";

const Home = () => {
  return (
    <>
      <Header />
      <div className="coder--home">
        <div className="hero--content">
          <h1 className="title">Learn coding with us.</h1>
          <p>
            Become an expert in programming languages and computing concepts
            with us. Get the training you need for a career in hardware and
            software development. Like thousands, learn how to code, computer
            hardware, networking and much more by joining us.
          </p>
          <div className="coder--home--btns">
            <button className="coder--btn home--btn">GET STARTED</button>
            <button className="coder--btn home--btn">SUPPORT US</button>
          </div>
        </div>
      </div>
      <Programs />
      <Services />
      <Join />
      <Initiatives />
      <Footer />
    </>
  );
};

export default Home;
