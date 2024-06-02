import React, { useState } from 'react';
import Gender from './Gender';
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup';

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  });

  const { loading, signup } = useSignup(); // Correctly invoke the hook here

  const handleGenderChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className='flex flex-col items-center justify-center min-w-97 mx-auto'>
      <div className='w-full p-6 rounded shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-medium text-center text-gray-400'>
          Sign Up <span className='text-purple-500'>Chat APP</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-3'>
              <span className='text-base label-text'>Full Name</span>
            </label>
            <input
              type='text'
              placeholder='Srijita Saha'
              className='w-full input input-bordered h-11'
              value={inputs.fullName}
              onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
            />
          </div>
          <div>
            <label className='label p-3'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input
              type='text'
              placeholder='srijitasaha'
              className='w-full input input-bordered h-11'
              value={inputs.username}
              onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            />
          </div>
          <div>
            <label className='label'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input
              type='password'
              placeholder='enter password'
              className='w-full input input-bordered h-11'
              value={inputs.password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            />
          </div>
          <div>
            <label className='label'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input
              type='password'
              placeholder='confirm password'
              className='w-full input input-bordered h-11'
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
            />
          </div>

          {/* Gender verification */}
          <Gender onhandleGenderChange={handleGenderChange} selectedGender={inputs.gender} />
          <Link to='/login' className='text-sm hover:underline hover:text-purple-500 mt-2 inline-block'>
            Already have an account?
          </Link>
          <div>
            <button className='btn btn-block btn-sm mt-3 border border-slate-600' type='submit' disabled={loading}>
              {loading ? <span className='loading loading-spinner'></span>: "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
