import { Link } from 'react-router-dom';

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4 flex justify-between">
        <Link to="/" className="font-bold text-xl">Career Lite</Link>
        <nav className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/tools">Tools</Link>
          <Link to="/customize">Customize</Link>
        </nav>
      </header>

      <main className="flex-1 p-4">
        {children}
      </main>

      <footer className="bg-gray-100 text-center p-4 text-sm text-gray-500 dark:bg-gray-800 dark:text-gray-300">
        © {new Date().getFullYear()} Career Lite. All rights reserved.
      </footer>
    </div>
  );
}
