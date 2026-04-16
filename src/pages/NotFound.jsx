import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-brand mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="bg-brand text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition">
        Return Home
      </Link>
    </div>
  );
}