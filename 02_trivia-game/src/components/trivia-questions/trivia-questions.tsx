/*
    1. Conditional Rendering anhand von triviaQuestions
        -> Falls keine triviaQuestions vorhanden sind, dann wird die TriviaCard angezeigt
        -> Falls triviaQuestions vorhanden sind, dann wird die TriviaQuestions Komponente angezeigt
    2. In der TriviaQuestion komponente sollte ein Button sein, welches die TriviaQuestions zurücksetzt,
        damit die TriviaCard wieder angezeigt wird.
    3. Die TriviaQuestions KOmponente hat den Inhalt:
        -> Button (zurücksetzen)
        -> Typographie (Wähle eine Karte aus)
        -> Einen GridContainer
    4. Im GridContainer wird die TriviaQuestionCard anhand der anzahle von triviaQuestions gemappt
    5. Das Grid hat einen autofill, styling der Karten ist euch überlassen.
    6. BONUS: Jede Karte soll eine andere / zufällige Farbe haben (normales JavaScript)
*/

import { Box, Typography } from "@mui/material";
import { useState } from "react";
import ModalComponent from "../modal/modal-component";

type TriviaQuestionProps = {
  question: string;
  difficulty: string;
  type: string;
  correctAnswer: string;
  incorrectAnswers: string[];
};

const TriviaQuestion: React.FC<TriviaQuestionProps> = ({
  question,
  difficulty,
  type,
  correctAnswer,
  incorrectAnswers,
}) => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      component='button'
      sx={{
        border: "none",
        minHeight: "200px",
        minWidth: "200px",
        background: `#${randomColor}`,
        margin: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        borderRadius: "15px",
        cursor: "pointer",
      }}
      onClick={handleOpen}
    >
      <Typography variant='h5' sx={{ color: "#fff" }}>
        {difficulty.toUpperCase()}
      </Typography>
      <Typography variant='h6' sx={{ color: "#fff" }}>
        {type}
      </Typography>
      {open === false ? null : (
        <ModalComponent
          open={open}
          handleClose={handleClose}
          question={question}
          correctAnswer={correctAnswer}
          incorrectAnswers={incorrectAnswers}
        />
      )}
    </Box>
  );
};

export default TriviaQuestion;
