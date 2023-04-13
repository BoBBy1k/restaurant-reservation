import React from 'react'
import logo from '../../assets/LemonLogoIcon.png'
import './Footer.css'
export function Footer(props) {
    

    return (
        <footer>
            <div>
                <img src={logo} width="100" alt="logo" />
            </div>
            <p>
                © Copyright Little Lemon {" " +new Date().getFullYear()}
            </p>
        </footer>
    )
}
