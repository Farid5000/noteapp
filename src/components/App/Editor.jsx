// Menu dari DasboardTempalte diimport ke dini dengan format dibawah
"use client";
import { useState } from "react";
import DasboardTemplate from "../Template/DasboardTemplate";
import Note from "./Note";
import { notes } from "@/lib/dummy/notes";

export const Editor = () => {
  const [notesData, setNotesData] = useState(notes);

  const createNote = () => {
    const newNotesData = [...notesData];
    const notesLength = newNotesData.length;
    newNotesData.push({
      id: notesLength + 1,
      body: "notebaru",
      color: "#f04567",
    });
    setNotesData(newNotesData);
  };

  return (
    <DasboardTemplate onNewNote={createNote}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {notes.map(({ id, body, color }) => {
          return <Note key={id} body={body} color={color} />;
        })}
      </div>
    </DasboardTemplate>
  );
};

export default Editor;
