import { Link, redirect, useNavigate } from "react-router-dom";
import classes from "./ProfileBrowserItem.module.css";

const ProfileBrowserItem = ({ user, isAddUser, onSelectIdentity }) => {

  const navigate = useNavigate();
  const selectIDHandler = () => {
    onSelectIdentity(user.id);
    navigate('/home');
  }
  return (
    <>
      <div className={classes.container}>
        <div onClick={selectIDHandler}>
          {!isAddUser && (
            <div
              style={{ backgroundImage: `url(${user.icon})` }}
              className={classes.img}
            />
          )}
          {!isAddUser && <div className={classes.label}>{user.name}</div>}
          {isAddUser && <div className={classes.icon} />}
          {isAddUser && <div className={classes.label}>Add Profile</div>}
        </div>
      </div>
    </>
  );
};

export default ProfileBrowserItem;
