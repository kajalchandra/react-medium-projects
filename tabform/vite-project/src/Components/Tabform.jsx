import Profile from "./Profile"
import Interest from "./Interest"
import Setting from "./Setting"
import { Component } from "lucide-react"
import { useState } from "react"

const Tabform = ()=>{
    const [activeTab , setActiveTab] = useState(0)
    // data needs to be persistance across all the tab
    const [data,setData] = useState({
        name : "Sia",
        age : 26,
        email : "sia123@gmail.com",
        interest : ["coding","listening music","singing"],
        settings : {
            theme : "dark"
        }
    })


    const [error,setError] = useState({
        // name : "name is invalid",
        // age : "age is invalid",
        // email : "email is invalid"
})
  
    //we will have a tab
    const Tabs = [
        {
            name : "Profile",
            Component: Profile,
            validate : ()=>{
                const error = {}
                if(!data.name || data.name.length <=1){
                    error.name = "name is invalid"
                    //return true , this is wrong , when when i return then my function don't look for the next line to get execute , that is why we should not return from here
                    
                }
                 if(!data.age|| data.age<18){
                    error.age = "age is invalid"
                     //return true
                    
                }
              if(!data.email.length  || data.email.length <=1){
                    error.email = "email is invalid"
                     //return true
                    
                }
                setError(error)
                if(error.name || error.age || error.email){
                    
                    return false
                    
                }else{
                    return true
                }
                
            }
            
        },
        {
            name : "Interest",
            Component : Interest,
            validate : ()=>{
                const error = {}
                if(data.interest.length===0){
                    error.interest = "Select atleast one from the list"
                }
                setError(error)
                if(error.interest){
                    return false
                }else{
                    return true
                }
            }
        },
        {
            name : "Settings",
            Component: Setting
        }

    ]
    const selectedTab = (e,i)=>{

        console.log(i)
        setActiveTab(i)
    }
    const handleNext = ()=>{
        const val = Tabs[activeTab].validate()
        
      
        if (val){
            setActiveTab((prev)=> prev + 1)
        }
    }
    const ActiveComponent = Tabs[activeTab].Component
    
    return(
        <div className="tab-container">
            <div className="tab-btns">
            {
                Tabs.map((tab,index)=> <div className="btns" onClick={(e)=>selectedTab(e,index)} key={tab.name}>{tab.name}</div>)
            }
            
            </div>
            <div className="active-Component">
                <ActiveComponent data={data} setData={setData} error={error}/>
            </div>
            <div className="btn-container">
              {activeTab > 0 &&  <button className="btns">Prev</button>}
               
               {activeTab < Tabs.length-1 && <button className="btns" onClick={handleNext}>Next</button>}
               {activeTab === Tabs.length-1 &&  <button className="btns">Submit</button> }
            </div>
           
        </div>
    )
}
export default Tabform