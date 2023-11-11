import Note from "./Note";
import { useNotes } from "../context/notesContext";

function Notes({ search }) {
  const { notes } = useNotes();
  const filteredNotes = notes?.filter((note) => note.note.includes(search));

  return (
    <div className="notes">
      {filteredNotes?.map((note) => (
        <Note note={note} key={note.id} id={note.id} isCreating={false} />
      ))}
      <Note isCreating={true} />
    </div>
  );
}

export default Notes;
