import { createSlice } from "@reduxjs/toolkit";
import { notes } from "../../constants";

const initialState = {
  notes,
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    editNote: (state, { payload }) => {
      const { id, quote } = payload;
      state.notes.map((note) => {
        if (note.id === id) {
          note.quote = quote;
        }
      });
    },
  },
});

export const { editNote } = notesSlice.actions;
export default notesSlice.reducer;
