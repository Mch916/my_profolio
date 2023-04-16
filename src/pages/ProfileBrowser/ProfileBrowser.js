import uuid from "react-uuid";
import CenterWrapper from "../../components/UI/CenterWrapper";
import classes from "./ProfileBrowser.module.css";
import ProfileBrowserItem from "./ProfileBrowserItem";
import hrProfileImg from "../../assets/hr.png";
import guestProfileImg from "../../assets/guest.png";
import developerProfileImg from "../../assets/developer.png";

const DUMMY_USER = [
  { id: uuid(), name: "Guest", icon: guestProfileImg },
  { id: uuid(), name: "Hiring Manager", icon: hrProfileImg },
  { id: uuid(), name: "Developer", icon: developerProfileImg },
];

const ProfileBrowser = () => {
  return (
    <>
      <CenterWrapper >
        <div className={classes.title}>Who's watching?</div>
        <div className={classes.container}>
          {DUMMY_USER.map((user) => (
            <ProfileBrowserItem key={user.id} user={user} isAddUser={false}/>
          ))}
          <ProfileBrowserItem isAddUser={true} />
        </div>
        <div className={classes['edit-btn']}>Manage Profile</div>
      </CenterWrapper>
    </>
  );
};

export default ProfileBrowser;
