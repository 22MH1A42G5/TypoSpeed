import { Navigate } from 'react-router-dom';
import { useDataBase } from '../context';

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
    
    if (loading) return null; // or a loading spinner
    
    if (!user || !verified) {
        return <Navigate to="/login" replace />;
    }

    return children;
};