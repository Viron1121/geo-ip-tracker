export default function GeoInfo({ geo }) {
  if (!geo) return null;

  return (
    <div className="border rounded p-4 mb-6 bg-gray-50">
      <p><span className="font-semibold">IP:</span> {geo.ip}</p>
      <p><span className="font-semibold">City:</span> {geo.city}</p>
      <p><span className="font-semibold">Region:</span> {geo.region}</p>
      <p><span className="font-semibold">Country:</span> {geo.country}</p>
    </div>
  );
}