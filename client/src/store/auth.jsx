import { createContext, useContext, useState } from "react";


// context
export const AuthContext = createContext();


//provider

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {

const [token, setToken]= useState(localStorage.getItem('token'))

  const storeTokenInLs = (serverToken) => {
    return localStorage.setItem('token', serverToken)
  }

  let userIsLoggedIn = !!token;


  // tacling Logout functionality

  const LogoutUser = () => {

    setToken("")
    return localStorage.removeItem('token')

  }


  return (
    <AuthContext.Provider value={{userIsLoggedIn, storeTokenInLs, LogoutUser }}>
      {children}
    </AuthContext.Provider>
  )
}

// delivery boy any component can use this now or consumer

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const authContextValue = useContext(AuthContext)
  if (!authContextValue) {
    throw new Error("useAuth used ouuutside of the Provider")
  }
  return authContextValue
}