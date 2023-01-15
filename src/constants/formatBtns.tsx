import {
  FormatBold,
  FormatItalic,
  FormatUnderlined,
} from "@mui/icons-material";
import SubscriptIcon from "@mui/icons-material/Subscript";
import SuperscriptIcon from "@mui/icons-material/Superscript";
import { Dispatch, SetStateAction } from "react";

const handleBold = (
  selection: string,
  text: string,
  setText: Dispatch<SetStateAction<string>>
) => {
  const idx = text.indexOf(selection.trim());
  setText(
    text.slice(0, idx) +
      "**" +
      selection.trim() +
      "**" +
      text.slice(idx + selection.length)
  );
};
const handleItalics = (
  selection: string,
  text: string,
  setText: Dispatch<SetStateAction<string>>
) => {
  const idx = text.indexOf(selection.trim());
  setText(
    text.slice(0, idx) +
      "*" +
      selection.trim() +
      "*" +
      text.slice(idx + selection.length)
  );
};

const handleUnderline = (
  selection: string,
  text: string,
  setText: Dispatch<SetStateAction<string>>
) => {
  const idx = text.indexOf(selection.trim());
  setText(
    text.slice(0, idx) +
      "<u>" +
      selection.trim() +
      "</u>" +
      text.slice(idx + selection.length)
  );
};

const handleSubscript = (
  selection: string,
  text: string,
  setText: Dispatch<SetStateAction<string>>
) => {
  const idx = text.indexOf(selection.trim());
  setText(
    text.slice(0, idx) +
      "<sub>" +
      selection.trim() +
      "</sub>" +
      text.slice(idx + selection.length)
  );
};

const handleSuperscript = (
  selection: string,
  text: string,
  setText: Dispatch<SetStateAction<string>>
) => {
  const idx = text.indexOf(selection.trim());
  setText(
    text.slice(0, idx) +
      "<sup>" +
      selection.trim() +
      "</sup>" +
      text.slice(idx + selection.length)
  );
};

export const formatBtns = [
  {
    name: "bold",
    icon: ({
      selection,
      text,
      setText,
    }: {
      selection: string;
      text: string;
      setText: Dispatch<SetStateAction<string>>;
    }) => (
      <FormatBold
        onClick={() => handleBold(selection, text, setText)}
        sx={{
          height: "100%",
          "&:hover": {
            bgcolor: "#e7ebf0",
          },
        }}
      />
    ),
  },
  {
    name: "italic",
    icon: ({
      selection,
      text,
      setText,
    }: {
      selection: string;
      text: string;
      setText: Dispatch<SetStateAction<string>>;
    }) => (
      <FormatItalic
        onClick={() => handleItalics(selection, text, setText)}
        sx={{
          height: "100%",
          "&:hover": {
            bgcolor: "#e7ebf0",
          },
        }}
      />
    ),
  },
  {
    name: "underline",
    icon: ({
      selection,
      text,
      setText,
    }: {
      selection: string;
      text: string;
      setText: Dispatch<SetStateAction<string>>;
    }) => (
      <FormatUnderlined
        onClick={() => handleUnderline(selection, text, setText)}
        sx={{
          height: "100%",
          "&:hover": {
            bgcolor: "#e7ebf0",
          },
        }}
      />
    ),
  },
  {
    name: "subscript",
    icon: ({
      selection,
      text,
      setText,
    }: {
      selection: string;
      text: string;
      setText: Dispatch<SetStateAction<string>>;
    }) => (
      <SubscriptIcon
        onClick={() => handleSubscript(selection, text, setText)}
        sx={{
          height: "100%",
          "&:hover": {
            bgcolor: "#e7ebf0",
          },
        }}
      />
    ),
  },
  {
    name: "superscript",
    icon: ({
      selection,
      text,
      setText,
    }: {
      selection: string;
      text: string;
      setText: Dispatch<SetStateAction<string>>;
    }) => (
      <SuperscriptIcon
        onClick={() => handleSuperscript(selection, text, setText)}
        sx={{
          height: "100%",
          "&:hover": {
            bgcolor: "#e7ebf0",
          },
        }}
      />
    ),
  },
];
