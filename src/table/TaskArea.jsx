import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { TaskContext } from "../contexts";
import TaskAction from "./TaskAction";
import TaskModal from "./TaskModal";
import TasksView from "./TasksView";

export default function TaskArea() {
  const [showModal, setShowModal] = useState(false);

  const [toUpdate, setToUpdate] = useState(null);
  const { state, dispatch } = useContext(TaskContext);
  const [filter, setFilter] = useState(null);

  function handleDelete(taskId) {
    const confirm = window.alert(`Click "OK" to Delete`);

    if (!confirm) {
      dispatch({
        type: "Task_Delete",
        payload: {
          taskId,
        },
      });

      toast.success(`Task Delete Successfully !!`);
      handleClose();
    } else {
      return;
    }
  }

  function handleAddTask(e, newTask, isAdd) {
    e.preventDefault();

    if (
      newTask.title === "" ||
      newTask.description === "" ||
      newTask.priority === ""
    ) {
      toast.error("Input field not be empty");
      return;
    } else {
      dispatch({
        type: "ADD_TASK",
        payload: {
          task: newTask,
          isAdd: isAdd,
        },
      });
      toast.success(
        `${isAdd ? "Task Added Successfully" : "Task Update Successfully"} !!`
      );
      handleClose();
    }
  }

  function handEditTask(task) {
    setToUpdate(task);
    setShowModal(true);
  }

  function handleSearch(e, searchTerm) {
    e.preventDefault();

    if (searchTerm) {
      setFilter(
        state.taskList.filter((item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setFilter(null);
    }
  }

  function handleClose() {
    setShowModal(false);
    setToUpdate(null);
  }

  return (
    <section className="mb-20" id="tasks">
      <div className="container mx-auto">
        {showModal && (
          <TaskModal
            onClose={handleClose}
            onTaskAdd={handleAddTask}
            taskToUpdate={toUpdate}
          />
        )}
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction
            onShow={setShowModal}
            onDeleteAll={handleDelete}
            onSearch={handleSearch}
          />

          {state.taskList.length == 0 ? (
            <p className="text-center text-3xl">
              No Tasks Found. Please Add One.
            </p>
          ) : (
            <TasksView
              onDelete={handleDelete}
              onEdit={handEditTask}
              filter={filter}
            />
          )}
        </div>
      </div>
    </section>
  );
}
