import React from "react";
import "./_programs.scss";

const Programs = () => {
  return (
    <>
      <div className="coder--program-one">
        <div className="coder--program--content-one">
          <h1 className="title">
            We brought to you both age-based and profession-based programs.
          </h1>
          <h6 className="sub-title">Our age-based programs</h6>
          <p>
            We teach the younger generations various technological skills and
            programming languages. With us, children aged 6-9 learn about{" "}
            <a
              className="link"
              href="https://scratch.mit.edu/"
              target="_blank"
              rel="noreferrer"
            >
              Scratch
            </a>{" "}
            programming. 10 to 12 years old are to be introduced to{" "}
            <a
              className="link"
              href="https://html.com/"
              target="_blank"
              rel="noreferrer"
            >
              HTML
            </a>
            , as well as{" "}
            <a
              className="link"
              href="https://www.w3.org/TR/CSS/#css"
              target="_blank"
              rel="noreferrer"
            >
              CSS
            </a>
            . Teenagers from 13 to 15 years old pick up from their juniors with
            more advanced HTML and CSS courses, coupled with{" "}
            <a
              className="link"
              href="https://www.javascript.com/"
              target="_blank"
              rel="noreferrer"
            >
              JavaScript
            </a>{" "}
            lessons.
          </p>
        </div>
      </div>

      <div className="coder--program-two">
        <div className="coder--program--content-two">
          <h1 className="title">
            We brought to you both age-based and profession-based programs.
          </h1>
          <h6 className="sub-title ">Our age-based programs</h6>
          <p>
            We teach the younger generations various technological skills and
            programming languages. With us, children aged 6-9 learn about{" "}
            <a href="/" className="link" target="_blank" rel="noreferrer">
              Scratch
            </a>
            programming. 10 to 12 years old are to be introduced to{" "}
            <a href="/" className="link" target="_blank" rel="noreferrer">
              HTML
            </a>
            , as well as{" "}
            <a href="/" className="link" target="_blank" rel="noreferrer">
              CSS
            </a>
            . Teenagers from 13 to 15 years old pick up from their juniors with
            more advanced HTML and CSS courses, coupled with{" "}
            <a href="/" className="link" target="_blank" rel="noreferrer">
              JavaScript
            </a>{" "}
            lessons.
          </p>
        </div>
      </div>
    </>
  );
};

export default Programs;
