import React from "react";
import Typography from "root/components/Typography";
import classNames from "classnames";

import styles from "./index.module.css";

interface IButton {
  handleClick: () => void;
  children: React.ReactNode;
  disabled: boolean;
  type: "button" | "submit";
}

const Button = ({
  handleClick,
  children,
  disabled = false,
  type = "button",
}: IButton) => {
  const buttonStyles = classNames(styles.root, {
    [styles.disabled]: disabled,
  });

  return (
    <button
      disabled={disabled}
      className={buttonStyles}
      onClick={handleClick}
      type={type}
    >
      <Typography variant="small-body" color="white">
        {children}
      </Typography>
    </button>
  );
};

export default Button;
