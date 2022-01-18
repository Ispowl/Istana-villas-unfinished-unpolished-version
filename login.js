
  
function getdata(){
    names = document.getElementById("name").value;
    firebase.database().ref("/").child(Room_names).update({
      purpose:"adding name for sign"
    })
    element = document.getElementById("card");
    element.style.visibilty= "hidden";
   window.alert("You have been added going to sign up page");
   window.location = "";
   fill="filled up ready"
   localStorage.setItem("check",fill);
}

function check(){
    chhe = localStorage.getItem("check");
    if(chhe = "filled up ready"){
        element = document.getElementById("card");
        element.style.visibilty= "hidden";
       window.alert("HEY YOU ARE ALREADY SIGNED UP GO AWAY");
       window.location = "";
    }
}