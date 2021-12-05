import React from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.Input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} />
    </div>
  );
});

export default Input;
