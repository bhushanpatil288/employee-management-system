import { Outlet } from "react-router-dom"
import { Header, Footer } from './components/index'
import AuthContextProvider from "./Auth/AuthContextProvider"

function Layout() {
  return (
    <AuthContextProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="container mx-auto px-5 py-3 flex-1">
          <Outlet />
        </div>
        <Footer />
      </div>
    </AuthContextProvider>
  )
}

export default Layout
