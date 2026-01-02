import { Settings } from "lucide-react"

const Setting = ({data,setData,error})=>{
    // console.log('data',data)
    const {settings} = data
    const handleSettings = (e)=>{
        setData({
            ...data,
            settings : {
                theme : e.target.value
            }
        })

    }
    return(
        <div>
            <div>
                 <ul>
                    <li><input type="radio" value={"dark"}  checked={settings.theme ==="dark"} onChange={handleSettings}></input>Dark</li>
                    <li><input type="radio" value={"light"} checked={settings.theme === "light"} onChange={handleSettings}></input>Light</li>
                </ul>
                <p>{error.interest}</p>
            </div>
           
           
           
           
        </div>
    )
}
export default Setting