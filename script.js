var mailbx = document.getElementById("mailbx");
var errortxt = document.getElementById("errortxt");

mailbx.addEventListener("invalid", function(event){
    event.preventDefault();
    this.parentElement.classList.add("invalid");
    if(mailbx.value=='')
    {
        errortxt.innerText = "Whoops! It looks like you forgot to add your email"
    } 
    else {
        errortxt.innerText = "Please provide a valid email address"
    }



})