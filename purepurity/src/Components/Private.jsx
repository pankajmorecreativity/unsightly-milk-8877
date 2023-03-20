import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext'

const Private = ({children}) => {
const{isAuth} = useContext(AuthContext);

if(!isAuth){
    return <Navigate to = "/login"/>
}
  return (
   children

  )
}

export default Private