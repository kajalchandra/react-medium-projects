import { useState } from "react"

const ROW = 10
const COL = 10

const CinemaHall = ()=>{
    const [seat,setSeat] = useState(
        Array.from({length:ROW},(_,i)=>
            Array.from({length:COL},(_,j)=> ({label: `${String.fromCharCode(65+i)}${j}`,status: "available"})))
    )
    // console.log("seat",seat)
    //const [selected, setSelected] = useState([])
   
    const selectedSeat = (e,rowIdx,colIdx)=>{
       
        //console.log(seat[rowIdx][colIdx])
        let copySeat = [...seat]
        
        copySeat[rowIdx][colIdx] = {label: copySeat[rowIdx][colIdx].label,status:"selected"}
        // setSeat((prev)=>[...prev,{label : copySeat[rowIdx][colIdx],status:"selected"}])
        setSeat(copySeat)
    }

    const handleBookedSeats = ()=>{
        // console.log(selected)
        // {selected.map((seat)=> seat.status === "selected"? "disabled-seat":"")}
        console.log(seat)
        //pehle row k andar jaayenge phir uske andar jo array hai , usme mapping karenge aur check karenge ki seat.status selected hai ya nhai
        const bookedSeat = seat.map((seatRow)=> (seatRow.map((seat)=>(seat.status==="selected"? {...seat,status:"booked"}:{...seat}))))
        setSeat(bookedSeat)
    }
    const handleClearSeats = ()=>{
        const clearSeat = seat.map(((seatRow)=> (seatRow.map((seat)=>seat.status ==="selected"?{...seat,status:"available"}:{...seat}))))
        setSeat(clearSeat)
    }
    const handleResetSeat = ()=>{
        const resetSeat = seat.map((seatRow)=>(seatRow.map((seat)=> seat.status === "selected"|| seat.status === "booked"?{...seat,status:"available"}: seat)))
        setSeat(resetSeat)
    }

    return( 
        <div className="main-container">
            <h1>Cinema Hall</h1> 
            <div className="button-section">
                <button onClick={handleBookedSeats}>Book Seats</button>
                <button onClick={handleClearSeats}>Clear</button>
                <button onClick={handleResetSeat}>Reset</button>
            </div>
            <div className="cinema-hall">
                {seat.map((row,rowIndex)=>(<div key={rowIndex} className="row">
                    {row.map((seat,colIdx)=><div key={colIdx} className={`col 
                    ${seat.status === "selected"? "selected-seat":""}
                    ${seat.status === "booked"? "disabled-seat":""}
                    `}
                    onClick={(e)=>selectedSeat(e,rowIndex,colIdx)}>
                        {seat.label}
                    </div>)}
                </div>))}
                
             
            </div>
        </div>
    )
}
export default CinemaHall