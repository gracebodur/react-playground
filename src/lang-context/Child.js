import React from 'react'
import GrandChild from '../lang-context/GrandChild'

export default function Child() {
    return(
        <main role='main' className='Child'>
            <GrandChild />
        </main>
    )
}