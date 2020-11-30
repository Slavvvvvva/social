import React from 'react'
import s from './form.module.scss'

export const TextArea = ({input, meta, ...props}) => {
    
    return (
        <div className = {s.formControl+' '+ s.error}>
            <textarea {...input} {...props}/>
            {meta.error && meta.touched && <span>{meta.error}</span>}
        </div>
    )
}