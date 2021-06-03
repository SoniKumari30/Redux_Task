const fieldReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_NAME": {
      console.log("reducer", action.payload);
      return action.payload;//
    }

    default: {
      return ""
    }
  }
};

export default fieldReducer;
