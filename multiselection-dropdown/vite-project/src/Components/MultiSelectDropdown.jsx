import { useEffect, useState } from "react"

const MultiSelectDropdown =()=>{
    const [options , setOptions] = useState(Array.from({length: 10},(_,index)=>({
        id: index + 1,
      
    })))
const [selected, setSelected] = useState([])
const [submitOptions, setSubmitOptions] = useState([])
const [showOption , setShowOption] = useState(false)
const [counter , setCounter] = useState(0)
const [submit , setSubmit] = useState(false)

const handleSelected = (i)=>{
        console.log("selected",i)
        setSelected((prev)=> prev.includes(i)? prev.filter((prev,index)=> prev !== i):[...prev,i])
       
}


const handleShowOption = ()=>{
  setShowOption((prev)=> !prev)
  
  
}
const handleSubmit = ()=>{
  setSubmit(true)
  setSubmitOptions(selected)
  //setSubmitOptions((prev)=>[...prev,...selected])
  // setSelected([])
}

// reset options
const handleReset=()=>{
  setSelected([])
}

useEffect(()=>{
    console.log(selected)
 
},[selected])

    return(
        

      <div className="dropdown-container">
      <h2 className="dropdown-title">Multiselect Dropdown Menu</h2>
      <label className="dropdown-label">Select Options:</label>
      <div className="dropdown-wrapper">
        <button className="dropdown-toggle" onClick={handleShowOption}>
          <span className="dropdown-icon">⬇️</span>
        {selected.length !==0 ?<span className="dropdown-button-label">{`${selected.length} selected`}</span> : <span className="dropdown-button-label">Choose Options</span> }  
        </button>
      {showOption &&  <ul className="dropdown-menu">
          <li className="dropdown-reset" onClick={handleReset}>Reset Selection</li>
         {options.map((option,index)=><li className="list-dropdown" key={option.id}> <input  type="checkbox" checked={selected.includes(option.id)} onChange={()=>handleSelected(option.id)}></input>
          <span>{`Option`} {option.id}</span></li>)} 
          
        </ul> }
      </div>

    
    { !showOption && <button className="submit-button" onClick={handleSubmit}>Submit</button> }
     {submit && <div className="result-area">
      {submitOptions.length === 0 ? <span>Please select at least one</span> :  (submitOptions.map((select,index)=> <span key={index}>{(`Option${select}`)}</span>)) }
      </div> }
      
     
    </div>
    )
}
export default MultiSelectDropdown