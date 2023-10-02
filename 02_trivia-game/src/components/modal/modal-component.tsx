import { Box, Modal, Typography } from "@mui/material";
import { green, red } from "@mui/material/colors";
import { useEffect, useState } from "react";
import AnswerCard from "../card/answer-card";

type ModalComponentProps = {
  open: boolean;
  handleClose: () => void;
  question: string;
  correctAnswer: string;
  incorrectAnswers: string[];
};

const ModalComponent: React.FC<ModalComponentProps> = ({
  open,
  handleClose,
  question,
  correctAnswer,
  incorrectAnswers,
}) => {
  const [allAnswers, setAllAnswers] = useState<string[]>([]);
  const [checkAnswer, setCheckAnswer] = useState(false);
  const [rightAnswer, setRightAnswer] = useState(false);

  useEffect(() => {
    // gather all answers into an array
    const gatherAllAnswers = () => {
      setAllAnswers([...incorrectAnswers, correctAnswer]);
    };
    gatherAllAnswers();
  }, [incorrectAnswers, correctAnswer]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          background: "#fff",
          width: "50%",
          borderRadius: "10px",
          padding: "30px",
        }}
      >
        <Typography fontWeight={700} fontSize={25}>
          Question
        </Typography>
        <Typography fontSize={18}>{question}</Typography>
        {allAnswers.map((answer: string) => (
          <AnswerCard
            key={answer}
            answer={answer}
            correctAnswer={correctAnswer}
            setCheckAnswer={setCheckAnswer}
            setRightAnswer={setRightAnswer}
          />
        ))}
        {checkAnswer === false ? null : (
          <Box sx={{ marginTop: "20px", width: "100%", textAlign: "center" }}>
            {rightAnswer === true ? (
              <Typography
                sx={{ fontWeight: "bold", fontSize: "50px", color: green[800] }}
              >
                CORRECT
              </Typography>
            ) : (
              <Typography
                sx={{ fontWeight: "bold", fontSize: "50px", color: red[800] }}
              >
                WRONG
              </Typography>
            )}
          </Box>
        )}
      </Box>
    </Modal>
  );
};

export default ModalComponent;
