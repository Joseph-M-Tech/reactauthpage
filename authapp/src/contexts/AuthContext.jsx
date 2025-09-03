import { createContext, useContext, useReducer, useEffect } from 'react';

// 1. Create the Context
const AuthContext = createContext();

// 2. Define the initial state and reducer function
const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_START':
      return { ...state, loading: true, error: null };
    case 'LOGIN_SUCCESS':
      return { ...state, loading: false, user: action.payload, isAuthenticated: true, error: null };
    case 'LOGIN_FAILURE':
      return { ...state, loading: false, error: action.payload, isAuthenticated: false, user: null };
    case 'LOGOUT':
      return { ...state, isAuthenticated: false, user: null, error: null };
    case 'CLEAR_ERROR':
      return { ...state, error: null };
    default:
      return state;
  }
};

const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
};

// 3. Create the Context Provider Component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Check local storage on app load to see if user is already logged in
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: storedUser });
    }
  }, []);

  // Function to log in a user
  const login = async (email, password) => {
    dispatch({ type: 'LOGIN_START' });
    try {
      // Simulate API call to our JSON server
      const response = await fetch('http://localhost:3001/users');
      const users = await response.json();
      const foundUser = users.find((user) => user.email === email && user.password === password);

      if (foundUser) {
        // In a real app, you'd get a token from the backend
        const { password, ...userWithoutPassword } = foundUser; // Remove password from state
        dispatch({ type: 'LOGIN_SUCCESS', payload: userWithoutPassword });
        localStorage.setItem('user', JSON.stringify(userWithoutPassword));
      } else {
        dispatch({ type: 'LOGIN_FAILURE', payload: 'Invalid email or password' });
      }
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE', payload: 'Login failed. Please try again.' });
    }
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('user');
  };

  const clearError = () => dispatch({ type: 'CLEAR_ERROR' });

  const value = {
    ...state,
    login,
    logout,
    clearError,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// 4. Create a custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};