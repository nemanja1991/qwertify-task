import { LockClosedIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import axiosClient from '../axios';
import Message from '../components/Message';
import { useStateContext } from '../context/ContextsProvider';

export default function ForgotPassword() {

    const [email, setEmail] = useState("");
    const { showMessage } = useStateContext()

    const onSubmit = (ev) => {
        ev.preventDefault();
        
        axiosClient.post("/v1/forgot-password", {email})
        .then(() => {
            showMessage('Reset password request sent.')
        })
    }

    return (
        <div>
            <form onSubmit={onSubmit} className="mt-8 space-y-6" action="#" method="POST">
            <div className="-space-y-px rounded-md shadow-sm">
              <div className="relative z-0 w-full mb-5 group">
                <input 
                  type="text" 
                  name="email" 
                  id="email"
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-900 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                  placeholder=" " 
                  required 
                />
                <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
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
                        Reset password
                    </button>
                </div>
            </form>

            <Message />
        </div>
  )
}
