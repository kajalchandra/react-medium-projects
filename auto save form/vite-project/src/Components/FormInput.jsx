import { useEffect, useState } from "react"

const FormInput = ()=>{
    
    const [formData, setFormData] = useState(()=>{
        return JSON.parse(localStorage.getItem("user")) || {
            name : "",
            email : "",
            message : ""
        }
    })
    console.log(formData)


    // 2. save data whenever form changes
    useEffect(()=>{
  
         localStorage.setItem("user",JSON.stringify(formData)  
       )
    },[formData])

    return (
        <div>
            <h1>Auto Save Form</h1>
            <form>
                <label>Name: </label>
                <input type="text" name="name" value={formData.name} onChange={(e)=>setFormData({...formData, name: e.target.value})}></input>
                <br></br>
                <br></br>
                
                <label>Email: </label>
                <input type="email" name="email" value={formData.email} onChange={(e)=> setFormData({...formData,email: e.target.value})}></input>
                <br></br>
                <br></br>
                <label>Message:</label>
                <textarea rows={2}  value={formData.message} onChange={(e)=> setFormData({...formData,message: e.target.value})}></textarea>
            </form>
           
        </div>
    )
}

export default FormInput