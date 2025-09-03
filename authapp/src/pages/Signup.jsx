import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Input } from '../components/Input';
import { Link, useNavigate } from 'react-router-dom';

export const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [localError, setLocalError] = useState(null); // For client-side validation errors
  const { login, isAuthenticated, loading, error, clearError } = useAuth();
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  // Clear auth errors when user starts typing
  useEffect(() => {
    if (error) {
      clearError();
    }
    if (localError) {
      setLocalError(null);
    }
  }, [formData.email, formData.password, formData.confirmPassword]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError(null); // Reset local errors on new submission

    // 1. Client-side validation
    if (formData.password !== formData.confirmPassword) {
      setLocalError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setLocalError('Password must be at least 6 characters long');
      return;
    }

    // 2. Attempt to create the user via the mock API
    try {
      const response = await fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password, // In a real app, this would be hashed by the backend!
        }),
      });

      if (!response.ok) {
        // Handle errors from the server, e.g., "Email already exists"
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create account');
      }

      const newUser = await response.json();
      console.log('Signup successful:', newUser);

      // 3. Automatically log the user in after successful signup
      await login(formData.email, formData.password);

      // The `login` function will update the context and the useEffect above will redirect to /dashboard

    } catch (err) {
      // Handle any errors that occurred during the fetch or login process
      setLocalError(err.message);
    }
  };

  return (
    <div>
      <h2>Create Your Account</h2>
      <form onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <Input
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        {/* Display local form errors or auth context errors */}
        {(localError || error) && (
          <p style={{ color: 'red', fontSize: '0.8rem' }}>{localError || error}</p>
        )}
        <button type="submit" disabled={loading}>
          {loading ? 'Creating Account...' : 'Sign Up'}
        </button>
      </form>
      <p>
        Already have an account? <Link to="/login">Log in here</Link>.
      </p>
    </div>
  );
};