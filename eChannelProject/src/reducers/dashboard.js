const initialState = {
  ticketData: [],
  getRow: {}
};

const dashboard = (state = initialState, action) => {
  console.log("fghjk", action.payload)
  switch (action.type) {
    case "TICKET_DATA":
      return { ...state, ticketData: action.payload };
    case "GET_ROW":
      return { ...state, getRow: action.payload };
    default:
      return { ...state };
  }
};

export default dashboard;
