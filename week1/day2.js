var weatherTemprature=10

//console.log(weatherTemprature)
//using if statment 
if (weatherTemprature<10)
{  console.log("it is cold outside")
}
else if (weatherTemprature>20)
{console.log("it's warm otside")
}
else
{  console.log("it's nice weather") 
}
//creatin & using a function
function weatherTemprature(weather){
  if(weather<10)
     {  return ("it is cold outside")
     }
  else (weather>20){
        return ("it's warm otside")
     }
  else{  
       return ("it's nice weather") 
     } 
     }
  console.log(weatherTemprature(30))

