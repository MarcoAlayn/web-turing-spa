import { NEW_CONTACT } from "./actions";

const initialState = {
  datosContacto: {},
};

const RootReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_CONTACT:
      console.log("reducer");
      return {
        ...state,
        datosContacto: action.payload,
      };

    default:
      return state;
  }
};

export default RootReducer;
