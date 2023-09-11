import styles from "./minus-button.module.css";

const MinusButton: React.FC = () => {
  //   return <button className={styles.buttonMinus}>-</button>;
  return <button className={styles["button--minus"]}>-</button>;
};

export default MinusButton;
