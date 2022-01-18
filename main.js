


function show(){
  var tex="'Our project is equipped for exultation with nature and simultaneously indulgence in modern living’s many amenities. The experience at Istana will pamper your every sense and yet not leave you lost in the wild. Welcome to your palatial abode in your own personal heaven. After all it is a home nestled within Nature’s abundance. Make it yours today.'From Oorjita the person who got the idea for Istana villa's.";
document.getElementById("abt_is").innerHTML=tex;
}

checko = localStorage.getItem("aberds");

function enter(){
  if(checko == "somethinghep"){
    
  }
  else{
    
    tex ="Welcome to Istana villas website"
    document.getElementById("wooo").innerHTML=tex;
    localStorage.setItem("aberds",'somethinghep');
    
  }
}