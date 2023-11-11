import { useState } from "react";
import { HiArrowDownOnSquare, HiPencilSquare, HiTrash } from "react-icons/hi2";
import { useNotes } from "../context/notesContext";

function Note({ id, isCreating }) {
  const { notes, dispatch } = useNotes();
  const note = notes.filter((note) => note.id === id)[0];
  const [noteValue, setNoteValue] = useState(isCreating ? "" : note.note);
  const [isEditing, setIsEditing] = useState(false);

  function handleEdit() {
    setIsEditing(true);
  }

  function handleSave() {
    if (!noteValue) return;
    setIsEditing(false);
    if (isCreating) {
      dispatch({ type: "notes/create", payload: noteValue });
      setNoteValue("");
    } else
      dispatch({ type: "notes/edit", payload: { id: id, note: noteValue } });
  }

  function handleDelete() {
    dispatch({ type: "notes/delete", payload: id });
  }

  return (
    <div className="buttonwrapper">
      <textarea
        value={noteValue}
        className={`note ${isCreating ? "note-create" : ""}`}
        onChange={(e) => setNoteValue(e.target.value)}
        placeholder={
          isCreating
            ? "Type to add a new note ..."
            : "Cannot make note empty. Please type something..."
        }
        disabled={!isEditing && !isCreating}
      />
      {isCreating ? (
        <button className="note-btn" onClick={handleSave}>
          <HiArrowDownOnSquare /> Save
        </button>
      ) : isEditing ? (
        <button className="note-btn" onClick={handleSave}>
          <HiArrowDownOnSquare /> Save
        </button>
      ) : (
        <>
          <p className="note-date">{`${note.createdDate} ${
            note.isEdited ? "(edited)" : ""
          }`}</p>
          <button className="note-btn note-btn--edit" onClick={handleEdit}>
            <HiPencilSquare />
          </button>
          <button className="note-btn" onClick={handleDelete}>
            <HiTrash />
          </button>
        </>
      )}
    </div>
  );
}

export default Note;
