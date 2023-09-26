import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

type SelectDropdownProps = {
  id: string;
  inputLabel: string;
  labelId: string;
  label: string;
  elements: [] | { id: string; name: string }[];
  onChange: (event: SelectChangeEvent) => void;
};

const SelectDropdown: React.FC<SelectDropdownProps> = ({
  id,
  inputLabel,
  labelId,
  label,
  elements,
  onChange,
}) => {
  return (
    <FormControl fullWidth sx={{ marginTop: "25px" }}>
      <InputLabel id={id}>{inputLabel}</InputLabel>
      <Select labelId={labelId} label={label} onChange={onChange}>
        {elements?.map((element: { id: number | string; name: string }) => (
          <MenuItem key={element.name} value={element.id}>
            {element.name}
          </MenuItem>
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
