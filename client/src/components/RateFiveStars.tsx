import { useEffect, useState } from "react";
import Star from "./Star";

const RateFiveStars = () =>{
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    return(
        <div style={{display: "flex", gap: "3px"}}>
            {[...Array(5)].map((_, i)=>{
                const  ratingValue = i + 1;
                return(
                    <label 
                        htmlFor="" 
                        key={i} 
                        onClick={()=>{setRating(ratingValue)}} 
                        onMouseEnter={()=>setHover(ratingValue)}
                        onMouseLeave={()=>setHover(0)}
                        >
                        <input type="radio" name="rating" value={ratingValue} />
                        <Star color={ratingValue <= (rating || hover) ? '#ffbb00' : '#cccccc'}/>
                    </label> 
                );
            })}
        </div>
    );
}

export default RateFiveStars;