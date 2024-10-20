var Name = document.getElementById("Name");
var Email = document.getElementById("Email");
var Password = document.getElementById("Password");
var che = document.getElementById("che");
var btn = document.getElementById("btn");

var mes = document.getElementById("mes");
var mai = document.getElementById("mai");
var pas = document.getElementById("pas");
var ter = document.getElementById("ter");

btn.addEventListener("click",function(event){

    let valid = true;

    if(Name.value.trim() === ""){
        mes.textContent="Enter Your Name";
        valid=false;
    }
    else{
        mes.textContent="";
    }

    if(Email.value.trim() === ""){
        mai.textContent="Enter Your Email";
        valid=false;
    }
    else{
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!regex.test(Email.value)){
            console.log(Email.value);
            mai.textContent="Email Format is Incorrect";
            valid=false;
        }
        else{
            mai.textContent="";
        }
    }

    if(Password.value.trim() === ""){
        pas.textContent="Enter Your Password";
        valid=false;
    }
    else{
        if(Password.value.length >= 6){
            pas.textContent="";
        }
        else{
            console.log(Password.value.length);
            pas.textContent="Minimum Length should be 6";
            valid=false;
        }
    }

    if(!che.checked){
        valid=false;
        ter.textContent="You Must Agree the Terms and Conditions";
    }
    else{
        ter.textContent="";
    }

    console.log(event);
    if(valid == true){
        alert("Successfully Registered!!!");
    }
    else{
        alert('registration not sucess');
        event.preventDefault();
    
    }
})