import { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/IndianFood.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Community Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes.main_image}>
        <img src={mealsImage} alt="A table full of delicious food" />
      </div>
    </Fragment>
  );
};

export default Header;
