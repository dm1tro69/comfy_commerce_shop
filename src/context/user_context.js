import React, { useContext, useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const UserContext = React.createContext()
export const UserProvider = ({ children }) => {
  const {isAuthenticated, loginWithRedirect, logout, isLoading, user} = useAuth0()

  const [myUser, setMyUser] = useState(null)

  useEffect(()=> {
    if (isAuthenticated){
      setMyUser(user)
    }else {
      setMyUser(false)
    }

  }, [isAuthenticated])

  return (
    <UserContext.Provider value={{logout, loginWithRedirect, myUser}}>{children}</UserContext.Provider>
  )
}
// make sure use
export const useUserContext = () => {
  return useContext(UserContext)
}
