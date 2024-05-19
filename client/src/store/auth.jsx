import { createContext, useContext, useEffect, useState } from "react";



const userURL = "http://localhost:3000/api/auth/user"
const serviceURL = "http://localhost:3000/api/data/service"

// context
export const AuthContext = createContext();


//provider

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {

  const [token, setToken] = useState(localStorage.getItem('token'))
  const [user, setUser] = useState('')
  const [services, setServices] = useState('')
  const authorizationToken = `Bearer ${token}`

  const storeTokenInLs = (serverToken) => {
    setToken(serverToken)
    return localStorage.setItem('token', serverToken)
  }

  let userIsLoggedIn = !!token;

  console.log("User is Logged In", userIsLoggedIn)


  // tackling Logout functionality

  const LogoutUser = () => {

    setToken("")
    return localStorage.removeItem('token')

  }

  // JWT Authentication vid31 - currently logged in user data


  const userAuthentication = async () => {
    try {
      const response = await fetch(userURL,
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken
          }
        }
      )

      if (response.ok) {
        const data = await response.json()
        console.log('user-data', data.userData)
        setUser(data.userData)

      }

    } catch (error) {
      console.log(error)

    }
  }


  // to fetch services

  const getServices = async () => {
    try {
        const response = await fetch(serviceURL,{
          method:"GET"
        });
        if(response.ok){
          const data = await response.json()
          // console.log(data.response)
          setServices(data.response)

        }
    } catch (error) {
      console.log(`Serivecs frontend error ${error}`)
    }
  }

  useEffect(() => {
    getServices();
    userAuthentication();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <AuthContext.Provider value={{ userIsLoggedIn, storeTokenInLs, LogoutUser, user, services, authorizationToken }}>
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