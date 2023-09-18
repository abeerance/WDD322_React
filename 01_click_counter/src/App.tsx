import { Box, Typography } from "@mui/material";
import "./App.css";
import ClickCounterCard from "./components/cards/click-counter-card";

// normale Funcktionschreibweise
// function App() {
//   return <></>;
// }

// Arrow Function mit named export
// export const App = () => {
//   return <></>;
// };

// Arrow Function
// const App = () => {
//   return <></>;
// };

// Arrow Function mit Typisierung
const App: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant='h1' fontWeight={700}>
        My very first React App
      </Typography>
      <Typography variant='h2' fontWeight={500} sx={{ marginY: "40px" }}>
        This will be a simple click counter
      </Typography>
      <ClickCounterCard title='A simple click counter card' />
    </Box>
  );
};

export default App;
