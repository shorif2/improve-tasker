const defaultTask = {
  id: crypto.randomUUID(),
  title: "Learn With Sumit",
  description:
    "Sumit Saha is a technology entrepreneur. In 2008, while studying computer science and engineering at BUET",
  tags: ["Next.js", "React", "JS"],
  priority: "High",
  isFavorite: true,
};

const initialState = {
  taskList: [defaultTask],
};

const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      if (action.payload.isAdd) {
        return {
          ...state,
          taskList: [...state.taskList, action.payload.task],
        };
      } else {
        return {
          ...state,
          taskList: state.taskList.map((item) =>
            item.id === action.payload.task.id ? action.payload.task : item
          ),
        };
      }

    case "Task_Delete":
      if (action.payload.taskId === "DeleteAll") {
        return {
          taskList: [],
        };
      } else {
        return {
          ...state,
          taskList: state.taskList.filter(
            (item) => item.id !== action.payload.taskId
          ),
        };
      }
    case "Favourite":
      return {
        ...state,
        taskList: state.taskList.map((item) =>
          item.id == action.payload.favID
            ? { ...item, isFavorite: !item.isFavorite }
            : item
        ),
      };
    default:
      return state;
  }
};

export { initialState, taskReducer };
