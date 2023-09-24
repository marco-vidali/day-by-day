import Header from "./Header";
import GoalInput from "./GoalInput";
import GoalList from "./GoalList";
import { useState } from "react";

export default function App() {
  const [goals, setGoals] = useState([]);

  function handleAddGoal(e, description) {
    e.preventDefault();
    const newGoal = {
      id: crypto.randomUUID(),
      description: description,
      done: false,
    };
    setGoals((goals) => [...goals, newGoal]);
  }

  return (
    <div className="h-screen flex flex-col items-center bg-accent">
      <Header />
      <GoalInput onAddGoal={handleAddGoal} />
      <GoalList goals={goals} />
    </div>
  );
}
