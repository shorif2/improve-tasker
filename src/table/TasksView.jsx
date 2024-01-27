import { useContext } from "react";
import { TaskContext } from "../contexts";
import TaskItems from "./TaskItems";

export default function TasksView({ filter, onDelete, onEdit }) {
  const { state, dispatch } = useContext(TaskContext);
  function handleFav(favID) {
    dispatch({
      type: "Favourite",
      payload: {
        favID: favID,
      },
    });
  }

  // Generate Random color
  const generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  return (
    <div className="overflow-auto">
      <table className="table-fixed overflow-auto xl:w-full">
        <thead>
          <tr>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
              {" "}
              Title{" "}
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-full">
              {" "}
              Description{" "}
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
              {" "}
              Tags{" "}
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
              {" "}
              Priority{" "}
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
              {" "}
              Options{" "}
            </th>
          </tr>
        </thead>
        <tbody>
          {filter
            ? filter.map((task) => <TaskItems key={task.id} task={task} />)
            : state.taskList.map((task) => (
                <TaskItems key={task.id} task={task} />
              ))}
        </tbody>
      </table>
    </div>
  );
}
