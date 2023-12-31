import { Box, Typography } from "@mui/material";
import { useState } from "react";
import TriviaCard from "./components/card/trivia-card";
import TriviaQuestionCard from "./components/trivia-questions/trivia-question-card";

function App() {
  const [triviaQuestions, setTriviaQuestions] = useState<[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  return (
    <Box
      component='main'
      sx={{
        height: "100vh",
        width: "100%",
        background: "#232323",
        color: "#FFF",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Typography variant='h2'>This is a trivia game</Typography>
      {triviaQuestions.length > 0 ? (
        <TriviaQuestionCard
          triviaQuestions={triviaQuestions}
          setTriviaQuestions={setTriviaQuestions}
        />
      ) : (
        <TriviaCard
          setTriviaQuestions={setTriviaQuestions}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      )}
    </Box>
  );
}

export default App;

/*
1. Erstelle ein DIV, das den gesamten Bildschirm ausfüllt. Alle Kindelemente
sind centered (flexbox). Component => main
2. Das Div sollte auch ein padding von 5 rem haben und ein background von #232323
3. Color vom div ist #FFF
4. im Div sollte ein Text mit variante h2 stehen mit dem Inhalt:
This is a trivia game
*/
