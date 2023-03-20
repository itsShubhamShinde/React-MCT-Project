export const cartData = (data = [], action) => {
  switch (action.type) {
    case "add_To_Cart":
      return action.data;
    

    default:
      return data;
  }
};
