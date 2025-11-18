import { Link, NavLink } from "react-router-dom"


function Header() {
  return (
    <div className="container mx-auto px-5 py-3">
		<div className="flex justify-between items-center">
			<Link to='/'>Logo</Link>
			<div className="flex items-center">
				<ul className="flex gap-2">
					<li>
						<NavLink
							to='/'
							className={({isActive})=>
								`${isActive ? 'text-white bg-gradient-to-tr from-blue-800 to-blue-300' : 'text-gray-700 hover:bg-gray-200'}  px-3 py-1 rounded-lg transition`
							}
						>Home</NavLink>
					</li>
					<li>
						<NavLink
							to='/about'
							className={({isActive})=>
								`${isActive ? 'text-white bg-gradient-to-tr from-blue-800 to-blue-300' : 'text-gray-700 hover:bg-gray-200'} px-3 py-1 rounded-lg transition`
							}
						>About</NavLink>
					</li>
					<li>
						<NavLink
							to='/contact'
							className={({isActive})=>
								`${isActive ? 'text-white bg-gradient-to-tr from-blue-800 to-blue-300' : 'text-gray-700 hover:bg-gray-200'} px-3 py-1 rounded-lg transition`
							}
						>Contact</NavLink>
					</li>
				</ul>
				<Link
					to='/sign-in'
					className="bg-blue-200 text-neutral-700 hover:bg-blue-300 hover:text-white px-3 py-1 shadow inset-shadow-black rounded-lg ms-3 transition"
				>Sign in</Link>
			</div>
		</div>

    </div>
  )
}

export default Header
