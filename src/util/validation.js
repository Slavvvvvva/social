let validMaxLenght = (len) => (value) => {
    if (value && value.length > len) return `максимальная длинна ${len}  знаков`
    return undefined
}
let reqiredField = (value) => {
    if (value) return undefined
    return "обязательное поле"
}
export {reqiredField}
export {validMaxLenght}