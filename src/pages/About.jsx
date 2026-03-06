function About() {
  return (
    <div className="animate-fadeIn max-w-2xl mx-auto py-16">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">About This Project</h1>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
        <p className="text-gray-600 leading-relaxed">
          This Employee Management System is a student-level project built with
          <span className="font-semibold text-gray-800"> React</span>,
          <span className="font-semibold text-gray-800"> Vite</span>, and
          <span className="font-semibold text-gray-800"> Tailwind CSS</span>.
        </p>

        <p className="text-gray-600 leading-relaxed">
          It demonstrates core React concepts like Context API, React Router, state management,
          and localStorage for data persistence — all without needing a backend server.
        </p>

        <div className="pt-4 border-t border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-3">Features</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
              Sign In / Sign Out with session persistence
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
              Add, Edit, and Delete employees (CRUD)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
              Search and filter employees
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
              Data stored in browser localStorage
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
              Responsive design for all screens
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
