import { useEffect, useState } from "react"
import { useRef } from "react"
const DrawCircle = ()=>{
    const [position , setPositioned] = useState([])
    const [history , setHistory] = useState([])
    const drawingRef = useRef(null)

    const handleClick = (e)=>{
        console.log("x:",e.clientX)
        console.log("y:",e.clientY)
        //console.log(drawingRef)
        const rect = drawingRef.current.getBoundingClientRect()
        // console.log("rect",rect.x , rect.y)
        const x = e.clientX - rect.x
        const y = e.clientY - rect.y
        console.log("boxX",x)
        console.log("boxY",y)
        
        setPositioned((prev)=>[...prev , {x : x , y: y}])
        if(history.length !==0){
            setHistory([])
        }
    }
    const handleUndo = () =>{
       // console.log(postion.pop())
       if(position.length === 0){
            return
       }
       let copyArray = [...position]
      
       let removed = copyArray.pop()
       setPositioned(copyArray)

        setHistory((prev)=>[...prev,removed])
    }
    
    const handleRedo = () =>{
        if(history.length === 0) return null
        let copyArray = [...history]
        let pushed = copyArray.pop()
        setHistory(copyArray)
        setPositioned((prev)=>[...prev,pushed])
    }

    useEffect(()=>{
        console.log("history",history)
    },[history])

    
    return(
    <div className='circle-drawer'>
        <div className='drawing-area' ref={drawingRef} onClick={handleClick}>
            {position.map((pos,index)=> <div className="circle" style={{position:"absolute",left:pos.x,top:pos.y}} key={index}></div>)}

        </div>
        <div className='buttons'>
        <button className='undo-btn' onClick={handleUndo}>
            Undo
        </button>
        <button className='redo-btn' onClick={handleRedo}>
            Redo
        </button>
        </div>
  </div>
    )
}

export default DrawCircle