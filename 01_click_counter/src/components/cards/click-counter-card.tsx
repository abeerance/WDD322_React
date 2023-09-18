import { Box, Card, CardContent, Typography } from "@mui/material";
import { useState } from "react";
import AppButton from "../common/buttons/app-button";
import "./click-counter-card.css";

/* INFO TO PROPPING */
// 1. Definieren von der prop (Property die vererbt wird, im Parent, in diesem Beispiel title)
// 2. Definieren von dem Typ der prop (in diesem Beispiel string), weil die ComponentName ClickCounterCard ist,
// heißt die prop ClickCounterCardProps
// 3. Verlinkung der ComponentProps mit der ComponentName (in diesem Beispiel ClickCounterCardProps)
// 4. Prop-Description (in diesem Beispiel title)
// 5. Einsetzen des Props in die Component (in diesem Beispiel title)

type ClickCounterCardProps = {
  title: string;
};

const ClickCounterCard: React.FC<ClickCounterCardProps> = ({ title }) => {
  // const [charName, setCharName] = useState("Luffy");
  // const [age, setAge] = useState(20);
  const [currentCount, setCurrentCount] = useState(0);

  return (
    <Card
      sx={{
        borderRadius: "10px",
        minHeight: "200px",
        backgroundImage: "linear-gradient(90deg, #330867 0%, #30cfd0 100%);",
        display: "grid",
        gap: "20px",
        gridTemplateColumns: "2fr 1fr",
      }}
    >
      <CardContent>
        <Typography variant='h5' sx={{ fontWeight: 600, color: "#fff" }}>
          {title}
        </Typography>
        <Typography
          sx={{
            textAlign: "left",
            marginTop: "20px",
            color: "#fff",
            fontWeight: 500,
          }}
        >
          This is just a simple click counter card
        </Typography>
      </CardContent>
      <CardContent
        sx={{
          background: "#fafafa",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography>
          Current count:
          <Box component='span' fontWeight={900}>
            {currentCount}
          </Box>
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <AppButton
            content='+'
            onClick={() => {
              setCurrentCount(currentCount + 1);
            }}
          />
          <AppButton
            content='-'
            isMinus
            onClick={() => {
              setCurrentCount(currentCount - 1);
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default ClickCounterCard;
