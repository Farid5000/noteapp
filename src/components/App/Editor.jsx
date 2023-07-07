// Menu dari DasboardTempalte diimport ke dini dengan format dibawah
"use client";

import DasboardTemplate from "../Template/DasboardTemplate";
import Note from "./Note";
import { notes } from "@/lib/dummy/notes";

export const Editor = () => {
  return (
    <DasboardTemplate onNewNote={() => onNewNote()}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {notes.map(({ id, body, color }) => {
          return <Note key={id} body={body} color={color} />;
        })}
      </div>
    </DasboardTemplate>
  );
};

export default Editor;
