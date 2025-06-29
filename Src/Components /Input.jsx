export default function Input({ label, type = "text", value, onChange, placeholder }) {
  return (
    <div className="mb-4">
      {label && <label className="block mb-1">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
      />
    </div>
  );
}
