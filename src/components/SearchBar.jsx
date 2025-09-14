import React,{useState} from 'react'
import style from "../CSS/SearchBar.module.css"
function SearchBar() {
    const [input,setInput]=useState('')
  return (
    <div className={style.searchBar}>
      <input 
      value={input} 
      onChange={(e)=>setInput(e.target.value)}/>
    </div>
  )
}

export default SearchBar
