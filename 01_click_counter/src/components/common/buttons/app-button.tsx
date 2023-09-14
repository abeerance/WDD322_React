import styles from "./minus-button.module.css";

type AppButtonProps = {
  content: string;
  // geht nicht, weil wir bei den Buttons keine State verändern
  //   onClick: Dispatch<SetStateAction<number>>;
  onClick: () => void;
  // optional props, muss nicht mitgegeben werden
  isMinus?: boolean;
};

const AppButton: React.FC<AppButtonProps> = ({ content, onClick, isMinus }) => {
  return (
    <button
      onClick={onClick}
      className={isMinus ? styles["button--minus"] : styles["button--plus"]}
    >
      {content}
    </button>
  );
};

export default AppButton;

/*
isMinus ? styles["button--minus"] : "button--plus"
ist das gleiche wie:
if (isMinus) {
    return styles["button--minus"];
} else {
    return "button--plus";
}
*/
