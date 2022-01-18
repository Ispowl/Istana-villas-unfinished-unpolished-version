function wrongorright(){
    check1()
    
}

function check1(){
    
    if(password == "qplo1ej3#!$@"){
        var password="correct";
    }
    else{
        var password="Wrong password";
        document.getElementById("probwo2").innerHTML=password;
        element = document.getElementById("probwo2");
        element.style.color="Red"
    }
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e){
    keypressed=e.keyCode;
    console.log(keypressed);

    if(keypressed == '09'){
        element = document.getElementById("secert1");
        element.style.visibility= "visible";
        console.log("Secert unlocked please check now");
    }
}