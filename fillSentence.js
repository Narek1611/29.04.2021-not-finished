let sentence = "Puchikn _ sexani _";
let words = ["sexani", "tak"];
arrSentence = sentence.split(" ");
console.log(arrSentence);
while ((index = arrSentence.indexOf("_") > -1)) {
  arrSentence.splice(index, 1);
}
console.log(arrSentence);
