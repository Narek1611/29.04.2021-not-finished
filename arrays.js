//ARRAYS

//arrayi haytararum
let arr = []; //himnakanum senc
//kam
//let arr = new Array();

//haytararenq miangamic lcvac array

let mrger = ["dexdz", "salor", "tandz"]; // 0erord, 1erord, 2erord indexnerov

//arrayi inch vor andam kanchelu hamar ogtagorcum enq [index],
//arrayiAnun[andamiIndex]

console.log(mrger[1]);
console.log(mrger); //grum enq uxxaki arrayi anuny, tpum a parunakutyuny

//karanq arrayi inch vor element poxenq

mrger[1] = "xndzor"; //2rd elementy saloric sarqec xndzor
console.log(mrger);

//mer arrayi yerkarutyuny gtnelu hamar ogtagorcum enq arrayiAnun.length

console.log(mrger.length); // mejy 3 element ka, ktpi 3

//arrayi mej inch ases kara ylni, es depqum string, object, boolean, funkcia

/* mix of values
let arr = [
  "Apple",
  { name: "John" },
  true,
  function () {
    console.log("hello");
  },
];*/

// get the object at index 1 and then show its name
//console.log(arr[1].name); // John

// get the function at index 3 and run it
//arr[3](); // hello

//push appends an element to the end.
//shift get an element from the beginning, advancing the queue, so that the 2nd element becomes the 1st.

//push-ov mer arrayi verjic avelacnum/kcum/ enq nor element
//shift-ov mer arrayi skzbic hanum en mi hat element, aydpisov 2rd elementy darnum a arajiny
//sranq ashxatum en queue/hert skzbunqov

//pop-ov verjic hanum enq mi hat element
//unshiftov skzbic dnum enq mi hat element, aydpisov mer 1in elementy darnum a 2rd
//sranq ashxatum en stach skzbunqov

console.log(mrger);

// mer arrayy hima es a [ 'dexdz', 'xndzor', 'tandz' ]

mrger.pop(); //piti vheracni verjin element "tandz"-y
console.log(mrger);

mrger.push("narinj"); //verjic avelacrec "narinj" elementy

console.log(mrger);

mrger.shift(); //heracnelu a mer arrayi arajin element "dexdz"-y

console.log(mrger);

mrger.unshift("adamatuz"); // mer arrayi skzbic avelacnum a "adamatuz" elementy

console.log(mrger);

//karanq push-ov u unshift-ov miangamic mi qani element anenq

mrger.push(1, 5, "turinj");

console.log(mrger);

//arrayi elementneri dursberum

for (let i = 0; i < mrger.length; i++) {
  console.log(mrger[i]);
}

for (let mirg of mrger) {
  console.log(mirg);
}

//senc petq chi
for (let banjar in mrger) {
  //banjary nerkayacnum a indexnery
  console.log(mrger[banjar]);
}

console.log(mrger.length); // mer arrayi yerkarutyunn enq gtnum = e 6
//hima yete menq mer dzerqov .length-i arjeqy poqracnenq, mer arrayy kkrjatvi minchev lenghth-i qanak

//hima mrger.length = 6
//poqracnenq
mrger.length = 3;
console.log(mrger); // mer arrayic mnacin arajin 3 elementnery [ 'adamatuz', 'xndzor', 'narinj' ]

let matrica = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrica);
console.log(matrica[2][1]); //matricayi []-rd toxi []-rd syan elementy
