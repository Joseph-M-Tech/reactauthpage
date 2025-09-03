import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Protect this route - redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    logout();
    // The AuthProvider state change will trigger a re-render and the useEffect above will redirect
  };

  if (!isAuthenticated) {
    return <div>Loading...</div>; // Or a spinner component
  }

  return (
    <div>
      <h2>Welcome to your Dashboard, {user.email}!</h2>
      <p>This is a protected page only accessible after logging in.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};