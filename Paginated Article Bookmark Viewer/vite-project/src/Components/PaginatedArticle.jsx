import { useEffect, useState } from "react"
import ArticleCard from "./ArticleCard"

const PaginatedArticle = ()=>{
    
   
     const ITEMINEACHPAGE = 5
    const [currentPage, setCurrentPage] = useState(1)
    const [showBookmarked , setShowBookMarked] = useState(false)

    //const [articles,setArticles] = useState(new Array(TOTALARTICLES+1).fill({id : Date.now , text : "This is Article"})) 
    //console.log(articles)

    const [articles, setArticles] = useState(Array.from({length : 23 },(_,index)=>({
        id : index ,
        text : `This is article ${index + 1}`
    })))
    // console.log("articles",articles)
    // const [copyArticles , setCopyArticles] = useState(articles)
    const [saved , setSaved] = useState([])
   
    
   


    let sliceStart = (currentPage - 1)*ITEMINEACHPAGE
    let sliceEnd = sliceStart + 5
    

    //handle prev
    const handlePrev = ()=>{

        setCurrentPage((prev) => prev -1)
    }
    //handle next
    const handleNext = ()=>{
        setCurrentPage((prev)=> prev + 1)
       
    }
   
   const handleIsSaved = (i)=>{
    //if it is present , remove it
        if(saved.includes(i)){
           let filterArticle = saved.filter((id)=> id !== i)
           setSaved(filterArticle)
        }else{
            //not saved , then add it
            setSaved((prev)=> [...prev,i])
        }
        
        
   }
  
  
   useEffect(()=>{
    console.log(saved)
   },[saved])

   // toggling bookmarked
   const handleShowBookmarked = ()=>{
    setShowBookMarked((prev)=> !prev)
    setCurrentPage(1)
     
   }
  
   const visibleArticles = showBookmarked ? articles.filter((article)=> saved.includes(article.id)) : articles
    const totalItems = visibleArticles.length
    // edge case if i don't add any item and click on showArticles then visibleArticles.length will become 0 , which will result 0 , therefore i am using Math.max(1,0)
   const TOTALPAGE = Math.max(1,Math.ceil(totalItems/ITEMINEACHPAGE))

    return(
        <div className="container">
            <div className="heading">
                <div>
                    <h1>Articles</h1>
                </div>
                <div>
                    <input type="checkbox" checked={showBookmarked} onChange={handleShowBookmarked}></input>
                    <span>Show only bookmarked</span>
                </div>
                
            </div>
            {visibleArticles.length === 0 ? (<p>No Articles to show</p>):
            (
                  visibleArticles.slice(sliceStart , sliceEnd).map((article,index)=>
            
            <ArticleCard key={article.id} text={article.text} index={article.id}
            saved={saved}
            handleIsSaved = {handleIsSaved}
           />) 
            )}
           

            <div className="btns">
                <button  onClick={handlePrev} disabled={currentPage  === 1}>Prev</button>
                <p>{`Page ${currentPage} out of ${TOTALPAGE}`}</p>
                <button onClick={handleNext} disabled={currentPage === TOTALPAGE}>Next</button>
            </div>
        </div>
    )
}

export default PaginatedArticle