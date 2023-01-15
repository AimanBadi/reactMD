import Note from "./Note";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const NotesFeed = () => {
  const { notes } = useSelector((store: RootState) => store.notes);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16rem",
      }}
    >
      {notes.map((note: any) => (
        <Note key={note.id} id={note.id} text={note.quote} />
      ))}
    </div>
  );
};

export default NotesFeed;
