import React from 'react'
import LanguageContext from './LanguageContext'

// console.log(LanguageContext)
//import language context
//

export default function LangControl(props) {
    return (
        <LanguageContext.Consumer>
            {/* {function renderProp() { */}
            {(value) => { 
                console.log(value)
            return (
                <>
                {/* <button> */}
                <button
                    onClick={() => props.onSetLang('en-GB')}
                    disabled={value.lang === 'en-GB'}>
                    British {' '}
                    <span role='img' aria-label='en-GB'>🇬🇧</span>
                </button>
                {' '}
                {/* <button> */}
                <button
                    onClick={() => props.onSetLang('en-US')}
                    disabled={value.lang === 'en-US'}>
                    American{' '}
                    <span role='img' aria-label='en-US'>🇺🇸</span>
                </button>
                {' '}
                {/* <button> */}
                <button
                    onClick={() => props.onSetLang('ko')}
                    disabled={value.lang === 'ko'}>
                    Korean{' '}
                    <span role='img' aria-label='ko'>🇰🇷</span>
                </button>
                {' '}
                {/* <button> */}
                <button
                    onClick={() => props.onSetLang('fil')}
                   disabled={value.lang === 'fil'}>
                    Filipino {' '}
                    <span role='img' aria-label='fil'>PH</span>
                </button>
                {' '}
                <button
                    onClick={() => props.onSetLang('klingon')} >
                    Klingon!{' '}
                    {/* yes I know it's a vulcan salut but star-wars */}
                    <span role='img' aria-label='klingon'>🖖</span>
                </button>
                </>
                )
            }}
            </LanguageContext.Consumer>
        )
    }
