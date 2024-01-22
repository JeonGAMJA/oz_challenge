const userId = document.getElementById("user-id-input");
const userName = document.getElementById("user-name-input");
const userPhone = document.getElementById("user-phone-input");
const userPosition = document.getElementById("user-position-input");

function printUserInfo(event) {
  event.preventDefault();
  alert(`${userId.value}님 환영합니다.`);
  alert(
    `회원가입시 입력하신 내역은 다음과 같습니다.\n 아이디 : ${userId.value}\n 이름 : ${userName.value}\n 전화번호 : ${userPhone.value}\n 원하는 직무 : ${userPosition.value}`
  );
}

function reset() {
  location.reload(true);
}
