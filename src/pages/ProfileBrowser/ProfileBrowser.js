import { useContext } from "react";
import uuid from "react-uuid";
import CenterWrapper from "../../components/UI/CenterWrapper";
import HomeContext from "../../store/HomeContext";
import classes from "./ProfileBrowser.module.css";
import ProfileBrowserItem from "./ProfileBrowserItem";

export const IDENTITY = [
  { id: 'guest', name: "Guest", icon: 'images/guest.png' },
  { id: 'hr', name: "Hiring Manager", icon: 'images/hr.png' },
  { id: 'dev', name: "Developer", icon: 'images/developer.png' },
];

const ProfileBrowser = () => {
  const homeCtx = useContext(HomeContext);

  const selectIdentityHandler = (identity) => {
    homeCtx.setIdentity(identity)
  }

  return (
    <>
      <CenterWrapper >
        <div className={classes.title}>Who's watching?</div>
        <div className={classes.container}>
          {IDENTITY.map((user) => (
            <ProfileBrowserItem key={user.id} user={user} isAddUser={false} onSelectIdentity={selectIdentityHandler} />
          ))}
          {/* <ProfileBrowserItem isAddUser={true} /> */}
        </div>
        {/* <div className={classes['edit-btn']}>Manage Profile</div> */}
      </CenterWrapper>
    </>
  );
};

export default ProfileBrowser;
