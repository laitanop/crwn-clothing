import React from 'react'
import './custom-button.styles.scss'


const CustomButton = ({children, insGoogleSignIn, ...otherProps}) => (
    <button className={`${insGoogleSignIn ? 'google-sign-in': ''} custom-button`} {...otherProps}>
{children}

    </button>
)

export default CustomButton