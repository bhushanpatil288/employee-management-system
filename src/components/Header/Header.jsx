import { Link, NavLink, useNavigate } from "react-router-dom"
import { useContext } from 'react'
import AuthContext from "../../Auth/AuthContext"

function Header() {
	const { user, logout } = useContext(AuthContext)
	const navigate = useNavigate()

	function handleLogout() {
		logout()
		navigate('/')
	}

	return (
		<div className="bg-white shadow-sm border-b border-gray-100">
			<div className="container mx-auto px-5 py-3">
				<div className="flex justify-between items-center">
					<Link to='/' className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
						EMS
					</Link>
					<div className="flex items-center gap-1">
						<nav>
							<ul className="flex gap-1">
								<li>
									<NavLink
										to='/'
										className={({ isActive }) =>
											`${isActive ? 'text-white bg-gradient-to-r from-blue-600 to-blue-400 shadow-md' : 'text-gray-600 hover:bg-gray-100'} px-3 py-1.5 rounded-lg transition text-sm font-medium`
										}
									>Home</NavLink>
								</li>
								<li>
									<NavLink
										to='/about'
										className={({ isActive }) =>
											`${isActive ? 'text-white bg-gradient-to-r from-blue-600 to-blue-400 shadow-md' : 'text-gray-600 hover:bg-gray-100'} px-3 py-1.5 rounded-lg transition text-sm font-medium`
										}
									>About</NavLink>
								</li>
								<li>
									<NavLink
										to='/contact'
										className={({ isActive }) =>
											`${isActive ? 'text-white bg-gradient-to-r from-blue-600 to-blue-400 shadow-md' : 'text-gray-600 hover:bg-gray-100'} px-3 py-1.5 rounded-lg transition text-sm font-medium`
										}
									>Contact</NavLink>
								</li>
								{user && (
									<li>
										<NavLink
											to='/admin-dashboard'
											className={({ isActive }) =>
												`${isActive ? 'text-white bg-gradient-to-r from-blue-600 to-blue-400 shadow-md' : 'text-gray-600 hover:bg-gray-100'} px-3 py-1.5 rounded-lg transition text-sm font-medium`
											}
										>Dashboard</NavLink>
									</li>
								)}
							</ul>
						</nav>
						{user ? (
							<button
								onClick={handleLogout}
								className="ml-3 bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-lg text-sm font-medium transition cursor-pointer shadow-sm"
							>
								Sign Out
							</button>
						) : (
							<Link to="/sign-in">
								<button className="ml-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-blue-500 transition cursor-pointer shadow-sm">
									Sign In
								</button>
							</Link>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
