import React from "react";

export const Input = ({ id, label, type, value, onChange }) => {

    return (
        <input onChange={({ target }) => onChange(id, target.value)} value={value} type={type} />
    )
}

export default Input

