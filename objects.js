//objecti haytararum
let user = {};
//kam
//let anotheruser = new Object {};

//property-ն օբջեքթի մեջինն ա, property-ն հավասար ա key: value,

let user1 = {
  name: "Narek", //name-ը key-ն ա, "Narek"-ը value-ն ա
  age: 19,
  height: 182,
};

console.log(user1);

//օբջեքթի մեջի ինչ-որ պրոփերթիի արժեքը ստանալու համար օգտագործում ենք կետ,
// գրում ենք օբջեքթի անունը, կետ, մեր ուզած փրոփերթիի քին(քեյը)
user1.name; // sa kveradardzni name-i meji "Narek"-y

console.log(user1.name + " " + user1.age + " " + user1.height);

//objecti mej property avelacnelu hamar grum enq objecti anuny. ket, key-y, = , u value-n

user1.weight = 60;

//property jnjelu hamar ogtagorcum enq delet.key

delete user1.height;

console.log(user1);

//mer key-n kara lini bazmabar/bacatov/, bayc ed depqum pti grvi chakertneri mej

user1["acer note"] = "book"; //avelacnum enq acer note key-ov book value-ov property
//es veronshyaly user1 . - ov chenq kara grenq,
//vorovhetev ketic heto menak valid identifier a kareli, dra hamar kirarel enq [] qarakusi pakagcer
console.log(user1);

// verjin property-ic heto meka dnum enq storaket

//senc el karanq anenq
let a = "skinColor";

user1[a] = "white";

console.log(user1);

/*ogtagorcoxin harcnum enq iran vor property-i value-n a petq
nermucum a iran harkavor key-i anuny

 prompt-y chi ashxatum xangarum a dra hamar a commentaclet key = prompt("What do you want to know about the user?", "name");

 access by variable
console.log(user[key]); // Narek (if enter "name")*/

//yezrakacrinq vor . - y ogtagorcum enq aveli hesht kancheri hamar, [] - aveli bard

/*function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}

let usercho = makeUser("Nareko", 10);
console.log(usercho); */

//karanq stugenq mer objecti mej inch-vor anunov property ka te che, yete chlini, kveradardzni undefined

console.log(user1.qanak);

// dra hamar ka nayev >in< operatory, grum enq mer voronac key-i anuny chakertneri mej + in + objecti anuny
// "key" in object

console.log("weight" in user1); //true ka
console.log("height" in user1); //false chka

// for...in loop

//for...in-i mej grum es (let key in objectid anuny)

let user2 = {
  21: 45,
  12: 23,
};

for (let key in user2) {
  // keys
  console.log(key); // name, age
  // values for the keys
  console.log(user2[key]); // Gevorg, 23
}
