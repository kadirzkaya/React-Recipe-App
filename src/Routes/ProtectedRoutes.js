import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes=({login,redirectPath="/login"})=> {
  if (login) {
    return <Outlet/>
  }else{
    return <Navigate to={redirectPath}/>
  }
}

export default ProtectedRoutes