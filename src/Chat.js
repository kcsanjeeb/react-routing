import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

const Chat = () => {
       

    const { searchId } = useParams();
    return (
        <h1>{searchId}</h1>
    )
}

export default Chat
