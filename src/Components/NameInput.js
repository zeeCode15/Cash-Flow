import React from 'react'
import './CssFiles/NameInput.css'

function NameInput({sNo, nameArray}) {

    function changeHandler(e)
    {
        e.stopPropagation();

        nameArray[sNo-1]= e.target.value;
    }


  return (
    <div className='nameInput'>
        <label htmlFor={`person${sNo}`}>Person { String(sNo).padStart(2, '0')}: </label>
        <input type="text" name={`person${sNo}`} id={`person${sNo}`} onChange={changeHandler} />
      
    </div>
  )
}

export default NameInput
