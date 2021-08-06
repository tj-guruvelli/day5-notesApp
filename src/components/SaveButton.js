function Save({ notes, handleSave }) {
    function saveStuff(){
      handleSave();
      localStorage.setItem("notes", notes);
    }
    return <button className="bg-blue-500 
    transition transform 
    hover:-translate-y-1 
    motion-reduce:transition-none 
    motion-reduce:transform-none
    text-white rounded-full
    py-2 px-4
    text-center font-bold"
    onClick={saveStuff}>Save</button>;
  }
  
  export default Save;