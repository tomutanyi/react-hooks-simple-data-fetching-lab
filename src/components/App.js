import React, { useEffect, useState } from "react";

function App()
{
    const [isLoad, setIsLoad]=useState(false)
    const [image, setImage]=useState("")
    useEffect(()=>{
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(r=>r.json())
        .then(data=>handleImage(data.message))
    }, [])
    
    function handleImage(image)
    {
        setIsLoad(true)
        setImage(image)
    }
    

    if(!isLoad)
    {
        return (
            <p>Loading...</p>
        )
    }
    return (
        <img src={image} alt="A Random Dog"/>
    )
}

export default App