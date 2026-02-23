export default function Map({ latitude, longitude }) {
  if (!latitude || !longitude) return null;

  // URL for Google Maps embed with a pin marker
  const mapSrc = `https://maps.google.com/maps?q=${latitude},${longitude}&z=12&hl=en&output=embed&markers=${latitude},${longitude}`;
console.log("Map src:", mapSrc); // Debugging log
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2">Location Map</h3>
      <iframe
        title="map"
        width="100%"
        height="300"
        className="rounded border"
        loading="lazy"
        src={mapSrc}
      />
    </div>
  );
}