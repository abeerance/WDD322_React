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
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { teal } from "@mui/material/colors";

const TriviaCard: React.FC = () => {
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
            <FormControl fullWidth sx={{ marginTop: "25px" }}>
              <InputLabel id='simple-select-helper-category'>
                Category
              </InputLabel>
              <Select labelId='simple-select-helper-category' label='Category'>
                <MenuItem>
                  <em>None</em>
                </MenuItem>
              </Select>
            </FormControl>
            {/* 3. Formcontrol für die Schwierigkeit / Difficulty */}
            <FormControl fullWidth sx={{ marginTop: "25px" }}>
              <InputLabel id='simple-select-helper-diff'>Difficulty</InputLabel>
              <Select labelId='simple-select-helper-diff' label='Difficulty'>
                <MenuItem>
                  <em>None</em>
                </MenuItem>
              </Select>
            </FormControl>
            {/* 4. Formcontrol für die Typ / Type */}
            <FormControl fullWidth sx={{ marginTop: "25px" }}>
              <InputLabel id='simple-select-helper-type'>Type</InputLabel>
              <Select labelId='simple-select-helper-type' label='Type'>
                <MenuItem>
                  <em>None</em>
                </MenuItem>
              </Select>
            </FormControl>
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
