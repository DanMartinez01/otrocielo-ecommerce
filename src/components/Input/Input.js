import React from "react";
import '../Input/Input.css';

export const Input = ({ id, label, type, value, onChange }) => {

    return (
        <input className="input" onChange={({ target }) => onChange(id, target.value)} value={value} type={type} />
    )
}

export default Input

