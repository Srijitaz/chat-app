// import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-97 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'> Login
            <span className='text-blue-500'> Chat-app</span> </h1>
            <form>
                <div>
                    <label className='label p-3'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input type='text' placeholder='enter username' className='w-full input input-bordered h-11'></input>
                </div>
                <div>
                    <label className='label'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input type='password' placeholder='enter password' className='w-full input input-bordered h-11'/>
                </div>
                <a href="#" className="text-sm hover: underline hover:text-blue-500 mt-2 inline-block">{"Don't"} have an account?</a>
                <div className="btn btn-block btn-sm mt-4">Login</div>
            </form>
        </div>
    </div>
  )
}


export default Login;
// CODE FOR THE LOGIN PAGE
// const Login = () => {
//     return (
//       <div className='flex flex-col items-center justify-center min-w-97 mx-auto'>
//           <div className='w-full p-6 rounded-lg shadow-md bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//               <h1 className='text-3xl font-semibold text-center text-gray-300'> Login
//               <span className='text-blue-500'> Chat-app</span> </h1>
//               <form>
//                   <div>
//                       <label className='label p-3'>
//                           <span className='text-base label-text'>Username</span>
//                       </label>
//                       <input type='text' placeholder='enter username' className='w-full input input-bordered h-11'></input>
//                   </div>
//                   <div>
//                       <label className='label'>
//                           <span className='text-base label-text'>Password</span>
//                       </label>
//                       <input type='password' placeholder='enter password' className='w-full input input-bordered h-11'/>
//                   </div>
//                   <a href="#" className="text-sm hover: underline hover:text-blue-500 mt-2 inline-block">{"Don't"} have an account?</a>
//                   <div className="btn btn-block btn-sm mt-4">Login</div>
//               </form>
//           </div>
//       </div>
//     )
//   }
  
//   export default Login;
