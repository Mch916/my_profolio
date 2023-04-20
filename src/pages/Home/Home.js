import MainHeader from "../../components/Header/MainHeader";
import classes from "./Home.module.css";
import SliderRow from "./SliderRow";

import { useCallback, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import IconFacebook from "../../components/Icons/IconFacebook";
import IconGithub from "../../components/Icons/IconGithub";
import IconIns from "../../components/Icons/IconIns";
import IconLeetCode from "../../components/Icons/IconLeetCode";
import IconLinkedin from "../../components/Icons/IconLinkedin";
import HomeContext from "../../store/HomeContext";
import AboutMe from "../AboutMe/AboutMe";
import WorkExp from "../WorkExp/WorkExp";
import './Home.css';

const programming = [
  {
    id: "p1",
    image: "/images/javascript.webp",
    title: "Javascript",
  },
  {
    id: "p2",
    image: "/images/python.jpg",
    title: "Python",
  },
  {
    id: "p3",
    image: "/images/php.png",
    title: "PHP",
  },
  {
    id: "p4",
    image: "/images/java.jpeg",
    title: "Java",
  },
  {
    id: "p5",
    image: "/images/html.jpeg",
    title: "HTML",
  },
  {
    id: "p6",
    image: "/images/css.webp",
    title: "CSS",
  },
  {
    id: "p7",
    image: "/images/mysql.webp",
    title: "MySQL",
  },
  {
    id: "p8",
    image: "/images/oracle.jpeg",
    title: "Oracle",
  },
];

const framework = [
  {
    id: "f1",
    image: "/images/laravel.jpeg",
    title: "Laravel",
  },
  {
    id: "f2",
    image: "/images/react.jpeg",
    title: "React",
  },
  {
    id: "f3",
    image: "/images/flask.png",
    title: "Flask",
  },
  {
    id: "f4",
    image: "/images/codeigniter.jpeg",
    title: "CodeIgniter",
  },
  {
    id: "f5",
    image: "/images/jQuery.webp",
    title: "jQuery",
  },
];

const devops = [
  {
    id: "d0",
    image: "/images/aws.webp",
    title: "AWS",
  },
  {
    id: "d1",
    image: "/images/git.png",
    title: "Git",
  },
  {
    id: "d2",
    image: "/images/github.webp",
    title: "GitHub",
  },
  {
    id: "d3",
    image: "/images/gitlab.jpeg",
    title: "Gitlab",
  },
  {
    id: "d4",
    image: "/images/docker.png",
    title: "Docker",
  },
  {
    id: "d5",
    image: "/images/cypress.png",
    title: "Cypress",
  },
];

const Home = () => {
  const homeCtx = useContext(HomeContext);
  
  const reveal = useCallback(() => {
    var reveals = document.querySelectorAll(".reveal-ele");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementBottom = reveals[i].getBoundingClientRect().bottom;
      var elementVisible = 50;
      // console.log(reveals[i],windowHeight, elementTop, elementBottom, elementTop < windowHeight - elementVisible,elementBottom > 0);
      if (elementTop < windowHeight - elementVisible && elementBottom > 0) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
      if (elementTop < windowHeight - 300) { 
        if (reveals[i].classList.contains('nav-reveal')) {
          homeCtx.setPage(reveals[i].id);
        }

      }
    }
  },[])

  useEffect(() => {
    window.addEventListener("scroll", reveal);
  },[reveal])

  return (
    <>
      <MainHeader />
      <div className={`${classes["bg-container"]} reveal-ele nav-reveal`} id="home">
        {/* <img
          className={classes["bg-img"]}
          src="/images/bg03.jpg"
          alt="Background"
        /> */}
        <div className={classes["bg-info-container"]}>
          <div className={classes["bg-info"]}>
            <div className={classes["bg-info-grid"]}>
              <div className={classes["bg-info-1"]}>
                Hi! I'm <span className="bg-name reveal-ele active">Lucas Man</span>
              </div>
              <div>
                <img
                  className={classes["bg-info-img"]}
                  src="/images/profilepic.jpeg"
                />
              </div>
              <div className={classes["bg-info-2"]}>
                <Typewriter
                  options={{
                    strings: [
                      "Software Deveoper",
                      "Frontend Deveoper",
                      "Backend Deveoper",
                      "Full Stack Deveoper",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <div className={classes["bg-info-links"]}>
                <Link
                  to="https://www.linkedin.com/in/lucas-man/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes["bg-info-btn"]}
                >
                  <IconLinkedin />
                </Link>
                <Link
                  to="https://leetcode.com/mch916w/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes["bg-info-btn"]}
                >
                  <IconLeetCode />
                </Link>
                <Link
                  to="facebook.com/lucas.man.mch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes["bg-info-btn"]}
                >
                  <IconFacebook />
                </Link>
                <Link
                  to="https://www.instagram.com/manho916/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes["bg-info-btn"]}
                >
                  <IconIns />
                </Link>
                <Link
                  to="https://github.com/Mch916"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes["bg-info-btn"]}
                >
                  <IconGithub />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="reveal-container reveal-ele">
        <SliderRow listData={programming} title="<Programming Language />" />
      </div>
      <div className="reveal-container reveal-ele">
        <SliderRow listData={framework} title="<Framework />" />
      </div>
      <div className="reveal-container reveal-ele">
        <SliderRow listData={devops} title="<DevOps />" />
      </div>
      
      <AboutMe />
      <WorkExp />
      {/* <WorkExpItem /> */}
      {/* <LeetCode /> */}
    </>
  );
};

export default Home;
