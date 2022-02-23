/* 
  {
    notes: [],
    active: null,
    active: {
      id: "dsadsadsadsada"
      title: ""
      body: "",
      imageUrl: "",
      date: 2132321321321
  }
}
*/

import { type } from "@testing-library/user-event/dist/type";
import { types } from "../types/types";

//Estado inicial
const initialState = {
  notes: [],
  active: null,
};

export const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.notesActive:
      return {
        ...state,
        active: {
          ...action.payload,
        },
      };

    case types.notesAddNew:
      return {
        ...state,
        notes: [action.payload, ...state.notes],
      };

    case types.notesLoad:
      return {
        ...state,
        notes: [...action.payload],
      };

    case types.notesUpdated:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id ? action.payload.note : note
        ),
      };

    case types.notesDelete:
      return {
        ...state,
        active: null,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };

    case type.notesLogoutCleaning:
      return {
        ...state,
        active: null,
        notes: [],
      };

    default:
      return state;
  }
};
