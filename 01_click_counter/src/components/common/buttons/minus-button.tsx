import styles from "./minus-button.module.css";

const MinusButton: React.FC = () => {
  const handleClick = () => {
    console.log("minus button clicked");
  };

  //   return <button className={styles.buttonMinus}>-</button>;
  return (
    // <button className={styles["button--minus"]} onClick={handleClick}>
    <button
      className={styles["button--minus"]}
      onClick={() => {
        handleClick();
      }}
    >
      -
    </button>
  );
};

export default MinusButton;
