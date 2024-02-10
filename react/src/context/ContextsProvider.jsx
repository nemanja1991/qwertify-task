import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    currentUser: {},
    userToken: null,
    setCurrentUser: () => {},
    setUserToken: () => {},
    message: {
      text: null,
      show: false
    },
})

export const ContextProvider = ({children}) => {
  
    const [currentUser, setCurrentUser] = useState({})
    const [userToken, _setUserToken] = useState(localStorage.getItem('ACCESS_TOKEN') || '')
    const [message, setMessage] = useState({text: "", show: false})
    
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

    const showMessage = (text) => {

      setMessage({ text, show: true })

      setTimeout(() => {
        setMessage({message:'', show:false})
      }, 5000)
    }

    return(
        <StateContext.Provider value={{
            currentUser,
            setCurrentUser,
            userToken,
            setUserToken,
            message,
            showMessage
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)