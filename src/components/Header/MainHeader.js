import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeContext from "../../store/HomeContext";
import useWindowScroll from "../hooks/useWindowScroll";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
  const [pos, isTop] = useWindowScroll();
  const [bgColor, setBgColor] = useState("transparent");
  const homeCtx = useContext(HomeContext);

  useEffect(() => {
    // console.log("isTop");
    if (isTop) {
      setBgColor("transparent");
    } else {
      setBgColor("var(--main-black-text-color)");
    }

    return () => {};
  }, [isTop]);

  

  return (
    <>
      <div className={classes["main-header"]}>
        <div className={classes["main-header-container"]}>
          <nav
            style={{ backgroundColor: bgColor }}
            className={`${classes["main-header"]} ${classes["menu-navigation"]}`}
          >
            <ul className={classes["tab-navigation"]}>
              <li className={classes["nav-tab"]}>
                <div className={`${classes["label"]} ${homeCtx.activePage == 'home' ? classes['active'] : ''}`} >Home</div>
              </li>
              <li className={classes["nav-tab"]}>
                <div className={`${classes["label"]} ${homeCtx.activePage == 'about' ? classes['active'] : ''}`}>About Me</div>
              </li>
              <li className={classes["nav-tab"]}>
                <div className={`${classes["label"]} ${homeCtx.activePage == 'work' ? classes['active'] : ''}`}>Work Exp</div>
              </li>
              {/* <li className={classes["nav-tab"]}>
                <div className={`${classes["label"]} ${homeCtx.activePage == 'contact' ? classes['active'] : ''}`}>Contact</div>
              </li> */}
              
            </ul>

            <div className={classes["second-nav"]}>
              <div className={classes["second-nav-tab"]}>
                <div className={classes["tab-menu"]}>
                  <div className={classes["tab-menu-btn"]}>
                    <Link>
                      <span>
                        <img
                          className={classes["profile-icon"]}
                          src="/images/developer.png"
                        />
                      </span>
                    </Link>
                    {/* <span className={classes.caret}></span> */}
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MainHeader;
