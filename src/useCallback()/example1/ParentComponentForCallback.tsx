import { useCallback } from "react";
import { MyChild } from "./MyChild";

export const ParentComponentForCallback = () =>{
    const handleClick = () => {
        console.log('i was clicked')
      };
      
        return(
            <MyChild handleClick={handleClick}/>
        )
}