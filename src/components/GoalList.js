import Goal from "./Goal";

export default function GoalList({ goals, onToggleGoal }) {
  if (goals.length === 0)
    return (
      <p className="text-accent-content p-24">Start by adding some goals!</p>
    );

  return (
    <div className="w-full grid grid-cols-3 p-24">
      {goals.map((goal) => (
        <Goal
          key={goal.id}
          id={goal.id}
          done={goal.done}
          onToggleGoal={onToggleGoal}
        >
          {goal.description}
        </Goal>
      ))}
    </div>
  );
}
