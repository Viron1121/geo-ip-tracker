export default function ErrorMessage({ message }) {
  if (!message) return null;
  return <p className="text-red-500 mb-4">{message}</p>;
}