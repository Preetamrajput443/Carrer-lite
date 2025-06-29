export default function Card({ title, children }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <div>{children}</div>
    </div>
  );
}
