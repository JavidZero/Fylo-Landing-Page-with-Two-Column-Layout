const form = document.querySelectorAll(".form");

form.forEach((fr)=>{
 
    fr.addEventListener('submit',(e)=>{
        e.preventDefault();

        var val = fr.querySelector('label input');

        if(validateEmail(val.value)){
            fr.classList.remove("err");
        }
        else {
            fr.classList.add("err");
        }
    })
});

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}