import React, { createContext, useState } from 'react'
export const AuthContext = createContext();
const AuthContextProvider = ({children}) => {
    const[isAuth,setIsAuth] = useState(false);
    const[token,setToken] =useState('');
   
    const login = ()=>{
        setIsAuth(true);
        setToken(token)
    }
    const logOut = ()=>{
        setIsAuth(false);
        setToken('');
    }
  return <AuthContext.Provider value={{isAuth,login,logOut,token}}> 
    {children}
  </AuthContext.Provider>
}

export default AuthContextProvider