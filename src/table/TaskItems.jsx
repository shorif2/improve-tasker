import { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { TaskContext } from "../contexts";

export default function TaskItems({ task, onDelete, onEdit }) {
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
    <>
      <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
        <td>
          <button onClick={() => handleFav(task.id)}>
            {task.isFavorite ? (
              <FaStar className="text-xl" color="yellow" />
            ) : (
              <FaStar className="text-xl" color="gray" />
            )}
          </button>
        </td>
        <td>{task.title}</td>
        <td>
          <div>{task.description}</div>
        </td>
        <td>
          <ul className="flex justify-center gap-1.5 flex-wrap">
            {task.tags.map((tags) => (
              <li key={tags}>
                <span
                  className={`inline-block h-5 whitespace-nowrap rounded-[45px]  px-2.5 text-sm capitalize text-[#F4F5F6]`}
                  style={{ backgroundColor: generateRandomColor() }}
                >
                  {tags}
                </span>
              </li>
            ))}
          </ul>
        </td>
        <td className="text-center">{task.priority}</td>
        <td>
          <div className="flex items-center justify-center space-x-3">
            <button onClick={() => onDelete(task.id)} className="text-red-500">
              Delete
            </button>
            <button onClick={() => onEdit(task)} className="text-blue-500">
              Edit
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}
