import React from 'react'
import Gender from './Gender'

const Signup = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-97 mx-auto'>
      <div className='w-full p-6 rounded shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0' >
        <h1 className='text-3xl font-medium text-center text-gray-400'>
          Sign Up <span className='text-purple-500'>Chat APP</span>

        </h1>
        <form>
                <div>
                    <label className='label p-3'>
                        <span className='text-base label-text'>Full Name</span>
                    </label>
                    <input type='text' placeholder='Srijita Saha' className='w-full input input-bordered h-11'></input>
                </div>
                <div>
                    <label className='label p-3'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input type='text' placeholder='srijitasaha' className='w-full input input-bordered h-11'/>
                </div>
                <div>
                    <label className='label'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input type='password' placeholder='enter password' className='w-full input input-bordered h-11'/>
                </div>
                <div>
                    <label className='label'>
                        <span className='text-base label-text'> Confirm Password</span>
                    </label>
                    <input type='password' placeholder='confirm password' className='w-full input input-bordered h-11'/>
                </div>

                {/* Gender verification*/ }
                <Gender/>
                <a className="text-sm hover: underline hover:text-purple-500 mt-2 inline-block">Already have an account?</a>
                <div>
                  <button className='btn btn-block btn-sm mt-3 border border-slate-600'>Sign Up</button>
                </div>
            </form>
      </div>
    </div>
  )
}

export default Signup
//CODE FOR SIGNUP 
// import React from 'react'
// import Gender from './Gender'

// const Signup = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-97 mx-auto'>
//       <div className='w-full p-6 rounded shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0' >
//         <h1 className='text-3xl font-medium text-center text-gray-400'>
//           Sign Up <span className='text-purple-500'>Chat APP</span>

//         </h1>
//         <form>
//                 <div>
//                     <label className='label p-3'>
//                         <span className='text-base label-text'>Full Name</span>
//                     </label>
//                     <input type='text' placeholder='Srijita Saha' className='w-full input input-bordered h-11'></input>
//                 </div>
//                 <div>
//                     <label className='label p-3'>
//                         <span className='text-base label-text'>Username</span>
//                     </label>
//                     <input type='text' placeholder='srijitasaha' className='w-full input input-bordered h-11'/>
//                 </div>
//                 <div>
//                     <label className='label'>
//                         <span className='text-base label-text'>Password</span>
//                     </label>
//                     <input type='password' placeholder='enter password' className='w-full input input-bordered h-11'/>
//                 </div>
//                 <div>
//                     <label className='label'>
//                         <span className='text-base label-text'> Confirm Password</span>
//                     </label>
//                     <input type='password' placeholder='confirm password' className='w-full input input-bordered h-11'/>
//                 </div>

//                 {/* Gender verification*/ }
//                 <Gender/>
//                 <a className="text-sm hover: underline hover:text-purple-500 mt-2 inline-block">Already have an account?</a>
//                 <div>
//                   <button className='btn btn-block btn-sm mt-3 border border-slate-600'>Sign Up</button>
//                 </div>
//             </form>
//       </div>
//     </div>
//   )
// }

// export default Signup