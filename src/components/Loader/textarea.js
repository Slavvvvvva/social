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
            {meta.error && meta.touched && meta.error}
        </div>
    )
}
export const ChackBox = ({input, meta, ...props}) => {
    
    return (
        <div className = {s.ChackControl+' '+ s.error}>
            <input type ='chackbox' {...input} {...props}/>
            {meta.error && meta.touched && meta.error}
        </div>
    )
}