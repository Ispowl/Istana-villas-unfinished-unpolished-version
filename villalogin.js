all_data = ["test","testw","testy"];
all_data_pass = ["net","nety","ne"];
username = document.getElementById("username").value;
passw = document.getElementById("pass").value;

function checkboth(){
    if(username==all_data,passw==all_data_pass){
        localStorage.setItem("heldcorrect",'ownerforsure');
        window.location.href = "villa.html";
    }
}