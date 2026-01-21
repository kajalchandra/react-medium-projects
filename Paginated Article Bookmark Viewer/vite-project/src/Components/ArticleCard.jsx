import { useEffect, useState } from "react"

const ArticleCard = ({index,text,handleIsSaved,saved})=>{
     
     return(
        <div className="card">
            <div>
                <h2>{`Article ${index+1}`}</h2>
                <p>{text} </p>
            </div>
            <div>
               <span className={saved.includes(index)?"star active":"star"}  onClick={()=>handleIsSaved(index)}>☆</span>
            </div>
           
        </div>
    )
}

export default ArticleCard