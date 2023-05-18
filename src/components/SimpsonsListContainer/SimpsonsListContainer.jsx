import React from 'react'
import { useState, useEffect } from 'react'
import SimpsonsList from '../SimpsonsList/SimpsonsList'
import './SimpsonsListContainer.css'

const SimpsonsListContainer = () => {

    const [simpsons, setSimpsons] = useState([])

    const [input, setInput] = useState({ name: "", num: "" })

    const handleInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const getNumber = (param) => {
        fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?count=${param}`)
            .then((res) => res.json())
            .then((data) => setSimpsons(data))
            .catch((error) => console.log(error))
    }

    const getName = (param) => {
        fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?character=${param}`)
            .then((res) => res.json())
            .then((data) => setSimpsons(data))
            .catch((error) => console.log(error))
    }

    const getNameAndNumber = (param, paramTwo) => {
        fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?count=${param}&character=${paramTwo}`)
            .then((res) => res.json())
            .then((data) => setSimpsons(data))
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        input.name && getName(input.name)

        input.num && getNumber(input.num)

        input.name && input.num && getNameAndNumber(input.num, input.name)

    }, [input])

    return (
        <>
            <div className='input-box'>
                <div className='input-box_ind'>
                    <label htmlFor="name">Busca por nombre:</label>
                    <input type="text" id='name' value={input.name} name='name' onChange={handleInput} />
                </div>

                <div className='input-box_ind'>
                    <label htmlFor="num">Trae un numero de simpsons:</label>
                    <input type="number" id='num' value={input.num} name='num' max={50} onChange={handleInput} />
                </div>
            </div>

            {!input.name && !input.num ? <></> : <SimpsonsList simpsons={simpsons} />}

        </>
    )
}

export default SimpsonsListContainer