import { Link, NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";

const MainHeader = () => {

  return (
    <>
      <div className={classes["main-header"]}>
        <div className={classes["main-header-container"]}>
          <nav
            className={`${classes["main-header"]} ${classes["menu-navigation"]}`}
          >
            <ul className={classes["tab-navigation"]}>
              <li className={classes["nav-tab"]}>
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    isActive
                      ? `${classes["label"]} ${classes["active"]}`
                      : classes["label"]
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className={classes["nav-tab"]}>
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    isActive
                      ? `${classes["label"]} ${classes["active"]}`
                      : classes["label"]
                  }
                >
                  Work
                </NavLink>
              </li>
              <li className={classes["nav-tab"]}>
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    isActive
                      ? `${classes["label"]} ${classes["active"]}`
                      : classes["label"]
                  }
                >
                  LeetCode
                </NavLink>
              </li>
              <li className={classes["nav-tab"]}>
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    isActive
                      ? `${classes["label"]} ${classes["active"]}`
                      : classes["label"]
                  }
                >
                  Dev Tool
                </NavLink>
              </li>
              <li className={classes["nav-tab"]}>
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    isActive
                      ? `${classes["label"]} ${classes["active"]}`
                      : classes["label"]
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>

            <div className={classes['second-nav']}>
              <div className={classes['second-nav-tab']}>
              <div className={classes['tab-menu']}>
                  <div className={classes['tab-menu-btn']}>
                    <Link>
                      <span>
                        <img className={ classes['profile-icon']} src='/images/developer.png' />
                      </span>
                    </Link>
                  <span className={classes.caret}></span>
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
