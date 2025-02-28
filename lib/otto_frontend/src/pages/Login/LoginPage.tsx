import { useState } from 'react';
import { AxiosError } from 'axios';

import { Button, Container, Logo } from '@/components';
import callApi from '@/api/callApi';
import { EndpointKeys } from '@/api/apiDefinitions';
import { useUserContext } from '@/context/User/UserProvider';

import './LoginPage.scss';

const LoginPage = () => {
  const { login } = useUserContext();
  const [email, setEmail] = useState('default_user@example.com.admin');
  const [password, setPassword] = useState('admin12345');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setError('');
    setLoading(true);

    const formData = new URLSearchParams();
    formData.append('username', email);
    formData.append('password', password);

    try {
      const response = await callApi({
        endpoint: EndpointKeys.USER_LOGIN,
        data: formData,
      });

      if (response.status === 200) {
        const { access_token } = response.data;
        login(access_token); // Store token in context and handle redirection
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      const error = err as AxiosError;

      if (error.response?.status === 401) {
        setError('Incorrect credentials. Please try again.');
      } else if (error.response?.status && error.response.status >= 500) {
        setError('Server is currently unavailable. Try again later.');
      } else {
        setError('Login failed. Please check your internet connection.');
      }

      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="loginpage">
      <Container className="loginpage__form-container" padding="large">
        <Logo bordered />
        <div className="loginpage__form">
          <div className="inputfield">
            <label>Email Address</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
          </div>
          <div className="inputfield">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
          </div>

          <p className="loginpage__error-msg">{error}</p>

          <div className="loginpage__form-footer">
            <Button
              label="Sign In"
              type="submit"
              toggled
              onClick={handleLogin}
              disabled={loading}
              loading={loading}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;
