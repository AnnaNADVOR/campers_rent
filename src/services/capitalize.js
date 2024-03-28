const  capitalize = (string) => {
  return string[0].toUpperCase() + string.slice(1);
}

// const s = "gas";


// const array = s.split("")
// console.log(array)
// let delimetr = "";
// array.map(l => {
//   if (l === l.toUpperCase()) {
//     delimetr = l; 
//   };
  
//   return delimetr; 
// }
// )
// console.log("delimetr", delimetr)
// console.log(capitalize(s.split(delimetr).join(` ${delimetr.toLowerCase()}`))); 

const separateString = (string) => {
  const lettersArray = string.split("");
  let delimetr;
  lettersArray.map(letter => {
    if (letter === letter.toUpperCase()) {
      delimetr = letter;
    }
    return delimetr;
  });

  if (delimetr) {
    return string.split(delimetr).join(` ${delimetr.toLowerCase()}`)
  } 

  return string;  
}

console.log(separateString("gas"))
console.log(separateString("airConditionerWord"))

export default capitalize; 