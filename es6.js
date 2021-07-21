// Soal 1 Arrow Function
// const golden = function goldenFunction(){
//   console.log("this is golden!!")
// }

// golden()

const golden = () => {
  console.log("this is golden!!")
}

golden()

// Soal 2 Object literal
// const newFunction = function literal(firstName, lastName){
//   return {
//     firstName: firstName,
//     lastName: lastName,
//     fullName: function(){
//       console.log(firstName + " " + lastName)
//       return 
//     }
//   }
// }

const newFunction = (firstName, lastName) => {
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: () => {
      console.log(firstName + " " + lastName)
      // return
    }
  }
}

//Driver Code 
newFunction("William", "Imoh").fullName()

// Soal 3 Destructuring
const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!"
}

// ES5
// const firstName = newObject.firstName;
// const lastName = newObject.lastName;
// const destination = newObject.destination;
// const occupation = newObject.occupation;

// ES6

const { firstName, lastName, destination, occupation, spell } = newObject

// Driver code
console.log(firstName, lastName, destination, occupation, spell)

// Soal 4 Array Spreading
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
// const combined = west.concat(east)

const combined = [...west, ...east]
//Driver Code
console.log(combined)

// Soal 5 Template Literal
const planet = "earth"
const view = "glass"
// var before = 'Lorem ' + view + 'dolor sit amet, ' +
//   'consectetur adipiscing elit,' + planet + 'do eiusmod tempor ' +
//   'incididunt ut labore et dolore magna aliqua. Ut enim' +
//   ' ad minim veniam'

const before = `Lorem  ${view} dolor sit amet, 
consectetur adipiscing elit, ${planet} do eiusmod tempor 
incididunt ut labore et dolore magna aliqua. Ut enim 
ad minim veniam`

// Driver Code
console.log(before) 