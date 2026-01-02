const Profile = ({data,setData,error})=>{
    const {name,age,email} = data
const handleData = (e,value)=>{
    setData({
        ...data,
        [value] : e.target.value
        // name : e.target.value,
        // age : e.target.value,
        // email : e.target.value
    })
}
   // console.log("data",data)
    return(
        <div className="profile-tab">
            <form>
                <div className="input-div">
                    <label className="label">Name:</label>
                    <input className="input" type="text" value={name} onChange={(e)=>handleData(e,"name")}></input>
                </div>
               {error.name && <p className="error">{error.name}</p>}
                <div className="input-div">
                    <label className="label">Age:</label>
                    <input className="input" type="number" value={age} onChange={(e)=>handleData(e,"age")}></input>
                </div>
                {error.age && <p className="error">{error.age}</p>}
                <div className="input-div">
                    <label className="label">Email:</label>
                    <input className="input" type="text" value={email} onChange={(e)=>handleData(e,"email")}></input>
                </div>
                {error.email &&<p className="error">{error.email}</p>}
            </form>
        </div>
    )
}
export default Profile