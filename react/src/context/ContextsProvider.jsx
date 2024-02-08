import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    currentUser: {},
    userToken: null,
    setCurrentUser: () => {},
    setUserToken: () => {}
})

export const ContextProvider = ({children}) => {
  
    const [currentUser, setCurrentUser] = useState({})
    const [userToken, _setUserToken] = useState(localStorage.getItem('ACCESS_TOKEN') || '')

    const setUserToken = (token) => 
    {
      if(token)
      {
        localStorage.setItem('ACCESS_TOKEN', token)
      } 
      else 
      {
        localStorage.removeItem('ACCESS_TOKEN')
      }
      _setUserToken(token);
    }

    return(
        <StateContext.Provider value={{
            currentUser,
            setCurrentUser,
            userToken,
            setUserToken
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)