import { Outlet } from "react-router-dom"
import {Header, Footer} from './components/index'

function Layout() {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-5 py-3">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
