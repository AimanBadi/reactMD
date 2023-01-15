import { Typography } from "@mui/material";
import Markdown from "marked-react";
import { marked } from "marked";
import { MouseEventHandler, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editNote } from "../features/notes/notesSlice";
import { AppDispatch, RootState } from "../store";
import TextEditor from "./TextEditor";

const Note = ({ id, text }: { id: number; text: string }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { notes } = useSelector((store: RootState) => store.notes);
  const [isEditing, setIsEditing] = useState(false);

  const handleClick: MouseEventHandler = (event) => {
    if (event.detail === 2) {
      setIsEditing(true);
    }
  };

  const handleSave = (id: number, quote: string) => {
    notes.map((note: any) => {
      if (note.id === id) {
        dispatch(editNote({ id, quote }));
      }
    });
    setIsEditing(false);
  };

  return (
    <div
      style={{
        maxWidth: "980px",
        wordWrap: "break-word",
      }}
    >
      {isEditing ? (
        <TextEditor
          id={id}
          text={text}
          handleCancle={() => setIsEditing(false)}
          handleSave={handleSave}
        />
      ) : (
        <Typography variant="h2" onClick={handleClick}>
          <div dangerouslySetInnerHTML={{ __html: marked.parse(text) }}></div>
        </Typography>
      )}
    </div>
  );
};

export default Note;
