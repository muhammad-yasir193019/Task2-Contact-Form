const form = document.getElementById("contact-form");
const successmessage = document.getElementById("success-message");

form.addEventListener('submit', function(event){
    event.preventDefault();

    const name = document.getElementById("full-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if(name === "" || email === "" || subject === "" || message === ""){
        alert("Please fill in all the fields");
        return;
    }

    const emailPattern = /^[^]+@[^]+\.[a-z]{1,9}$/;
    if(!email.match(emailPattern)){
        alert("Enter a valid email address");
        return;
    }

    successmessage.style.display = "block";
    form.reset();
});