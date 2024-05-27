
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


const compareValidator = (element, compareValue) => {
    if (element.value === compareValue)
        return true

    return false    
}


const textValidation = (element, minLenght = 2) => {
    if (element.value.lenght >= minLenght)
        formErrorHandler(element, true)

    formErrorHandler(element, false)
}

const emailValidator = (element) => {
    const regEx = /^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/
    formErrorHandler(element, regEx.test(element.value))
}

const passwordValidator = (element) => {
    if (element.dataset.valEqualtoOther != undefined) {
        formErrorHandler(element, compareValidator(element.value, document.getElementsByName(element.dataset.valEqualtoOther.replace('*','Form')[0].value)))
    }
    else {
        const regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!^%*?&]{8,15}$/
        formErrorHandler(element, regEx.test(element.value))
    }   
}

const checkboxValidator = (element) => {
    if (element.checked)
        formErrorHandler(element, true)

    formErrorHandler(element, false)

}

let forms = document.querySelectorAll('form')
let inputs = forms[0].querySelectorAll('input')

inputs.forEach(input => {
    if (input.dataset.val === 'true') {

        if (input.type === 'checkbox') {
            input.addEventListener('change', (e) => {
                checkboxValidator(e.target)
            })
        }
        else {

            input.addEventListener('keyup', (e) => {

                switch (e.target.type) {

                    case 'text':
                        textValidation(e.target)
                        break;

                    case 'email':
                        emailValidator(e.target)
                        break;

                    case 'password':
                        passwordValidator(e.target)
                        break;

                }

            })
        }
    }
 }) 