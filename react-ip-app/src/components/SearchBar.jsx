export default function SearchBar({ ip, setIp, onSearch, onClear }) {
  return (
    <div className="flex gap-2 mb-4">
      <input
        className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
        placeholder="Enter IP address"
        value={ip}
        onChange={(e) => setIp(e.target.value)}
      />
      <button
        onClick={onSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Search
      </button>
      <button
        onClick={onClear}
        className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
      >
        Clear
      </button>
    </div>
  );
}