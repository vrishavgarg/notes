import { createContext, useContext, useEffect, useReducer } from "react";

const notesContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "notes/create":
      const createdDate = new Date();
      return [
        {
          id: createdDate.toISOString(),
          note: action.payload,
          createdDate: createdDate.toLocaleDateString(),
        },
        ...state,
      ];
    case "notes/edit":
      return state.map((el) =>
        el.id === action.payload.id
          ? { ...el, note: action.payload.note, isEdited: true }
          : el
      );
    case "notes/delete":
      return state.filter((el) => el.id !== action.payload);
    default:
      throw new Error("Invalid action type");
  }
}

function NotesProvider({ children }) {
  const [notes, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("notes"))
  );

  useEffect(
    function () {
      localStorage.setItem("notes", JSON.stringify(notes));
    },
    [notes]
  );

  return (
    <notesContext.Provider value={{ notes, dispatch }}>
      {children}
    </notesContext.Provider>
  );
}

function useNotes() {
  const { notes, dispatch } = useContext(notesContext);
  return { notes, dispatch };
}

export { NotesProvider, useNotes };
