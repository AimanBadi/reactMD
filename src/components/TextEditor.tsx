import { Box, Button } from "@mui/material";
import { useState } from "react";
import { formatBtns } from "../constants/formatBtns";

const TextEditor = ({
  id,
  text,
  handleCancle,
  handleSave,
}: {
  id: number;
  text: string;
  handleCancle: () => void;
  handleSave: (id: number, value: string) => void;
}) => {
  const [selection, setSelection] = useState<string>("");
  const [value, setValue] = useState<string>(text);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 0,
        // border: 1,
        // borderRadius: 1,
      }}
    >
      <Box
        sx={{
          border: 1,
          borderRadius: 1,
          paddingX: 1,
        }}
      >
        {formatBtns.map((btn, idx) => (
          <btn.icon
            key={idx + 1}
            selection={selection}
            text={value}
            setText={setValue}
          />
        ))}
      </Box>
      <textarea
        style={{
          resize: "none",
          outline: "none",
          margin: 0,
          border: "none",
          fontFamily: "Roboto",
          fontWeight: "lighter",
          fontSize: "3.75rem",
          padding: "8px",
        }}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onMouseUp={() => setSelection(window.getSelection() + "")}
      ></textarea>
      <Box
        sx={{
          display: "flex",
          alignSelf: "flex-end",
          gap: 1,
        }}
      >
        <Button variant="contained" onClick={() => handleSave(id, value)}>
          Save
        </Button>
        <Button variant="outlined" onClick={handleCancle}>
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default TextEditor;
