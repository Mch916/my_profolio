import { Link } from "react-router-dom";
import classes from "./ProfileBrowserItem.module.css";

const ProfileBrowserItem = ({ user, isAddUser }) => {
  return (
    <>
      <div className={classes.container}>
        <Link to='/home'>
          {!isAddUser && (
            <div
              style={{ backgroundImage: `url(${user.icon})` }}
              className={classes.img}
            />
          )}
          {!isAddUser && <div className={classes.label}>{user.name}</div>}
          {isAddUser && <div className={classes.icon} />}
          {isAddUser && <div className={classes.label}>Add Profile</div>}
        </Link>
      </div>
    </>
  );
};

export default ProfileBrowserItem;
