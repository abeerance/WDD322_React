import { Card, CardContent, Typography } from "@mui/material";

type AnswerCardProps = {
  answer: string;
  correctAnswer: string;
  setRightAnswer: React.Dispatch<React.SetStateAction<boolean>>;
  setCheckAnswer: React.Dispatch<React.SetStateAction<boolean>>;
};

const AnswerCard: React.FC<AnswerCardProps> = ({
  answer,
  correctAnswer,
  setRightAnswer,
  setCheckAnswer,
}) => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  return (
    <Card
      sx={{
        margin: "15px 0",
        background: `#${randomColor}`,
        cursor: "pointer",
      }}
      onClick={() => {
        // the user has selected an answer
        setCheckAnswer(true);
        // check if the answer is correct
        if (answer === correctAnswer) {
          setRightAnswer(true);
        } else {
          setRightAnswer(false);
        }
      }}
    >
      <CardContent>
        <Typography sx={{ color: "#fff" }}>{answer}</Typography>
      </CardContent>
    </Card>
  );
};

export default AnswerCard;
