import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import PrimaryButton from '../../components/Button/PrimaryButton';
import { AuthContext } from '../../Contexts/AuthProvider';
import UseToken from '../../hooks/UseToken';
import SocialSignIn from '../Shared/SocialSignIn';


const Login = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState('');
  const [loginUserEmail, setLoginUserEmail] = useState('');
  const [token] = UseToken(loginUserEmail);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  const handleLogin = data => {
    console.log(data);
    setLoginError('');
    signIn(data.email, data.password)
        .then(result => {
            // const user = result.user;
            // console.log(user);
            setLoginUserEmail(data.email);
            toast.success('successfully created account')
            navigate(from, { replace: true });
        })
        .catch(error => {
            console.log(error.message)
            setLoginError(error.message);
        });
}
if (token) {
  navigate(from, { replace: true });
}

    return (
      <div className='flex justify-center items-center pt-8'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Sign in</h1>
          <p className='text-sm text-gray-400'>
            Sign in to access your account
          </p>
        </div>
        <form onSubmit={handleSubmit(handleLogin)}
          noValidate=''
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                {...register("email", {
                  required: "Email Address is required"
              })}
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
               {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
            </div>
            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                  Password
                </label>
              </div>
              <input
                type='password'
                name='password'
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: 'Password must be 6 characters or longer' }
              })}
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
              />
                 {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
            </div>
          </div>

          <div>
            <PrimaryButton
              type='submit'
              classes='w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100'
            >
              Sign in
            </PrimaryButton>
            {loginError && <p className='text-red-600'>{loginError}</p>}
          </div>
        </form>
        <SocialSignIn/>
        <p className='px-6 text-sm text-center text-gray-400'>
          Don't have an account yet?{' '}
          <Link to='/signup' className='hover:underline text-gray-600'>
            Sign up
          </Link>
          .
        </p>
      </div>
    </div>
    );
};

export default Login;