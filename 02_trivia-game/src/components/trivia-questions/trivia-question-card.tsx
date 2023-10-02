import { Box, Button, Grid, Typography } from "@mui/material";
import { teal } from "@mui/material/colors";
import { Dispatch, SetStateAction } from "react";
import TriviaQuestion from "./trivia-questions";

type TriviaQuestionCardProps = {
  triviaQuestions: [];
  setTriviaQuestions: Dispatch<SetStateAction<[]>>;
};

const TriviaQuestionCard: React.FC<TriviaQuestionCardProps> = ({
  triviaQuestions,
  setTriviaQuestions,
}) => {
  console.log(triviaQuestions);

  return (
    <>
      <Button
        variant='contained'
        sx={{ minHeight: "56px", paddingX: "30px", background: teal[900] }}
        onClick={() => {
          setTriviaQuestions([]);
        }}
      >
        Fragen Zurücksetzen
      </Button>
      <Box sx={{ display: "flex" }}>
        <Typography variant='h4'>
          Wähle eine Frage aus von der Kategorie
        </Typography>
        {/* Array mapping & slicing für die Kategorie */}
        {triviaQuestions.length > 0 &&
          triviaQuestions.slice(0, 1).map((question: { category: string }) => (
            <Typography
              key={question.category}
              variant='h4'
              sx={{ marginLeft: "10px" }}
            >
              {question.category}
            </Typography>
          ))}
      </Box>
      <Grid
        container
        sx={{
          gridTemplateColumns: "repeat(auto-fill, 110px)",
          justifyContent: "center",
        }}
      >
        {/* array mapping von allen fragen */}
        {triviaQuestions.map(
          (question: {
            correct_answer: string;
            difficulty: string;
            incorrect_answers: string[];
            question: string;
            type: string;
          }) => {
            return (
              <TriviaQuestion
                key={question.question}
                difficulty={question.difficulty}
                type={question.type}
              />
            );
          }
        )}
      </Grid>
    </>
  );
};

export default TriviaQuestionCard;
