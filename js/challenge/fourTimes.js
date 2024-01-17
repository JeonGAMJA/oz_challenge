let i = 0;
let numbers = "";
let number = 0;
while (number < 500) {
  i++;
  number = 4 * i;
  numbers += `${number} `;
  if (i % 5 == 0) {
    console.log(`${numbers}\n`);
    numbers = "";
  }
}
