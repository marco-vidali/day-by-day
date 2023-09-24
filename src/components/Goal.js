export default function Goal({
  id,
  done,
  onToggleGoal,
  onDeleteGoal,
  children,
}) {
  return (
    <div className="flex gap-4 justify-center h-24 items-center">
      <span
        className={`cursor-pointer text-accent-content ${
          done ? "line-through" : ""
        }`}
        onClick={() => onToggleGoal(id)}
      >
        {children}
      </span>
      <button
        className="btn btn-sm btn-circle btn-ghost text-primary"
        onClick={() => {
          onDeleteGoal(id);
        }}
      >
        ✕
      </button>
    </div>
  );
}
