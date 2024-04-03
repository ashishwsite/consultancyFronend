import React, { useContext, useEffect, useState } from 'react'
import Alertmess from './Alertmess';


const Alert = () => {
   
    const [cnt,setcnt]=useState(0);
    const [message,setmessage]=useState("8130923044")
    useEffect(()=>{
        setInterval(() => {
            // Update count state every 1000 milliseconds (1 second)
           setcnt(cnt+1)
           if(message=='8178569324'){
            setmessage('1508ramshish')
           }
           else
           setmessage("8178569324")
          }, 2000);
        //   console.log(cnt)
    }
    ,[cnt])
  return (
    <>
   <Alertmess message={message}/>
   </>
  )
}

export default Alert
