import { useContext, useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import LoginContextType from '../../user/models/LoginContextType';
import { LoginContext } from '../../context/LoginProvider';

const PrivateRoutes = () => {
  const { user } = useContext(LoginContext) as LoginContextType;
  const [isLogged, setIsLogged] = useState(user.token !== "NOTOKEN");

  useEffect(() => {
    const interval = setInterval(() => {
      if (user.token === "NOTOKEN") {
        setIsLogged(false);
      } else {
        setIsLogged(true);
      }
    }, 1000);

    return () => clearInterval(interval); 
  }, [user.token]);

  return isLogged ? <Outlet /> : <Navigate to='/' />;
};

export default PrivateRoutes;
