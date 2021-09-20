const form = document.getElementById("form");

const inputName = document.getElementById("in-nama");
const inputUsername = document.getElementById("in-username");
const inputGraduate = document.getElementById("in-pendidikan");
const inputMan = document.getElementById("in-laki");
const inputWomen = document.getElementById("in-perempuan");
const inputBirth = document.getElementById("in-ttl");
const inputPhone = document.getElementById("in-phone");
const inputEmail = document.getElementById("in-email");
const inputAddres = document.getElementById("in-addres");

function regist() {
  document.getElementById("name-out").innerHTML = inputName.value;
  document.getElementById("username-out").innerHTML = inputUsername.value;
  document.getElementById("education-out").innerHTML = inputGraduate.value;
  if (inputMan.checked === true) {
    document.getElementById("man-out").innerHTML = inputMan.value;
  } else if (inputWomen.checked === true) {
    document.getElementById("women-out").innerHTML = inputWomen.value;
  }
  document.getElementById("birth-out").innerHTML = inputBirth.value;
  document.getElementById("phone-out").innerHTML = inputPhone.value;
  document.getElementById("email-out").innerHTML = inputEmail.value;
  document.getElementById("addres-out").innerHTML = inputAddres.value;
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
