import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import axiosClient from '../axios.js'
import PageComponent from "../components/PageComponent";
import { useStateContext } from "../context/ContextsProvider.jsx";

export default function AccountsView() {
  
  const { id } = useParams()
  const navigate = useNavigate();
  const { showMessage } = useStateContext()

  const [account, setAccount] = useState({
    account_name: "",
    website_url: "",
    username: "",
    password: "",
    note: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = (ev) => {
    ev.preventDefault();
    let res = null;
    let message = ""

    if(id)
    {
      res = axiosClient.put(`/v1/accounts/${account.id}`, account)
      message = "Data successfully updated."
    } 
    else 
    {
      res = axiosClient.post('/v1/accounts/', account)
      message = "Data successfully created."
    }

    res.then((res) => {
      navigate('/')
      showMessage(message)
    })
    .catch((err) => {
      if(err && err.response){
        const error = err.response.data.message
        setError(error)
      }
    })
  }

  useEffect(() => {
    if(id)
    {  
      setLoading(true)
      
      axiosClient.get(`/v1/accounts/get-by-slug/${id}`)
        .then(({data}) => {
            setAccount(data.data)
            setLoading(false)
        })
    }
  }, [])

  return (
    <PageComponent 
      title={!id ? 'Create account password data' : 'Update account password data'}
    >
      {loading && <div className="text-center text-lg">Loading...</div> }
      {!loading && (
        <div className="w-full">

          { error && (<div className="bg-red-500 text-white py-3 px-3">{error} </div>)}

          <form action="#" method="POST" onSubmit={onSubmit} className="max-w-md mx-auto">
            <div className="h-5"></div>
            <div className="relative z-0 w-full mb-5 group">
              <input 
                type="text" 
                name="account_name" 
                id="account_name"
                value={account.account_name}
                onChange={ev => setAccount({...account, account_name: ev.target.value})}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-900 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                placeholder=" " 
                required 
              />
              <label htmlFor="account_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Account name</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input 
                type="text" 
                name="website_url" 
                id="website_url"
                value={account.website_url}
                onChange={ev => setAccount({...account, website_url: ev.target.value})}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-900 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                placeholder=" " 
                required 
              />
              <label htmlFor="website_url" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Website url</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input 
                type="text" 
                name="username" 
                id="username"
                value={account.username}
                onChange={ev => setAccount({...account, username: ev.target.value})}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-900 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                placeholder=" " 
                required 
              />
              <label htmlFor="username" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input 
                type="password" 
                name="password" 
                id="password"
                value={account.password}
                onChange={ev => setAccount({...account, password: ev.target.value})}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-900 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                placeholder=" " 
                required 
              />
              <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <textarea 
                name="note" 
                id="note"
                value={account.note}
                onChange={ev => setAccount({...account, note: ev.target.value})}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-900 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
              ></textarea>
              <label htmlFor="note" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Note</label>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto mb-4 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {!id ? "Create" : "Update"}
              </button>
          </form>
        </div>
      )}
    </PageComponent>
  )
}
