import React from "react";

const Note = ({ body, color }) => {
  return (
    <div
      style={{ background: color }}
      className="w-full h-60 p-6 rounded-xl text-xl font-medium tracking-tight"
    >
      {body}
    </div>
  );
};

export default Note;
