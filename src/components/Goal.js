export default function Goal({ id, done, children }) {
  return (
    <div className="flex gap-4 justify-center h-24 items-center">
      <span
        className={`cursor-pointer text-accent-content ${
          done ? "line-through" : ""
        }`}
      >
        {children}
      </span>
      <button class="btn btn-sm btn-circle btn-ghost text-primary">✕</button>
    </div>
  );
}
