import { createBrowserRouter } from "react-router-dom";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Accounts from "./views/Accounts";
import AccountsView from "./views/AccountsView";
import GuestLayout from "./components/GuestLayout";
import DefaultLayout from "./components/DefaultLayout";

const router = createBrowserRouter([
    
    {
        path: '/',
        element: <DefaultLayout />,
        children: 
        [
            {
                path: '/',
                element: <Accounts />
                
            },
            {
                path: '/accounts/create',
                element: <AccountsView />
            },
            {
                path: '/accounts/:id',
                element: <AccountsView />
            },
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children:
        [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
        ]
    }
])

export default router;