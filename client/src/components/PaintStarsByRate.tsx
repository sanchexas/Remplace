import { useEffect, useState } from "react";
import Star from "./Star";

type PaintStarProps ={
    rate: number
}

const PaintStarsByRate = ({rate}: PaintStarProps) =>{
    return(
        <div style={{display: "flex", gap: "3px"}}>
            {[...Array(5)].map((_, i)=>{
                const  ratingValue = i + 1;
                return(
                    <Star color={ratingValue <= rate ? '#ffbb00' : '#cccccc'}/>
                );
            })}
        </div>
    );
}

export default PaintStarsByRate;