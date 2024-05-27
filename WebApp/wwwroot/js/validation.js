
const formErrorHandler = (element, validationResult) => {
    let spanElement = document.querySelector(`[data-valmsg-for="${element.name}"]`)

    if (validationResult) {
        element.classList.remove('input-validation-error')
        spanElement.classList.remove('field-validation-error')
        spanElement.classList.add('field-validation-valid')
        spanElement.innerHTML = ''

    }
    else {
        element.classList.add('input-validation-error')
        spanElement.classList.add('field-validation-error')
        spanElement.classList.remove('field-validation-valid')
        spanElement.innerHTML = element.dataset.valRequired
    }
}


const lengthValidator = (element, minLenght = 2) => {
    if (element.value.lenght >= minLenght)
        return true 

    return false
}

const compareValidator = (element, compareValue) => {
    if (element.value === compareValue)
        return true

    return false    
}

const checkedValidator = (element) => {
    if (element.checked)
        return true 

    return false
}



const textValidation = (element) => {
    formErrorHandler(element, lengthValidator(element))
}

const checkboxValidator = (element) => {
    formErrorHandler(element, checkedValidator(element))
}