import Header from "./Header";
import GoalInput from "./GoalInput";
import GoalList from "./GoalList";
import { useState } from "react";

export default function App() {
  const [goals, setGoals] = useState([]);

  function handleAddGoal(e, description) {
    e.preventDefault();

    if (!description) return;

    const newGoal = {
      id: crypto.randomUUID(),
      description: description,
      done: false,
    };

    setGoals((goals) => [...goals, newGoal]);
  }

  function handleToggleGoal(id) {
    setGoals((goals) =>
      goals.map((goal) =>
        goal.id === id ? { ...goal, done: !goal.done } : goal
      )
    );
  }

  function handleDeleteGoal(id) {
    setGoals((goals) => goals.filter((goal) => goal.id !== id));
  }

  return (
    <div className="h-screen flex flex-col items-center bg-accent">
      <Header />
      <GoalInput onAddGoal={handleAddGoal} />
      <GoalList
        goals={goals}
        onToggleGoal={handleToggleGoal}
        onDeleteGoal={handleDeleteGoal}
      />
    </div>
  );
}
