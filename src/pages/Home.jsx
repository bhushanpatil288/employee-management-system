import { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../Auth/AuthContext'

function Home() {
  const { user } = useContext(AuthContext)

  return (
    <div className="animate-fadeIn">
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
        <div className="w-20 h-20 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-3xl flex items-center justify-center mb-6 shadow-lg">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Employee Management
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
            System
          </span>
        </h1>
        <p className="text-gray-500 max-w-md mb-8 leading-relaxed">
          A simple and clean tool to manage your team. Add, edit, and remove employees with ease.
        </p>

        {user ? (
          <Link
            to="/admin-dashboard"
            className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-500 transition shadow-lg hover:shadow-xl"
          >
            Go to Dashboard
          </Link>
        ) : (
          <Link
            to="/sign-in"
            className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-500 transition shadow-lg hover:shadow-xl"
          >
            Get Started
          </Link>
        )}

        <div className="grid grid-cols-3 gap-8 mt-16 max-w-lg">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">Simple</div>
            <div className="text-xs text-gray-400 mt-1">Easy to use</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">Fast</div>
            <div className="text-xs text-gray-400 mt-1">Instant updates</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">Local</div>
            <div className="text-xs text-gray-400 mt-1">No server needed</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
