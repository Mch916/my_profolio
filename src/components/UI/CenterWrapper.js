import classes from "./CenterWrapper.module.css";

const CenterWrapper = ({ children }) => {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes['center-wrapper']}>{children}</div>
      </div>
    </>
  );
};

export default CenterWrapper;
