import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../utils/queries';
import { useState } from 'react';
import { Register as REGDATA } from '../utils/typings';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<REGDATA>({
    name: '',
    email: '',
    password: '',
    role: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  async function handleLogin() {
    try {
      const data = await registerUser({
        email: formData.email,
        password: formData.password,
        name: formData.name,
        role: formData.role,
      });
      if (data.id) {
        navigate('/login');
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section>
      {/* {respState && (
        <p className='text-white text-center first-letter:uppercase drop-shadow-sm'>
          {respState?.message}
        </p>
      )} */}
      <div
        className={
          ' flex flex-col mx-auto sm:flex-row items-center gap-5 w-full sm:w-[80%]'
        }>
        <div>
          <label htmlFor='fullName'>Full Name</label>
          <input
            placeholder='Enter Full Name'
            required
            type='text'
            name='fullName'
            autoComplete='full name'
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div>
          <label htmlFor='email'>Email</label>
          <input
            placeholder='Email@email.com'
            required
            autoComplete='email'
            type='email'
            name='email'
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>

      <div
        className={
          ' flex flex-col mx-auto sm:flex-row items-center gap-5 w-full sm:w-[80%]'
        }>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            placeholder='Enter Password'
            required
            type='password'
            name='password'
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div>
          <label htmlFor='cpassword'>Confirm Password</label>
          <input
            placeholder='Confirm Password'
            required
            type='password'
            name='cpassword'
          />
        </div>
      </div>
      <div className='text-center'>
        <input
          type='checkbox'
          name='role'
          onChange={(e) => handleChange(e)}
        />{' '}
        <label htmlFor='role'>
          If you Rent Out cars, please check this box
        </label>
      </div>

      <div>
        <button
          type='button'
          onClick={handleLogin}>
          Create Account
        </button>
      </div>

      <Link to={'/login'}>
        <span>{'Already have an account'} </span>
        <b>Login</b> here
      </Link>
    </section>
  );
};
export default Register;
