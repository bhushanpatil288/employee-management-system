import React from 'react'
import AuthContext from '../Auth/AuthContext'
import { useNavigate } from 'react-router-dom'


function AdminDashboard() {
  const navigate = useNavigate();
  const {user} = React.useContext(AuthContext)

  React.useEffect(()=>{
    if (user !== 'admin'){
      navigate('/sign-in')
    } 
  }, [user, navigate])

  if (user !== 'admin'){
    return null;
  }

  return (
    <div>
      Admin Dashboard
    </div>
  )
}

export default AdminDashboard
