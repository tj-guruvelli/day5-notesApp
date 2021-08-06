import React from "react";

const NoteArea = ({ value, onChange }) => {
  const note_size = 20;
  return (
    <div className="flex flex-row justify-center mb-6">
      <textarea
        value={value}
        onChange={onChange}
        placeholder="Enter text here:"
        className="border-2 border-black-500 transistion-all hover:scale-150 mb-4 w-full h-32 rounded-md p-2 shadow-lg resize-none text-xl"
        style={{
            width: `${note_size}rem`,
            height: `${note_size}rem`
        }}
      ></textarea>
    </div>
  );
};

export default NoteArea;
