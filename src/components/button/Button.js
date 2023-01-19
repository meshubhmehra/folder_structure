import React from 'react'

export const Button = ({ title, icon, handleClick }) => {
    return (
        <button onClick={handleClick}>
            {icon} {title}
        </button>
    )
}

