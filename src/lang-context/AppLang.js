import React from 'react'
import Child from './Child'
import LangControl from '../lang-context/LangControl'
import LanguageContext from './LanguageContext' // add context

export default class AppLang extends React.Component{
    state= {
        lang: window.navigator.language
    }
    handleSetLang = (lang) => {
        this.setState({lang})
    }
    render() {
        const contextValue = {
            lang:this.state.lang
        }
        return(
            //wrap jsx and components in the Provider add in value to the Provider
            // <LanguageContext.Provider
            // value={{ lang: window.navigator.language }}> 
            <LanguageContext.Provider value = {contextValue}>
                <div className='AppLang'>
                    <LangControl onSetLang={this.handleSetLang}/>
                    <Child />
                </div>
            </LanguageContext.Provider>
        )
    }
}