/* const resultArea = document.querySelector(".result")
const inputEmail = document.querySelector(".email")
const inputEmailAgain = document.querySelector(".email-again")
const result2 = document.querySelector(".result2") */


function sendForm(element) {
    const box = element.parentElement
    console.log(box)
    const result = box.querySelector(".result")
    const inputEmail = box.querySelector(".email")
    const inputEmailAgain = box.querySelector(".email-again")
    
    if (inputEmail.value === "") {
        errormsg(result)
        result.innerText = "Empty email address"
        return 
    } else if(!(isValidEmailAddress(inputEmail.value))){
        errormsg(result)
        result.innerText = "Invalid format"
        return
    } else if (inputEmail.value != inputEmailAgain.value){
        errormsg(result)
        result.innerText = "Not the same"
        return
    }
        result.classList.remove("hidden", "error")
        result.classList.add("success")
        result.innerText = "Success!" 

    

    
    /* todo: insert code here to finish the exercise */
    
}

function isValidEmailAddress(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) != null;
}
function errormsg(element){
    element.classList.remove("hidden", "success")
    element.classList.add("error")
}


