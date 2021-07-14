import React from "react";

import TaskCard from "./components/TaskCard/TaskCard";
import TaskForm from "./components/TaskForm/TaskForm.js";
const App = () => {
  return (
    <div>
      <TaskCard />
      <TaskForm />
    </div>
  );
};

export default App;
