import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../utils/lib/useAuth';
import { useEffect, useState } from 'react';
import { loginUser } from '../utils/queries';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useAuth();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  });

  const handleClick = async () => {
    try {
      const data = await loginUser({ email, password });
      sessionStorage.setItem('user', JSON.stringify(data));

      navigate('/');
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <section>
      <div>
        <label htmlFor='email'>Email</label>
        <input
          placeholder='Email@email.com'
          required
          type='text'
          value={email}
          name='email'
          autoComplete='email'
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input
          placeholder='Enter Password'
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          name='password'
        />
      </div>
      <div>
        <button
          type='button'
          onClick={handleClick}>
          Login
        </button>
      </div>

      <Link to={'/register'}>
        <span>{"Don't have an account"} </span>
        <b>Create Account</b>
      </Link>
    </section>
  );
};

export default Login;
