export const userFind = (userID) => {
    if (userID < 2000) {
      return "Human Resources Managament";
    } else if (userID < 3000) {
      return "Sales Department";
    } else if (userID < 4000) {
      return "Advertisement Department";
    }
  }

  export const assignedDepartment = (userID) => {
    if (userID === 1) {
      return "Human Resources Managament";
    } else if (userID === 2) {
      return "Sales Department";
    } else if (userID === 3) {
      return "Advertisement Department";
    }
  }

  export const tasksStatusFinder = (e) => {
    if (e === 0) {
      return "Pending";
    } else if (e === 1) {
      return "Completed";
    } else if (e === 2) {
      return "Reject"; 
    }
  };