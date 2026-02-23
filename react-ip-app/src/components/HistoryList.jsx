export default function HistoryList({ history, selected, toggleSelect, fetchGeo, deleteSelected }) {
  if (history.length === 0) return <p className="text-gray-500">No search history yet.</p>;

  return (
    <>
      <ul className="space-y-2 mb-4">
        {history.map((h, i) => (
          <li
            key={i}
            className="flex items-center gap-2 bg-gray-100 p-2 rounded hover:bg-blue-100"
          >
            <input
              type="checkbox"
              checked={selected.includes(h)}
              onChange={() => toggleSelect(h)}
            />
            <span
              className="cursor-pointer flex-1"
              onClick={() => fetchGeo(h)}
            >
              {h}
            </span>
          </li>
        ))}
      </ul>

      {selected.length > 0 && (
        <button
          onClick={deleteSelected}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Delete Selected
        </button>
      )}
    </>
  );
}