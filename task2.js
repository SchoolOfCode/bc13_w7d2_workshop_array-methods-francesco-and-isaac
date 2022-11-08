let animals = [
    "baboon",
    "kangaroo",
    "rhino",
    "frog",
    "beaver",
    "horse",
    "basalisk",
  ];
  
let bListAnimals = animals.filter(checkAnimals)// Your 'filter' code here.
function checkAnimals(letter){
if(letter.charAt(0) === 'b'){
  return letter;
}
}

console.log(bListAnimals);