const validationForm = () =>{
    const username0 = document.getElementById('username0')
    const usernameError = document.getElementById('username0Error')
    const email0 = document.getElementById('email0')
    const email0Error = document.getElementById('email0Error')
    const password1 = document.getElementById('password1')
    const password1Error = document.getElementById('password1Error')
    const password2 = document.getElementById('password2')
    const password2Error = document.getElementById('password2Error')
    
    if(username0.value == ""){
        username0.style.border = "1px solid red"
        username0Error.textContent = "Please provide a username"
        username0Error.style = "color: red"
        return false
    }else{
        username0.style.border = "1px solid blue"
        username0Error.textContent = ""
    }

    if(email0.value == ""){
        email0.style.border = "1px solid red"
        email0Error.textContent = "Please provide an email"
        email0Error.style = "color: red"
        return false
    }else{
        email0.style.border = "1px solid blue"
        email0Error.textContent = ""
    }

    if(password1.value == ""){
        password1.style.border = "1px solid red"
        password1Error.textContent = "Please enter password"
        password1Error.style = "color: red"
        return false
    }else{
        password1Type.style.border = "1px solid blue"
        password1Error.textContent = ""
    }

    if(password2.value == ""){
        password2.style.border = "1px solid red"
        password2Error.textContent = "Please enter password"
        password2Error.style = "color: red"
        return false
    }else if(password2.value != password1.value){
        password2.style.border = "1px solid red"
        password2Error.textContent = "Password should be the same as the one entered above"
        password2Error.style = "color: red"
        return false
    }else{
        password2.style.border = "1px solid blue"
        password2Error.textContent  = ""
    }

    
}