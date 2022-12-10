export const NEW_CONTACT = "NEW_CONTACT";

export const sendContact = (data) => {
  return (dispatch) => {
    return dispatch({
      type: NEW_CONTACT,
      payload: data,
    });
  };
};
