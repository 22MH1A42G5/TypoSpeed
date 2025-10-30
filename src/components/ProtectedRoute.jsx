import { Navigate, useLocation } from 'react-router-dom';
import { useDataBase } from '../context';

export const AuthRoute = ({ children }) => {
    const { user, loading, verified } = useDataBase();
    const location = useLocation();
    
    if (loading) return null;
    
    if (user && verified) {
        return <Navigate to={location.state?.from?.pathname || "/"} replace />;
    }
    
    return children;
};

export const PrivateRoute = ({ children }) => {
    const { user, loading, verified } = useDataBase();
    const location = useLocation();
    
    if (loading) return null;
    
    if (!user) {
        return <Navigate 
            to="/login" 
            state={{ from: location }}
            replace
        />;
    }
    
    if (!verified) {
        return <Navigate 
            to="/" 
            replace 
            state={{ from: location }}
        />;
    }
    
    return children;
};