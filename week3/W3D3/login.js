
var login = {
    name: "meron",
     password : "123456" 
 };
 function loginn() {
     var Name=document.getElementById('Name').value;
     var Password=document.getElementById('Password').value;
 if (Name == login.name && Password == login.password){
    // alert("Try again")
    window.location.href ='./home.html'
 }
 else{
  alert("Try again")
//  window.location.href ='./home.html'  
}
}
