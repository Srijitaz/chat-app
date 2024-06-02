import React from 'react'

const Gender = ({onhandleGenderChange, selectedGender}) => {
  return (
    <div className='flex'>
        <div className='form-control'>
            <label className={`label gap-3 cursor-pointer  ${selectedGender ==="male" ? "selected": ""}`}>
                <span className='label-text'>Male</span>
                <input type='checkbox' className='checkbox border-slate-950' 
                checked={selectedGender === "male"}
                onChange={()=>{onhandleGenderChange("male")}}
                />
            </label>
        </div>
        <div className='form-control'>
            <label className={`label gap-3 cursor-pointer  ${selectedGender ==="female" ? "selected": ""}`}>
                <span className='label-text'>Female</span>
                <input type='checkbox' className='checkbox border-slate-950'
                 checked={selectedGender === "female"}
                 onChange={()=>{onhandleGenderChange("female")}}
                />
            </label>
        </div>
    </div>
    
  )
}

export default Gender
//GENDER CODE
// import React from 'react'

// const Gender = () => {
//   return (
//     <div className='flex'>
//         <div className='form-control'>
//             <label className={'label gap-3 cursor-pointer'}>
//                 <span className='label-text'>Male</span>
//                 <input type='checkbox' className='checkbox border-slate-950'></input>
//             </label>
//         </div>
//         <div className='form-control'>
//             <label className={'label gap-3 cursor-pointer'}>
//                 <span className='label-text'>Female</span>
//                 <input type='checkbox' className='checkbox border-slate-950'></input>
//             </label>
//         </div>
//     </div>
    
//   )
// }

// export default Gender