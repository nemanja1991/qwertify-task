import { LockClosedIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axiosClient from '../axios';
import { useStateContext } from '../context/ContextsProvider.jsx';

export default function Login() {
    const { setCurrentUser, setUserToken } = useStateContext();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({ __html: "" });

  const onSubmit = (ev) => {
    ev.preventDefault();
    setError({ __html: "" });

    axiosClient.post("/v1/login", {email, password})
      .then(({ data }) => {
        if(data.status)
        {
          setCurrentUser(data.user);
          setUserToken(data.token);
        }
        else
        {
          setError({ __html: data.message });
        }
        
      })
      .catch((error) => {
        const finalErrors = Object.values(error.response.data.errors).reduce((accum, next) => [...accum, ...next], [])
        console.log(finalErrors)
        setError({__html: finalErrors.join('<br>')})
      });
  };


    return (
        <>
          <p className="mt-2 text-center text-sm text-gray-600"><Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">Signup</Link></p>
          
          {error.__html && (
            <div
              className="bg-red-500 rounded py-2 px-3 text-white"
              dangerouslySetInnerHTML={error}
            ></div>
          )}
    
          <form onSubmit={onSubmit} className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
            <div className="relative z-0 w-full mb-5 group">
                <input 
                  type="text" 
                  name="account_name" 
                  id="account_name"
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-900 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                  placeholder=" " 
                  required 
                />
                <label htmlFor="account_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Account name</label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input 
                  type="password" 
                  name="password" 
                  id="password"
                  value={password}
                  onChange={(ev) => setPassword(ev.target.value)}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-900 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                  placeholder=" " 
                  required 
                />
                <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
              </div>
              
            </div>
    
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </>
      );
}
