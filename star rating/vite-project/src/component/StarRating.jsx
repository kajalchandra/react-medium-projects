
import { useState } from "react"
const StarRating = ()=>{
    const [starArray , setStarArray] = useState(new Array(5).fill(" ★"))
    const [rating, setRating] = useState(0)
    const handleRating = (e,i)=>{
        // console.log(i)
        let currentRating = i + 1
    //    console.log(currentRating)
        setRating(currentRating)
        const newStar = [...starArray]
        for(let j=0; j<= starArray.length-1;j++){
           
            if(j < currentRating){
                //  console.log("value of j in colored star ",j)
                newStar[j] = <span className="selected-star">{"★"}</span>
            }else if(j >=currentRating){
                //  console.log("value of j in uncolored star ",j)
                newStar[j] = <span className="star">{"★"}</span>
            }
        }

      setStarArray(newStar)
    }
    const handleReset = ()=>{
        
        console.log('rating',rating)
        const newStar = [...starArray]
        for(let j=0; j<rating ;j++){
            newStar[j] = <span className="star">{"★"}</span>
        }
       setStarArray(newStar)
       setRating(0)
    }

    return(
        <div className="container">
            <div className="star-container">
                 {starArray.map((star,index)=><span className="star" onClick={(e)=>handleRating(e,index)} key={index}>{star}</span>)}
            </div>

           <div className="rating-div">Rating :{rating}</div>

           <div className="btn-div">
            <button className="btn" onClick={handleReset}>Reset</button>
           </div>
         
        </div>
           
    )
}
export default StarRating