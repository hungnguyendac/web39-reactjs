import React, { useContext } from 'react'
import { MyContext } from '../contexts/MyContext'

const ComponentC = () => {

    const money = useContext(MyContext);
    console.log(money);
    
  return (
    <div>{money}</div>
  )
}

export default ComponentC