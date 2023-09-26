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
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { teal } from "@mui/material/colors";
import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { apiClient } from "../../constants/api-client";
import { Globals } from "../../utils/utils";
import SelectDropdown from "../common/select-dropdown";

type TriviaCardProps = {
  setTriviaQuestions: Dispatch<SetStateAction<[]>>;
};

const TriviaCard: React.FC<TriviaCardProps> = ({ setTriviaQuestions }) => {
  // 1. Erstellt useStates für alle vier Inputs (jeder Input hat einen eigenen useState)
  const [selectedNumber, setSelecterNumber] = useState<number>(10);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");
  // 1.5 TextField (benützt Value für den Wert), Select (benützt Value für den Wert)
  // 2. Implementiert eventListeners für die Inputs (Textfields, SelectDropDowns)
  // 3. Damit der eventListener im SelectDropDown funktioniert, muss dieser heruntergeproppt werden
  // 4. Aktualisiert die useStates anhand den ausgewählten Werten durch die eventListeners
  // 5. Für die Überprüfung könnt ihr concole.log benützen

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

  // 10. Erstellt ein useState für die triviaQuestions
  // 11. Erstellt einen handleSubmit (event: FormEvent) => void
  // 12. Ist eine Async function
  // 13. Im handleSubmit wird dann die API aufgerufen
  // 13.5 Schaut euchd as beispiel von getAllCategories an
  // 14. Die API-URL wird anhand ternary operators und den selected Values zusammengesetzt
  // 15. Wenn die Response 200 ist, dann setzt die triviaQuestions mit den Daten von der API

  const handleSubmit = async (e: FormEvent) => {
    // preventDefault damit die Seite nicht neu geladen wird
    e.preventDefault();

    const apiResponse = await apiClient.get(
      `/api.php?amount=${selectedNumber}${
        selectedCategory !== "" ? `&category=${selectedCategory}` : ""
      }${selectedDifficulty !== "" ? `&difficulty=${selectedDifficulty}` : ""}${
        selectedType !== "" ? `&type=${selectedType}` : ""
      }`
    );

    if (apiResponse.status === 200) {
      setTriviaQuestions(apiResponse.data.results);
    } else {
      console.log("Error");
    }
  };

  return (
    <Card sx={{ minWidth: "600px", marginTop: "50px" }}>
      <CardContent>
        <Typography>Pick out a combination to generate trivia cards</Typography>
        <Box component='form' noValidate onSubmit={handleSubmit}>
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
              value={selectedNumber}
              inputProps={{ inputMode: "numeric", pattern: "[1-20]*" }}
              onChange={(event) => {
                setSelecterNumber(Number(event.target.value));
              }}
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
              onChange={(event: SelectChangeEvent) => {
                setSelectedCategory(event.target.value as string);
              }}
            />
            {/* 3. Formcontrol für die Schwierigkeit / Difficulty */}
            <SelectDropdown
              id='simple-select-helper-diff'
              inputLabel='Difficulty'
              labelId='simple-select-helper-diff'
              label='Difficulty'
              elements={Globals.difficulties}
              onChange={(event: SelectChangeEvent) => {
                setSelectedDifficulty(event.target.value as string);
              }}
            />
            {/* 4. Formcontrol für die Typ / Type */}
            <SelectDropdown
              id='simple-select-helper-type'
              inputLabel='Type'
              labelId='simple-select-helper-type'
              label='Type'
              elements={Globals.type}
              onChange={(event: SelectChangeEvent) => {
                setSelectedType(event.target.value as string);
              }}
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
              type='submit'
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
