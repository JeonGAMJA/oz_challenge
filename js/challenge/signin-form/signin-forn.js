function printUserData() {
  const emailInput = document.getElementById("email");
  const nameInput = document.getElementById("name");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirm-password");
  const number1 = document.getElementById("#phone input:nth-child(1)");
  const number2 = document.getElementById("#phone input:nth-child(2)");
  const number3 = document.getElementById("#phone input:nth-child(3)");

  const email = emailInput.value;
  const nickname = nameInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;
  const phoneNumber = number1.value + number2.value + number3.value;

  const data = {
    email,
    nickname,
    password,
    confirmPassword,
    phoneNumber,
  };

  console.log("data", data);
}
