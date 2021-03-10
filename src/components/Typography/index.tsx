import React from "react";
import classNames from "classnames";

import { Variant, Color, Weight } from "./constants";

import styles from "./index.module.css";

function getTextComponent(variant: Variant) {
  switch (variant) {
    case "body":
      return "p";
    case "small-body":
      return "small";
    default:
      return variant;
  }
}

interface ITypography {
  children: React.ReactNode;
  variant: Variant;
  color: Color;
  weight: Weight;
}

function Typography({
  children,
  variant = "small-body",
  color = "white",
  weight = "regular",
}: ITypography) {
  const classes = classNames(styles.root, {
    [styles[variant]]: true,
    [styles[color]]: true,
    [styles[weight]]: true,
  });

  const TextComponent = getTextComponent(variant);

  return <TextComponent className={classes}>{children}</TextComponent>;
}

export default Typography;
