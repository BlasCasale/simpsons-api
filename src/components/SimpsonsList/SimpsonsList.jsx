import React from 'react'
import Simpsons from '../Simpsons/Simpsons'
import './SimpsonsList.css'

const SimpsonsList = ({ simpsons }) => {

    return (
        <div className='layout'>
            {simpsons.map(simpson => <Simpsons key={Math.random()} {...simpson} />)}
        </div>
    )
}

export default SimpsonsList