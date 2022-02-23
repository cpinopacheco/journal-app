import { types } from "../types/types";

//Los reducer reciben 2 parametros, el state y el action
//es importante inicializar el state, nunca dejarlo vacio. puede ser un objeto, string, boolean, etc.

//El state va a estar vacio cuando no este autenticado, cuando este autenticado tendre el siguiente objeto
/* 
  {
    uid: "sdadsadsadsadsad",
    name: "Cristian"
  }
*/
export const authReducer = (state = {}, action) => {
  //Creamos las acciones
  switch (action.type) {
    case types.login:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
      };
    case types.logout:
      return {};

    default:
      return state;
  }
};
