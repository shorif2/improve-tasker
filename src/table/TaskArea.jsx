import { useState } from "react";
import TaskAction from "./TaskAction";
import TaskModal from "./TaskModal";
import TasksView from "./TasksView";

export default function TaskArea() {
  const [showModal, setShowModal] = useState(false);
  return (
    <section className="mb-20" id="tasks">
      <div className="container mx-auto">
        {showModal && <TaskModal />}
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction />
          <TasksView />
        </div>
      </div>
    </section>
  );
}
