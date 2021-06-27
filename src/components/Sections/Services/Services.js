import React from "react";
import "./_services.scss";

const Services = () => {
  return (
    <div className="coder--services">
      <div className="top">
        <h1 className="title">We Offer You More</h1>
        <p>
          We do not only prepare the next generation of 6 years and older
          developers through trainings to introduce young people to programming
          skills. We got you more services
        </p>
      </div>
      <div className="bottom">
        <div className="container-fluid">
          <div className="row service--row">
            <div className="col-lg-5 col-md-5 col-sm-12  coder--service">
              <h1 className="sub-title">Offshore Outsourcing</h1>
              <p>
                This is a product namely Test Africa mainly focused on mobile
                and web app development, custom software development, front-end
                and back-end development, flutter, react native, and many
                more... Learn more
              </p>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12  coder--service">
              <h1 className="sub-title">
                Innovation, Startup & Entrepreneurship
              </h1>
              <p>
                This is a customized entrepreneurship ecosystem support program
                whose main goal is attracting start-ups, investment funds, and
                academia to scale up companies in various African countries...
                Learn more
              </p>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12  coder--service">
              <h1 className="sub-title">Investment</h1>
              <p>
                This program aims at connecting investors or donors to
                institutions, organizations, companies, startups or individuals
                seeking for investments, loans, or donations. This service
                primarily targets governments, banks,... Learn more
              </p>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12  coder--service">
              <h1 className="sub-title">Interested? Talk To Us.</h1>
              <p>If you are interested please send us a message</p>
              <div className="links">
                <button className="coder--btn-outline">Contact us</button>
                <a className="link" href="/">
                  We offer you more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
