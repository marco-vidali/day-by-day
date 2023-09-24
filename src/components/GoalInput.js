import { useState } from "react";

export default function GoalInput({ onAddGoal }) {
  const [description, setDescription] = useState("");

  return (
    <form className="flex gap-2 h-24 items-center justify-center bg-secondary w-full">
      <input
        type="text"
        placeholder="Write a new goal..."
        className="input input-bordered w-96 max-w-xs input-primary"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        className="btn btn-primary"
        onClick={(e) => {
          onAddGoal(e, description);
          setDescription("");
        }}
      >
        Add goal
      </button>
    </form>
  );
}
