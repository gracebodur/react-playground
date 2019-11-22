import React from 'react'
import languageSpecificCopy from '../lang-context/languageSpecificCopy'
import LanguageContext from '../lang-context/LanguageContext'

//1. import the context

export default class GreatGrandChild extends React.Component{
    //2. create an instance by wrapping it in a static variable
    static contextType = LanguageContext
    render() {
        //The || {} is giving us a safety net to avoid dealing with 
        //undefined and instead use an empty object in the worst case;
        //changed the props(en-US) to [this.context.lang]
        const copy = languageSpecificCopy['this.context.lang'] || {}
        return(
            <section>
                <h2>{copy.title}</h2>
                <p>{copy.body}</p>
                {/* <button> */}
              
            </section>
        )
    }
}