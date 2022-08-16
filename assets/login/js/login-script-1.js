const email = document.querySelector('#email')
const passwordInput = document.querySelector('#password')
const eyeoutline = document.querySelector('.eye-svg')
const check = document.querySelector('.eye-svg')
const enter = document.querySelector('#bnt')
const form = document.querySelector('.card-login')

let usuario = [
    { email: 'elleylson.santtos.7@gmail.com', senha: 'Elleylson69' },
    { email: 'maxta.gamer@gmail.com', senha: 'MxtTrap22' }
]
const emailValido = () => email.value
const senhaValida = () => passwordInput.value


const validateInputPassword = () => passwordInput.value.trim().length > 0;
const validateInputEmail = () => email.value.trim().length > 0;

const keyUpDisplayEye = () => {

    check.classList.add('display-eye-svg')

    if (passwordInput.value == "") {
        check.classList.remove('display-eye-svg')
    }

}


const emailErro = () => {
    const InputEmailIsValide = validateInputEmail()

    if (!InputEmailIsValide) {
        return email.classList.add('error');


    }
}
const removeEmailErro = () => {
    const InputEmailIsValide = validateInputEmail()

    if (InputEmailIsValide) {
        email.classList.remove('error');

    }
}

const passwordErro = () => {

    const InputPasswordIsValide = validateInputPassword()

    if (!InputPasswordIsValide) {
        passwordInput.classList.add('error');

    }

}

const removePasswordErro = () => {

    const InputPasswordIsValide = validateInputPassword()

    if (InputPasswordIsValide) {
        return passwordInput.classList.remove('error')
    }
}

enter.addEventListener('click', () => passwordErro())
passwordInput.addEventListener('change', () => removePasswordErro())

enter.addEventListener('click', () => emailErro())
email.addEventListener('change', () => removeEmailErro())



const eyeclic = () => {

    let passwordTypeispassword = passwordInput.type == "password"

    if (passwordTypeispassword) {
        showPassword()
    } else {
        //ação
        hidePassword()
    }

}

const showPassword = () => {
    passwordInput.setAttribute("type", "text", )
    eyeoutline.setAttribute("src", "svgs/eye-outline.svg")

}

const hidePassword = () => {
    passwordInput.setAttribute("type", "password")
    eyeoutline.setAttribute("src", "svgs/eye-off.svg")

}



form.addEventListener('submit', Event => {
    Event.preventDefault()

    // const exclude = /[^@-.w]|^[_@.-]|[._-]{2}|[@.]{2}|(@)[^@]*1/;
    // const check = /@[w-]+./;
    // const checkend = /.[a-zA-Z]{2,3}$/;

    const emailIsvalido = emailValido()
    const senhaIsValida = senhaValida()
    const emailIndex = usuario[0].email
    const senhaIdex = usuario[0].senha

    if (emailIsvalido != emailIndex) {
        email.classList.add('error');

    } else {
        email.classList.remove('error');
    }

    if (senhaIsValida != senhaIdex) {
        passwordInput.classList.add('error');
    } else {
        passwordInput.classList.remove('error');
    }

    if (emailIsvalido == usuario[0].email && senhaIsValida == usuario[0].senha) {
        return location = "https://eleilson69.github.io/profile/"

    }
})

check.addEventListener('click', () => eyeclic())
passwordInput.addEventListener('keyup', () => keyUpDisplayEye())