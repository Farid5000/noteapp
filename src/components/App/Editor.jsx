// Menu dari DasboardTempalte diimport ke dini dengan format dibawah

import DasboardTemplate from "../Template/DasboardTemplate";
import Note from "./Note";

export const Editor = () => {
  return (
    <DasboardTemplate>
      <div className="grid grid-cols-3 gap-6">
        <Note /> <Note /> <Note />
      </div>
    </DasboardTemplate>
  );
};

export default Editor;
