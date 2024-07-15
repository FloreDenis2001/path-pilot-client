import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import LoginContextType from '../../user/models/LoginContextType';
import { LoginContext } from '../../context/LoginProvider';



const PrivateRoutes = () => {
  let { user } = useContext(LoginContext) as LoginContextType;
  return (
   user.token!=="NOTOKEN"? <Outlet/> : <Navigate to='/'/>
  )
}

export default PrivateRoutes;