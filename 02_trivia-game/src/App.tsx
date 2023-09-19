import { Box, Typography } from "@mui/material";
import TriviaCard from "./components/card/trivia-card";

function App() {
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
      <TriviaCard />
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
