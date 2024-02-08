import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from '../context/ContextsProvider';

export default function GuestLayout() {
  const { userToken } = useStateContext();

  if(userToken){
    return <Navigate to="/" />
  }
  
  return (
    <div>
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                    Password management
                </h2>
                <Outlet />
            </div>
        </div>
    </div>
  )
}
