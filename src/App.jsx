import { useReducer } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { TaskContext } from "./contexts";
import { initialState, taskReducer } from "./reducer/TaskReducer";
import TaskArea from "./table/TaskArea";

function App() {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <>
      <TaskContext.Provider value={{ state, dispatch }}>
        <Navbar />
        <Banner />
        <TaskArea />
        <Footer />
        <ToastContainer />
      </TaskContext.Provider>
    </>
  );
}

export default App;
