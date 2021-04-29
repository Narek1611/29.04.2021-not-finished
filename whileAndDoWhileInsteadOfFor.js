for (var i = 0; i < a.length; i++) {
  console.log("for, i, a[i]");
}

var i = 0;
while (i < a.length) {
  console.log("for, i, a[i]");
  i++;
}

do {
  console.log("for, i, a[i]");
  i++;
} while (i < a.length);
