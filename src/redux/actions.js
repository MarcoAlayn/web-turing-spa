import axios from "axios";
export const NEW_CONTACT = "NEW_CONTACT";

export const sendContact = (data) => {
  try {
    console.log("data", data);
    return async (dispatch) => {
      const newContact = await axios.post("http://localhost:3001/user/", data);
      return dispatch({
        type: NEW_CONTACT,
        payload: newContact,
      });
    };
  } catch (error) {
    console.log("error", error);
  }
};
