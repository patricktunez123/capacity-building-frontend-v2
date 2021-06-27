import React from "react";
import Header from "../../components/Header";
import Programs from "../../components/Sections/Programs";
import Services from "../../components/Sections/Services";
import "./_home.scss";

const Home = () => {
  return (
    <div className="coder--container">
      <Header />
      <div className="coder--home">
        <div className="hero--content">
          <h1>Learn coding with us.</h1>
          <p>
            Become an expert in programming languages and computing concepts
            with us. Get the training you need for a career in hardware and
            software development. Like thousands, learn how to code, computer
            hardware, networking and much more by joining us.
          </p>
          <div className="coder--home--btns">
            <button className="btn home--btn">GET STARTED</button>
            <button className="btn home--btn">SUPPORT US</button>
          </div>
        </div>
      </div>
      <Programs />
      <Services />
    </div>
  );
};

export default Home;
