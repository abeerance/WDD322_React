import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

type SelectDropdownProps = {
  id: string;
  inputLabel: string;
  labelId: string;
  label: string;
  elements: [] | { name: string }[];
};

const SelectDropdown: React.FC<SelectDropdownProps> = ({
  id,
  inputLabel,
  labelId,
  label,
  elements,
}) => {
  return (
    <FormControl fullWidth sx={{ marginTop: "25px" }}>
      <InputLabel id={id}>{inputLabel}</InputLabel>
      <Select labelId={labelId} label={label}>
        {elements?.map((element: { name: string }) => (
          <MenuItem key={element.name}>{element.name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectDropdown;

// 1. Base-Komponentenstruktur erstellen (Komponente, export, Props)
// 2. return mit der Struktur der Komponente festlegen (HTML Three)
// 3. Type-Definition für die Props erstellen
// 4. Props destructuring in den Props-Parameter der Komponente
// 5. Props in der Komponente verwenden
