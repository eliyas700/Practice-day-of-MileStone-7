
const checkValidation=()=>{
    const inputText= document.getElementById('email-input')
    const input=inputText.value;
    const display= document.getElementById('display')
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)){
        display.innerHTML=`
        <p class="text-success">${input} is a valid email</p>`
    }
    else{
        display.innerHTML=`
        <p class="text-danger">${input} is a invalid email</p>`
    }
    inputText.value=''
    
}

 