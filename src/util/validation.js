import React from 'react'
import v from './val.module.scss'

let validMaxLenght = (len) => (value) => {
if (value && value.length > len) return (
    <span className = {v.span}> {` Maximal lenght ${len} simbols`}  </span>
) 
    return undefined
}
let reqiredField = (value) => {
    if (value) return undefined
    return (
        <span className = {v.span}> Reqired field  </span>
    )
}
export {reqiredField}
export {validMaxLenght}