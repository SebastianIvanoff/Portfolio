import React from "react";
import { DiReact } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { FaJs } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className="Home-Container">
        <div className="text">
          <h1>Hi, I'm Sebastian</h1>
          <p>
            I'm a frontend developer with experience using React And NodeJS.{" "}
          </p>
          <p>I'm currently looking for new experiences and opportunities </p>
        </div>
        <img src="/seb.png" alt="Picture of me" className="img" />
      </div>
      <div className="ToolBox">
        <h1>My toolbox</h1>
        <div className="tech-list">
          <div className="tools">
            <div className="tools-content">
              <h2>Frontend</h2>

              <div className="flex-test">
                <div className="icon-text">
                  <DiReact size={70} /> <p>React</p>
                </div>

                <div className="icon-text">
                  <SiTypescript size={70} /> <p>Typescript</p>
                </div>
              </div>

              <div className="flex-test">
                <div className="icon-text">
                  <IoLogoCss3 size={70} /> <p>css</p>
                </div>

                <div className="icon-text">
                  <FaJs size={70} /> <p>Javascript</p>
                </div>
              </div>
            </div>
          </div>

          <div className="tools">
            <div className="tools-content">
              <h2>Backend</h2>
              <div className="flex-test">
                <div className="icon-text">
                  <FaNode size={70} /> <p>NodeJS</p>
                </div>

                <div className="icon-text">
                  <SiMongodb size={70} /> <p>MonoDB</p>
                </div>
              </div>
            </div>
          </div>

          <div className="tools">
            <div className="tools-content">
              <h2>Others</h2>
              <div className="icon-text">
                <FaGitAlt size={70} /> <p>Git</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
