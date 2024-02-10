import { useEffect, useState } from "react";
import PageComponent from "../components/PageComponent";
import axiosClient from '../axios';
import { PencilIcon, PlusCircleIcon, TrashIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { useStateContext } from "../context/ContextsProvider";

export default function Accounts() {

  const [accounts, setAccounts] = useState([])
  const [loading, setLoading] = useState(false)
  const { showMessage } = useStateContext()

  function getAccounts() {
    setLoading(true)

    axiosClient.get('/v1/accounts')
      .then(({data}) => {
        setAccounts(data.data)
        setLoading(false)
      })
  }

  const deleteAccount = (id) => {
    if(window.confirm('Are you sure you want to delete this account data?')) {
      axiosClient.delete(`/v1/accounts/${id}`)
        .then(() => {
          getAccounts()
          showMessage("Account successfully deleted.")
        })
    }
  }

  useEffect(() => { getAccounts() }, [])

  return (
    <PageComponent 
      title="Accounts passwords"
      buttons={(
        <Link 
          to="/accounts/create" 
          className="flex justify-center h-22 w-42 bg-emerald-500 text-white active:bg-emerald-600 font-bold text-sm px-6 py-1 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        >
          <PlusCircleIcon className="h-6 w-6 mr-2"/>
          Create new
        </Link>
      )}
    >
      {loading && <div className="text-center text-lg">Loading...</div>}
      {!loading && (
        <div>
          {accounts.length === 0 && <div className="py-8 text-center text-gray-700">You dont have accounts data created.</div>  }
          {accounts.length > 0 && ( 
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">No.</th>
                    <th scope="col" className="px-6 py-3">Account name</th>
                    <th scope="col" className="px-6 py-3">Website</th>
                    <th scope="col" className="px-6 py-3">Username</th>
                    <th scope="col" className="px-6 py-3">Password</th>
                    <th scope="col" className="px-6 py-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                { accounts.map((a, ind) => (
                  <tr key={ind} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <td className="px-6 py-4">{ind + 1}.</td>
                    <td className="px-6 py-4">{a.account_name}</td>
                    <td className="px-6 py-4">{a.website_url}</td>
                    <td className="px-6 py-4">{a.username}</td>
                    <td className="px-6 py-4"><p className="truncate md:text-clip">{a.password}</p></td>
                    <td className="px-6 py-4">
                      <div className="flex justify-between items-center">
                        <Link 
                          to={`/accounts/${a.slug}`} >
                            <PencilIcon className="h-4 w-4 mr-2"/>
                        </Link>
                        <button
                          onClick={ev => deleteAccount(a.id)}
                          type="button">
                          <TrashIcon className="h-4 w-4 mr-2"/>
                        </button>
                      </div>
                    </td>
                  </tr>              
                ))}
                </tbody>
              </table>
            </div>
            ) }
          </div>
      ) }
    </PageComponent>
  )
}
