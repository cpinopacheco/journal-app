import React from "react";
import { Sidebar } from "./Sidebar";
import { useSelector } from "react-redux";
import { NoteScreen } from "../notes/NoteScreen";
import { NothingSelected } from "./NothingSelected";

export const JournalScreen = () => {
  //Nos permite extraer data del state / store
  const { active } = useSelector((state) => state.notes);

  console.log(active);

  return (
    <div className="journal__main-content animate__animated animate__fadeIn animate__faster">
      <Sidebar />

      <main>
        {/* si la active tiene algo o es diferente de null */}
        {/* Dibujamos un componente de manera condicional */}
        {active ? <NoteScreen /> : <NothingSelected />}
      </main>
    </div>
  );
};
