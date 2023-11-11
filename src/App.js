import Header from "./components/Header";
import Search from "./components/Search";
import Notes from "./components/Notes";
import { NotesProvider } from "./context/notesContext";
import { useState } from "react";

export default function App() {
  const [search, setSearch] = useState("");

  return (
    <NotesProvider>
      <div className="app">
        <Header />
        <Search search={search} setSearch={setSearch} />
        <Notes search={search} />
      </div>
    </NotesProvider>
  );
}
