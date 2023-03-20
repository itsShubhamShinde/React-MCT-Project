export const womencloth = (data = [], action) => {
    switch (action.type) {
      case "add_womencloth":
        return action.data;
      
  
      default:
        return data;
    }
  };