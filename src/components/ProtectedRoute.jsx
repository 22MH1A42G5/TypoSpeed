import { Navigate, useLocation } from 'react-router-dom';
import { useDataBase } from '../context';
import toast from 'react-hot-toast';

// Redirects authenticated users away from auth pages (login/signup)
export const AuthRoute = ({ children }) => {
    const { user, loading ,verified} = useDataBase();
    const location = useLocation();
    
    if (user && verified) {
        return <Navigate to='/' replace />;
    }

    return children;
};

export const PrivateRoute = ({ children }) => {
    const { user, loading,verified } = useDataBase();
    console.log(user,verified)
    if (user && verified) {
        return children;
    }
    else{
        return <Navigate to="/"/>
    }

    // return children;
};