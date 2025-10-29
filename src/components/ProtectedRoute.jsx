import { Navigate, useLocation } from 'react-router-dom';
import { useDataBase } from '../context';
import toast from 'react-hot-toast';

// Redirects authenticated users away from auth pages (login/signup)
export const AuthRoute = ({ children }) => {
    const { user, loading ,verified} = useDataBase();
    
    if (loading) return null; // or a loading spinner
    
    if (user && verified) {
        return <Navigate to="/" replace />;
    }

    return children;
};

// Protects routes that require authentication
export const PrivateRoute = ({ children }) => {
    const { user, loading,verified } = useDataBase();
    
    const location = useLocation();
    // console.log(location);
    if (loading) return null; // or a loading spinner
    
    if (!user || !verified) {
        // toast.success("Verification link send to your mail")
        return <Navigate to={location.pathname} replace />;
    }

    return children;
};