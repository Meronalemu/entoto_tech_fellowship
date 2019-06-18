var out_array=[ ]
var key = ["m","e","r","o","n","a","l","e","m","u"]
//var key= ["b","e","z","a","w","i","t","t","l","e"]
if   (key.length == 10)
      {
    for ( var i=0 ; i<10 ; i++)
    {
      if ( key[i] == "a" || key[i] == "b" || key[i] == "c" )
      {
        out_array[i]=2
      }

    else if ( key[i] == "d" || key[i] == "e" || key[i] == "f" ){
        out_array[i]=3
    }

    else if ( key[i] == "g" || key[i] == "h" || key[i] == "i" ){
        out_array[i]=4
    }
    else if ( key[i] == "j" || key[i] == "k" || key[i] == "l" ){
        out_array[i]=5
    }
 else if ( key[i] == "m" || key[i] == "n" || key[i] == "o" ){
        out_array[i]=6
    }
    else if ( key[i] == "p" || key[i] == "q" || key[i] == "r" || key[i] == "s" ){
        out_array[i]=7
    }
 else if ( key[i] == "t" || key[i] == "u" || key[i] == "v" ){
        out_array[i]=8
    }
  else if ( key[i] == "w" || key[i] == "x" || key[i] == "y" || key[i] == "z" ) {
        out_array[i]=9
    }
      else
        {
          console.log("enter again")
          
        }
     
        var  var_display=''
        display = var_display + out_array;
   
    
      }
      console.log(display)
      }
      if( key.length != 10)   
           {
             console.log("enter a string with size of 10")
         }
