export const electronics = (data = [], action) => {
  switch (action.type) {
    case "add_electronics":
      return action.data;
    

    default:
      return data;
  }
};