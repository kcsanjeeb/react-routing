import React, { useEffect, useState } from 'react'
import {useHistory} from "react-router-dom"
const FirstPage = ({Icon,title,id}) => {
 
    const history = useHistory();

    const selectChannel = () => {
        console.log('clickede')
        if(id){
            history.push(`/search/${id}`)
        }else{
            history.push(title)
        }
    }
    return (
     <div className="">
         <h1>Index</h1>
         <div className="sidebarOption" onClick={selectChannel}>
            {Icon && <Icon className="sidebarOption_icon"/>}
            {Icon ? (
                <h3>{title}</h3>
            ):(
                <h3 className ="sidebarOption_channel">
                    <span className ="sidebarOption_hash">#</span> sanjeeb</h3>
            )}
        </div>
     </div> 
    )
}

export default FirstPage
