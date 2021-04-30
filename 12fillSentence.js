let sentence = "Puchikn _ sexani _";
let words = ["yngav", "tak"];
let index = 0;
arrSentence = sentence.split(" ");
console.log(arrSentence);
for (let i = 0; i < arrSentence.length; i++) {
  if (arrSentence[i] === "_") {
    arrSentence[i] = words[index];
    index++;
  }
}
console.log(arrSentence.join(" "));
