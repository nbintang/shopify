export default function Button({ className, children = "...", onClick }) {
  return (
    <button
      type="button"
      className={`${className} bg-primary font-semibold text-fourth py-2 px-3 rounded hover:bg-secondary active:bg-opacity-90 shadow-md`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
