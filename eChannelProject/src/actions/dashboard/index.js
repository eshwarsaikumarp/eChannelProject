import data from "../../_mockDB/Data.json";
// import navData from "../_mockDB/navData.json";

export const fetchTicketData = () => dispatch => {
  dispatch({
    type: "TICKET_DATA",
    payload: data
  });
};

export const getRow = data => dispatch => {
  dispatch({
    type: "GET_ROW",
    payload: data
  });
};
