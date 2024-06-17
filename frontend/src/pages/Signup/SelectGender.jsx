import React from 'react'

function SelectGender({Select,gender}) {
  return (
    <div className=''>
      <form className='flex flex-col my-2  '  >
        <div className='gap-2 flex'>
          <input type="radio" id="male" name="gender"  onChange={(e)=>Select(e)} value={gender} />
          <label for="gender">male</label>
        </div>
        <div className='gap-2 flex'>
          <input type="radio" id="female" name="gender" onChange={(e)=>Select(e) } value={gender} />
          <label for="gender">female</label>
        </div>
      </form>
    </div>
  )
}

export default SelectGender
