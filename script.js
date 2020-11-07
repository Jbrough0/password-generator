// Assignment Code
var generateBtn = document.querySelector("#generate");

function getRequirements(){
    
//  if (upperCaseChar) {
//     var upperCase=("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
//  } else {
//    var upperCase = "";
//  }

//   var lowerCase=("abcdefghijklmnopqrstuvwxyz");
//   var Numbers=("0123456789");
//   var Symbols=("!#$%&‘()*+,-./:;<=>?@[\]^_`{|}~");
 
  
  var passwordlength =prompt("How long is the password? 8-128");
    var upperCaseChar =confirm("Do you want uppercase letters?");
    var lowerCaseChar =confirm("Do you want lowercase letters?");
    var NumbersChar =confirm("Do you want numbers?");
    var SymbolsChar =confirm("Do you want symbols?");

   var length = parseInt(passwordlength);


    var lowerChar = (lowerCaseChar) ? "abcdefghijklmnopqrstuvwxyz" : "";
   var upperChar = (upperCaseChar) ? "ABCDEFGHIJKLMNOPQRSTUVWXTZ" : "";
    var numChars = (NumbersChar) ? "0123456789" : "";
    var specialChar = (SymbolsChar) ? "!'+,-./<>=?[]_{}|~@#$%^&*():;" : "" ;



    var char = upperChar + lowerChar + numChars + specialChar;

writePassword(passwordlength, upperChar,lowerChar,numChars,specialChar);


// Write password to the #password input
function writePassword(len, upper,lower,num, sym) {
    
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  //  var char = upperCase + lowerCase + Numbers + Symbols;
  // var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&‘()*+,-./:;<=>?@[\]^_`{|}~';
  
} 
  function generatePassword() {
    var passwd = '';
    

    for (i=0;i< length;i++) {
      // var c = Math.floor(Math.random()*char.length );
      // passwd += char.charAt(c)
      var x = Math.floor(Math.random() * char.length);
      passwd = passwd + (char[x]);

    }
  
    return passwd;
  
  }
}



// Add event listener to generate button
generateBtn.addEventListener("click", getRequirements);
