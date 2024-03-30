const  capitalize = (string) => {
  return string[0].toUpperCase() + string.slice(1);
}

// const separateString = (string) => {
//   const lettersArray = string.split("");
//   let delimetr;
//   lettersArray.map(letter => {
//     if (letter === letter.toUpperCase()) {
//       delimetr = letter;
//     }
//     return delimetr;
//   });

//   if (delimetr) {
//     return string.split(delimetr).join(` ${delimetr.toLowerCase()}`)
//   } 

//   return string;  
// }

// console.log(separateString("gas"))
// console.log(separateString("airConditionerWord"))

export default capitalize; 