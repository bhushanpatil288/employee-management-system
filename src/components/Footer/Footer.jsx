import { NavLink } from "react-router-dom"

function Footer() {
  return (
    <div className='container mx-auto px-5 py-3 border rounded-t-lg bg-gradient-to-tr from-blue-800 to-blue-300 text-white'>
      <ul className="flex flex-col gap-2 items-end">
				<li>
					<NavLink
						to='/'
						className={({isActive})=>
							`${isActive ? 'text-white text-blue-400 text-blue-700' : 'hover:text-gray-200'}  px-3 py-1 rounded-lg transition`
						}
					>Home</NavLink>
				</li>
				<li>
					<NavLink
						to='/about'
						className={({isActive})=>
							`${isActive ? 'text-white text-blue-400 text-blue-700' : 'hover:text-gray-200'} px-3 py-1 rounded-lg transition`
						}
					>About</NavLink>
				</li>
				<li>
					<NavLink
						to='/contact'
						className={({isActive})=>
							`${isActive ? 'text-white text-blue-400 text-blue-700' : 'hover:text-gray-200'} px-3 py-1 rounded-lg transition`
						}
					>Contact</NavLink>
				</li>
			</ul>
    </div>
  )
}

export default Footer
