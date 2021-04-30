let sentence = "Notebooky drvac e sexani vra.";
let arrSentence = sentence.split(" ");
//console.log(arrSentence);
let lastWord = arrSentence[arrSentence.length - 1];
let arrLastWord = lastWord.split("");
//console.log(arrLastWord);
if (
  arrLastWord[arrLastWord.length - 1] === "." ||
  arrLastWord[arrLastWord.length - 1] === "!"
) {
  arrLastWord.pop();

  //console.log(arrLastWord);
  lastWord = arrLastWord.join("");
  //console.log(lastWord);}

  arrSentence.pop();
  //console.log(arrSentence);
  arrSentence.push(lastWord);
  console.log(arrSentence);
} else {
  console.log(arrSentence);
}
