function Save({ notes, handleSave }) {
  function saving() {
    handleSave();
    localStorage.setItem("notes", notes);
  }
  return (
    <button
      className="transition duration-500 ease-in-out bg-blue-600 hover:bg-green-600 transform hover:-translate-y-1 hover:scale-110
    text-white rounded-full
    py-2 px-4
    text-center font-bold"
      onClick={saving}
    >
      Save
    </button>
  );
}

export default Save;
