
var login = {
    email: "meron2304@gmail.com",
     password : "123456" 
 };
 function login() {
     var Name=document.getElementById('your email').value;
     var Password=document.getElementById('Password').value;
 if (youremail == login.email && Password == login.password){
    // alert("Try again")
    window.location.href ='./home.html'
 }
 else{
  alert("Try again")
//  window.location.href ='./home.html'  
}

// new WOW().init();
// <img src="C:\Users\meron\Desktop\WeeKendAssignment\assiweek2\images (30).jpg" class="wow">  
// </img>
// <img src="C:\Users\meron\Desktop\WeeKendAssignment\assiweek2\images (30).jpg" class="wow fadeInUp"></img>
// WOW = new WOW({
//     boxClass: 'wow', // default
//     animateClass: 'animated', // default
//     offset: 0, // default
//     mobile: true, // default
//     live: true // default
// })
// wow.init();