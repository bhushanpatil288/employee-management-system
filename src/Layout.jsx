import { Outlet } from "react-router-dom"
import {Header, Footer} from './components/index'
import AuthContextProvider from "./Auth/AuthContextProvider"

function Layout() {
  return (
    <AuthContextProvider>
      <Header />
      <div className="container mx-auto px-5 py-3 h-197">
        <Outlet />
      </div>
      <Footer />
    </AuthContextProvider>
  )
}

export default Layout
