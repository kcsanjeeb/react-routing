import React from 'react'
import {useParams} from "react-router-dom"
const SecondPage = () => {
    const {searchId} = useParams();
    return (
        <div className="">
            <h2>searched ::  {searchId} </h2>
        </div>
    )
}

export default SecondPage
