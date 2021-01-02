import React from 'react'
import s from './form.module.scss'

export const TextArea = ({input, meta, ...props}) => {
    
    return (
        <div className = {s.textArea+' '+ s.error}>
            <textarea {...input} {...props} wrap ='hard'/>
            {meta.error && meta.touched && meta.error}
        </div>
    )
}
export const Input = ({input, meta, ...props}) => {
    
    return (
        <div className = {s.formControl+' '+ s.error}>
            <input {...input} {...props}/>
            {meta.error && meta.touched && <span>{meta.error}</span>}
        </div>
    )
}