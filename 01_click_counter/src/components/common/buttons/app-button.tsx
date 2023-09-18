import { Button } from "@mui/material";

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
    <Button
      variant='contained'
      onClick={onClick}
      sx={{
        marginLeft: isMinus ? "10px" : 0,
        background: "#330867",
        "&:hover": { background: "#30cfd0" },
        minWidth: 0,
        padding: "0 20px",
        fontSize: "20px",
      }}
    >
      {content}
    </Button>
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
