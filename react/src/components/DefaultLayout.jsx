import { Fragment, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { AdjustmentsHorizontalIcon, UserIcon } from '@heroicons/react/24/outline'
import { NavLink, Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../context/ContextsProvider';
import axiosClient from '../axios';
import Message from './Message';

const navigation = [
  { name: 'Accounts', to: '/' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DefaultLayout() {

    const { currentUser, userToken, setCurrentUser, setUserToken } = useStateContext();

    if(!userToken){
      return <Navigate to="login" />
    }

    const logout = (ev) => {
        ev.preventDefault();
        
        axiosClient.post('/v1/logout')
        .then(() => {
          setCurrentUser({})
          setUserToken(null)
        })
    }

    useEffect(() => {
        axiosClient.get('/v1/profile')
        .then(({data}) => {
            console.log(data)
            setCurrentUser(data.data)
        })
      }, [])

  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
            <>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <AdjustmentsHorizontalIcon className="h-8 w-8 text-white" />
                        </div>
                        <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navigation.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.to}
                                className={ ({ isActive }) => classNames(
                                    isActive
                                    ? 'bg-gray-900 text-white'
                                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'rounded-md px-3 py-2 text-sm font-medium'
                                )}
                            >
                                {item.name}
                            </NavLink>
                            ))}
                        </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">

                        <Menu as="div" className="relative ml-3">
                            <div>
                            <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="absolute -inset-1.5" />
                                <span className="sr-only">Open user menu</span>
                                <UserIcon className='w-8 h-8 bg-black/25 p-2 rounded-full text-white '/>
                            </Menu.Button>
                            </div>
                            <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                            >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-72 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="flex items-center px-5">
                                    <div className="flex-shrink-0">
                                        <UserIcon className='w-8 h-8 bg-black/25 p-2 rounded-full text-white '/>
                                    </div>
                                    <div className="ml-3">
                                        <div className="text-base font-medium leading-none text-gray-700">{currentUser && currentUser.name}</div>
                                        <div className="text-sm font-medium leading-none text-gray-700">{currentUser && currentUser.email}</div>
                                    </div>
                                    
                                </div>
                                <hr className='mt-2'/>
                                <Menu.Item>
                                    <a
                                        href="#"
                                        onClick={(ev) => logout(ev)}
                                        className='block px-4 py-2 text-sm text-gray-700'
                                    >
                                        Sign out
                                    </a>
                                </Menu.Item>
                            </Menu.Items>
                            </Transition>
                        </Menu>
                        </div>
                    </div>
                    </div>
                </div>

                <Disclosure.Panel className="md:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                    {navigation.map((item) => (
                        <NavLink
                        key={item.name}
                        to={item.to}
                        className={ ({ isActive }) => classNames(
                            isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'block rounded-md px-3 py-2 text-base font-medium'
                        )}
                        >
                        {item.name}
                        </NavLink>
                    ))}
                    </div>
                </Disclosure.Panel>
            </>
        </Disclosure>

        <Outlet />
        <Message />
      </div>
    </>
  )
}
