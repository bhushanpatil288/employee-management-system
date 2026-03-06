import { useState, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import AuthContext from "../Auth/AuthContext.js"

function Signin() {
    const { user, login } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        if (user) navigate('/admin-dashboard')
    }, [user, navigate])

    function handleForm(e) {
        e.preventDefault()
        setError('')
        const success = login(email, password)
        if (success) {
            navigate('/admin-dashboard')
        } else {
            setError('Invalid email or password')
        }
    }

    return (
        <div className="flex justify-center items-center min-h-[70vh] animate-fadeIn">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md border border-gray-100">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">Welcome Back</h2>
                    <p className="text-gray-500 mt-1 text-sm">Sign in to manage employees</p>
                </div>

                {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-6 text-sm text-center animate-slideIn">
                        {error}
                    </div>
                )}

                <form onSubmit={handleForm} className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="LoginEmail" className="font-semibold text-gray-700 text-sm">Email</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            id="LoginEmail"
                            className="border border-gray-200 px-4 py-2.5 rounded-xl outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition"
                            type="email"
                            placeholder="admin@example.com"
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="LoginPassword" className="font-semibold text-gray-700 text-sm">Password</label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            id="LoginPassword"
                            className="border border-gray-200 px-4 py-2.5 rounded-xl outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition"
                            type="password"
                            placeholder="Enter your password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-2.5 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-600 transition cursor-pointer shadow-md hover:shadow-lg"
                    >
                        Sign In
                    </button>

                    <p className="text-center text-xs text-gray-400 mt-2">
                        Demo: admin@example.com / 123
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Signin
