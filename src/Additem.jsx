import React from 'react'
import { useRef } from 'react'
import { FaPlus } from 'react-icons/fa'

function Additem({newitems,setNewitems,handleSubmit}) {
  const inputRef=useRef()
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor='addItem'>Add Item </label>
        <input
        autoFocus
        ref={inputRef}
        id='addItem'
        type='text'
        placeholder='Add Item'
        required
        value={newitems} 
        onChange={(e)=>setNewitems(e.target.value)}/>
        <button type="submit"
        aria-label='Add Item'
        onClick={()=>inputRef.current.focus()}>
            <FaPlus/>
            </button>
        
    </form>
  )
}

export default Additem