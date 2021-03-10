import React from "react";
import classNames from "classnames";

import styles from "./index.module.css";

interface IInputText {
  value: string;
  name: string;
  placeholder: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputText({
  value = "",
  name,
  placeholder,
  handleInputChange,
}: IInputText) {
  const inputStyles = classNames({
    [styles.input]: true,
  });

  return (
    <input
      className={inputStyles}
      type="text"
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={handleInputChange}
      autoComplete="off"
    />
  );
}

export default InputText;
