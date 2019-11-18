import React from 'react'
import Child from './Child'
import LangControl from '../lang-context/LangControl'

export default class AppLang extends React.Component{
    render() {
        return(
            <div className='AppLang'>
                <LangControl />
                <Child />
            </div>
        )
    }
}