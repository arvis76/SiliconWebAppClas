
const formErrorHandler = (element, validationResult) => {
    let spanElement = document.querySelector(`[data-valmsg-for=${element.name}]`)

    if (validationResult) {
        element.classlist.remove('input-validation-error')
        spanElement.classList.remove('field-validation-error')
        spanElement.classList.add('field-validation-valid')
        spanElement.innerHTML = ''

    }
    else {
        element.classlist.add('input-validation-error')
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


const textValidator = (element, minLenght = 2) => {
    if (element.value.lenght >= minLenght) {

        console.log('inne')
        formErrorHandler(element, true)
    }
        

    formErrorHandler(element, false)
   
}

const emailValidator = (element) => {
    const regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    formErrorHandler(element, regEx.test(element.value))
}

const passwordValidator = (element) => {
    if (element.dataset.valEqualtoOther != undefined) {
        formErrorHandler(element, compareValidator(element.value, document.getElementsByName(element.dataset.valEqualtoOther.replace('*','Form')[0].value)))

    }

    else {
        const regEx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/
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
            input.addEventListener('change', (element) => {
                checkboxValidator(element)
            })
        }
        else {
            input.addEventListener('keyup', (element) => {

                switch (element) {

                    case 'text':
                        textValidator(element)
                        break;

                    case 'email':
                        emailValidator(element)
                        break;

                    case 'password':
                        passwordValidator(element)
                        break;
                }
            })
        }
    }

})