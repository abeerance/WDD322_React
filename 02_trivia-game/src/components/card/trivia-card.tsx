/*
1. Erstelle die Komponente names TriviaCard
2.  Benütze die Card-Component von MUI -> indwidth 600px margintop 50px
3. in der Karte haben wir einen Text mit dem Inhalt:
Pick out a combination to generate trivia cards
*/

import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { teal } from "@mui/material/colors";
import { useEffect, useState } from "react";
import { apiClient } from "../../constants/api-client";
import { Globals } from "../../utils/utils";
import SelectDropdown from "../common/select-dropdown";

const TriviaCard: React.FC = () => {
  // 1. Erstelle ein useState für die Kategorien
  const [categories, setCategories] = useState<[]>([]);

  // 2. Erstelle ein useEffect, das die Kategorien von der API holt
  useEffect(() => {
    // 3. Erstelle eine async Funktion, die die Kategorien von der API holt
    const getAllCategories = async () => {
      // 4. Response variable erstellen, die die Daten von der API beinhaltet
      const response = await apiClient.get("/api_category.php");
      // 5. Wenn die Response 200 (OK) ist, dann setCategories mit den Daten von der API
      if (response.status === 200) {
        // 6. setCategories mit den Daten von der API
        setCategories(response.data.trivia_categories);
      } else {
        // 7. Wenn die Response nicht 200 ist, dann logge den Fehler
        console.log("Error");
      }
    };
    // 8. getAllCategories aufrufen
    getAllCategories();
    // 9. useEffect nur einmal aufrufen
  }, []);

  return (
    <Card sx={{ minWidth: "600px", marginTop: "50px" }}>
      <CardContent>
        <Typography>Pick out a combination to generate trivia cards</Typography>
        <Box component='form'>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* 1. Textfield für die Nummern von Fragen */}
            <TextField
              id='number-of-questions'
              label='Number'
              type='number'
              fullWidth
              sx={{ marginTop: "25px" }}
            />
            {/* 2. Formcontrol für die Kategorie */}
            <SelectDropdown
              id='simple-select-helper-category'
              inputLabel='Category'
              labelId='simple-select-helper-category'
              label='Category'
              elements={categories}
            />
            {/* 3. Formcontrol für die Schwierigkeit / Difficulty */}
            <SelectDropdown
              id='simple-select-helper-diff'
              inputLabel='Difficulty'
              labelId='simple-select-helper-diff'
              label='Difficulty'
              elements={Globals.difficulties}
            />
            {/* 4. Formcontrol für die Typ / Type */}
            <SelectDropdown
              id='simple-select-helper-type'
              inputLabel='Type'
              labelId='simple-select-helper-type'
              label='Type'
              elements={Globals.type}
            />

            {/* 5. Button für den Submit */}
            <Button
              variant='contained'
              sx={{
                height: "56px",
                paddingX: "30px",
                marginTop: "25px",
                marginBottom: "10px",
                background: teal[900],
              }}
            >
              Generate Trivia Cards
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TriviaCard;
