import React from 'react'
import * as section from './components/';
import "./MainPage.css"
export function MainPage(props) {
    

    return (
        <body>
            <article>
                <section.CallToAction />
                <section.Specials />
                <section.Testimonials />
                <section.About />
            </article>
        </body>
    )
}