import { Link, NavLink } from "react-router-dom"
import {Button} from '../common'
import AuthContext from "../../Auth/AuthContext"
import {useContext} from 'react'


function Header() {
	const {user, setUser} = useContext(AuthContext)
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
				{user ? (
					<Button
						onClick={() => setUser(null)}
						text="Log out"
						color="red"
					/>
					) : (
					<Link to="/sign-in">
						<Button
							text="Sign in"
							color="blue"
						/>
					</Link>
					)}
			</div>
		</div>

    </div>
  )
}

export default Header
