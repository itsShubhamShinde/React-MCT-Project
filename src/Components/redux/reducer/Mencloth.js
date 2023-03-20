export const mencloth = (data = [], action) => {
    switch (action.type) {
      case "add_mencloth":
        return action.data;
      
  
      default:
        return data;
    }
  };