import Tasklist from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <main className="bg-zinc-900 h-screen pt-10">
      <div className="container mx-auto ">
        <TaskForm />
        <Tasklist />
      </div>
    </main>
  );
}

export default App;
