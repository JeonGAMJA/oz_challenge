for (let i = 0; i < 5; i++) {
  let star = "";
  for (let j = 0; j <= i; j++) {
    star += "*";
  }
  console.log(star);
}

for (let i = 0; i < 5; i++) {
  let star = "";
  for (let j = 0; j <= i; j++) {
    star += "*";
  }
  console.log(star);
}
for (let i = 4; i >= 0; i--) {
  let star = "";
  for (let j = 0; j <= i; j++) {
    star += "*";
  }
  console.log(star);
}

for (let i = 0; i < 5; i++) {
  let star = "";
  for (let j = 5; j > i; j--) {
    star += " ";
  }
  for (let k = 0; k < 2 * i + 1; k++) {
    star += "*";
  }
  console.log(star);
}
for (let i = 3; i >= 0; i--) {
  let star = "";
  for (let j = 5; j > i; j--) {
    star += " ";
  }
  for (let k = 0; k < 2 * i + 1; k++) {
    star += "*";
  }
  console.log(star);
}
