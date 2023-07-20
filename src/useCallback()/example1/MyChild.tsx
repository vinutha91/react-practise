import { useEffect, useRef } from "react"

export const MyChild = ({handleClick} : any) =>{
    const renderCount = useRef(0);
    return (
        <>
        <button onClick={() =>{
            handleClick()
        }}>
            Click Me!
        </button>
        {(renderCount.current ++)} time(s)
        </>
    )
}