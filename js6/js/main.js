// Your First Code Challange

// Write code that will return a random letter from your name.

// lenght ve random metodunu kullanarak isminin harf sayısı kadar aralıkta bir sayı döndür daha sonra bu sayıyı charAt metodu ile ismine uygula.

let anyName= "Jonathan"; 

console.log(anyName.length);

let randomNumber = Math.floor(Math.random()*anyName.length);

console.log(anyName.charAt(randomNumber),randomNumber);







