var son;

while (true) {
  son = +prompt("Son kiriting:");

  if (!isNaN(son)) {
    break;
  }

  prompt("Siz son kiritmadingiz. Iltimos, qaytadan urinib ko'ring:");
}

var faktorial = 1;

for (var i = 1; i <= son; i++) {
  faktorial *= i;
}

alert(son + " ning faktoriali: " + faktorial);