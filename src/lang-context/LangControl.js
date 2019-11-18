import React from 'react'
import LanguageContext from './LanguageContext'

// console.log(LanguageContext)
//import language context
//

export default function LangControl() {
    return (
        <LanguageContext.Consumer>
            {/* {function renderProp() { */}
            {(value) => { 
                console.log(value)
            return (
                <>
                {/* <button> */}
                <button
                    disabled={value.lang === 'en-GB'}>
                    British {' '}
                    <span role='img' aria-label='en-GB'>🇬🇧</span>
                </button>
                {' '}
                {/* <button> */}
                <button
                    disabled={value.lang === 'en-US'}>
                    American{' '}
                    <span role='img' aria-label='en-US'>🇺🇸</span>
                </button>
                {' '}
                {/* <button> */}
                <button
                    disabled={value.lang === 'ko'}>
                    Korean{' '}
                    <span role='img' aria-label='ko'>🇰🇷</span>
                </button>
                {' '}
                {/* <button> */}
                <button
                   disabled={value.lang === 'fil'}>
                    Filipino {' '}
                    <span role='img' aria-label='fil'>PH</span>
                </button>
                {' '}
                </>
                )
            }}
            </LanguageContext.Consumer>
        )
    }
