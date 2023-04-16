import classes from "./Button.module.css";

const Button = ({ text, icon }) => {
  console.log(icon)
  return (
    <>
      <button className={classes["btn"]}>
        <div>
          {icon}
        </div>
        <div style={{ width: '1rem', backgroundColor: "transparent"}}></div>
        <span className={classes["label"]}>{text}</span>
      </button>
    </>
  );
};

export default Button;
