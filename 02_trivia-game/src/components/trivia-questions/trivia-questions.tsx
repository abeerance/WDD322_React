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
import { generateRandomColor } from "../../utils/random-colors/generate-random-colors";

type TriviaQuestionProps = {
  difficulty: string;
  type: string;
};

const TriviaQuestion: React.FC<TriviaQuestionProps> = ({
  difficulty,
  type,
}) => {
  const randomColor = generateRandomColor;

  return (
    <Box
      sx={{
        minHeight: "200px",
        minWidth: "200px",
        background: `#${randomColor}`,
        margin: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        borderRadius: "15px",
      }}
    >
      <Typography variant='h5'>{difficulty.toUpperCase()}</Typography>
      <Typography variant='h6'>{type}</Typography>
    </Box>
  );
};

export default TriviaQuestion;
