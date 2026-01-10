import { useEffect, useState } from "react";
const DragDrop = ()=>{

const [leftFruits,setLeftFruits] = useState([
  "A",
  "B",
 
 
]);
const [copyFruit, setCopyFruits] = useState([
    "Apple",
  "Banana",
  "Orange",
  "Mango",
  
])



const [rightFruits, setRightFruits] = useState([]);

const [draggedItem, setDraggedItem] = useState(null);
const [fromIndex, setFromIndex] = useState(null)
// react doesn't know from which column fromIndex coming from , so to fix this we will also have a draggedSource, whether it is dragged from left or right
const [draggedSource, setDraggedSource] = useState(null)




const handleDragStart = (fruit,index,source)=>{
    // console.log('draggedFruit',fruit)
    console.log('fromIndex',index)
    setDraggedItem(fruit)
   setFromIndex(index)
   setDraggedSource(source)
    
    console.log('drag start')
}

const handleDropToRight = ()=>{
    setRightFruits((prev)=> prev.includes(draggedItem)? [...prev]: [...prev,draggedItem])
    setLeftFruits((prev) => prev.filter((fruit)=> fruit !== draggedItem))
    setDraggedItem(null)
    

}


const handleDropToLeft = ()=>{
    setLeftFruits((prev)=> prev.includes(draggedItem)?[...prev]:[...prev,draggedItem])
    setRightFruits((prev)=> prev.filter((fruit)=> fruit !== draggedItem))
    setDraggedItem(null)
}

// same column left side reordering
const handleLeftDrop =(i,source)=>{
    // console.log("droppedfruit",fruit)
    // console.log("dropped")
    // console.log('toIndex',i)
    if(draggedSource !== source) return
   setLeftFruits((prev)=>{
    const list = [...prev]

    //1. remove dragged item
    const [movedItem] = list.splice(fromIndex,1)

    //2. insert it at new position
    list.splice(i,0,movedItem)

    return list;
   })

}

// same column right side reordering
const handleRightDrop = (i,source)=>{
    if(draggedSource !== source) return
    setRightFruits((prev)=>{
        const list = [...prev]
        //1 remove drageed item
        const [movedItem] = list.splice(fromIndex,1)

        //2. insert it at new position
        list.splice(i,0,movedItem)

        return list
    })
    // after reorder setFromIndex(null)
    setDraggedSource(null)
    setFromIndex(null)
}

// doing reSet of everything
const handleReset = ()=>{
    setRightFruits([])
    setLeftFruits(copyFruit)

}

    return(
        <div className="app-wraper">
            <header>
                <h1>Drag & Drop Fruits</h1>
                <button className="reset-btn" onClick={handleReset}>Reset Lists</button>
            </header>
            {/* left */}
            <div className="container">
                <div className="column"
                onDragOver={(e)=>{e.preventDefault()
                    console.log("parent onDragOver triggered")
                }}
                onDrop={handleDropToLeft}>
                    <h2>Available Fruits</h2>
                  {leftFruits.length ===0  &&  <p>No fruits here</p>}
                    {leftFruits.map((fruit,index)=><div 
                    key={index} 
                    
                    draggable
                    onDragStart={()=> handleDragStart(fruit,index,"left")}
                    onDragOver={(e)=>{e.preventDefault()
                        console.log("child onDragOver triggered for",fruit)
                    }}
                    onDrop={(e)=> {
                        e.stopPropagation();
                        handleLeftDrop(index,"left")}}
                    
                    className="item">{fruit}</div>)}
                </div>

                {/* right */}
                <div className="column drop-zone"
                onDragOver={(e)=>e.preventDefault()}
                onDrop={handleDropToRight}>
                    <h2>Dropped Fruits</h2>
                    <p>Drop fruits here</p>
                    {rightFruits.map((fruit,index)=><div className="item" key={index}
                    draggable
                    onDragStart={()=>handleDragStart(fruit,index,"right")}
                    onDragOver={(e)=>e.preventDefault()}
                    onDrop={(e)=>{
                        e.stopPropagation();
                        handleRightDrop(index,"right")}}>
                    {fruit}</div>)}

                </div>
            </div>
        </div>
    )
}
export default DragDrop