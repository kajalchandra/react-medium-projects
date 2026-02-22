import { useState } from "react"

const QuizApp = ()=>{
    const [startIndex,setStartIndex] = useState(0)
    const [selected,setSelected] = useState("")
    const [score,setScore] =  useState(0)
    const [isError,setIsError] = useState(false)
    const [showScore,setShowScore] = useState(false)
    
    const Quiz = [
        {
            id: 1,
            question : "What is the capital of Haryana?",
            options : [
                {answer: "Yamunanagar",isTrue: false},
                {answer:"Panipat" , isTrue:false},
                {answer:"Gurgaon", isTrue:false},
                {answer:"Chandigarh",isTrue:true}
            ]
        },
        {
            id : 2,
            question : "What is the capital of Punjab?",
            options : [
                {answer: "Patiala",isTrue:false},
                {answer: "Ludhiana",isTrue:false},
                {answer:  "Amritsar",isTrue:false},
                {answer: "Chandigarh",isTrue:true}
            ]
        },
        {   
            id : 3,
            question : "What is the capital of India?",
            options : [
                {answer:"Delhi",isTrue:true},
                {answer:"Mumbai",isTrue:false},
                {answer:"Kolkata",isTrue:false},
                {answer:"Chennai",isTrue:false}
            ]
        },

        {   
            id:4,
            question: "What is the capital of Uttarakhand?",
            options : [
                {answer: "Roorkee",isTrue:false},
                {answer: "Haridwar",isTrue: false},
                {answer: "Dehradun",isTrue:true},
                {answer: "Nanital",isTrue:false}
            ]
        },
        {
            id:5,
            question : "What is the capital of Uttar Pradesh?",
            options : [
                {answer: "GB Nagar",isTrue: false},
                {answer: "Lucknow", isTrue: true},
                {answer: "Prayagraj",isTrue:false},
                {answer: "Agra",isTrue:false}
            ]
        }
    ]

    const handlePlayAgain = ()=>{
        setShowScore(false)
        setStartIndex(0)
        setScore(0)
        setSelected("")
        setIsError(false)

    }

    const TotalScore = ()=>{
        return(
            <div className="quiz-container" style={{textAlign:"center"}}>
                <h2>Your score</h2>
                <p>{`${score}/${Quiz.length}`}</p>
                <button className="btn" onClick={handlePlayAgain}>Play Again</button>
            </div>
        )
    }
    const handleSubmit = ()=>{
        if(selected === "" ){return setIsError(true)}
        const option = Quiz[startIndex]
        console.log("options",option)

        const answer = option.options.find((opt)=>opt.isTrue === true)
        console.log("answer",answer)

        if(selected === answer.answer){
            setScore((prev)=>prev + 1)
        }
       if(selected === ""){
        setIsError(true)
       }else if(startIndex < Quiz.length-1){
       setStartIndex((prev)=>prev + 1)
       setIsError(false)
       setSelected("")
       }
       console.log("startIndex",startIndex)
       if(startIndex === Quiz.length-1 && selected !=""){
        setShowScore(true)
        setIsError(false)
       setSelected("")
       }
       

}
const question = Quiz[startIndex]

{if(showScore === true) return <TotalScore/>}

    return(
        <div>
            <h1>Quiz App</h1>
          
            <div className="quiz-container">
                
                 
                
                 <h2>{`Question ${startIndex+1}`}</h2>
                   
                    <p>{`${question.question}`}</p>
                    {question.options.map((option,index)=>
                    <ul key={index}>
                    <input type="radio" value={option.answer} checked={selected === option.answer} onChange={(e)=> setSelected(e.target.value)}></input><span>{option.answer}</span>
                    
                    </ul>)}
                    {isError ===true ? <p>{`please select an option before submitting.`}</p>:null}
                    <button className="btn" onClick={handleSubmit}>Submit</button>
                    </div>
             
               
                 
                   
                
            
            </div>

       
    )
}
export default QuizApp