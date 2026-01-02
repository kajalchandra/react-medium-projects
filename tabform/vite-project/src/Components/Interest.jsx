const Interest = ({data,setData,error})=>{
    console.log(error)
    const {interest} = data
   const handleChange = (e)=>{
    console.log(e.target.value)
        setData({
            ...data,
            interest : e.target.checked ? [...interest,e.target.value] : interest.filter((i)=> i!==e.target.value),
        })  
   }

    return(
        <div>
         <ul>
            <li><input type="checkBox" value={"coding"} checked={interest.includes("coding")}  onChange={(e)=>handleChange(e)} ></input>Coding</li>
           
            <li><input type="checkBox" value={"listening music"} checked={interest.includes("listening music")} onChange={(e)=>handleChange(e)}></input>listening music</li>
        
            <li><input type="checkBox" value={"singing"} checked={interest.includes("singing")} onChange={(e)=>handleChange(e)}></input>Singing</li>
           
         </ul>
        {error.interest && <p className="error">{error.interest}</p>}
        </div>
    )
}
export default Interest