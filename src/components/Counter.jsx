import { Text } from "./Text";
import { IconMinus } from "./icons/iconMinus";
import { IconPlus } from "./icons/iconPlus";
import styles from "./Counter.module.css";
import { useState } from "react";

export const Counter = (props) => {
  const [value, setValue] = useState(0);
  const handleIncrement = () => {
    setValue(value + 1);
  };
  const handleDecrement = () => {
    if (value <= 0) {
      return;
    }
    setValue(value - 1);
  };
  const { count, text } = props;
  return (
    <div className={styles.wrapper}>
      <Text>
        {value}
        {props.count} {props.text}
      </Text>
      <IconMinus onClick={props.onDecrement} />
      <IconPlus onClick={props.onIncrement} />
    </div>
  );
};
