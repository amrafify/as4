let UesrName = document.querySelector(".uesrname");
let SignUpPassword = document.querySelector(".signup-password");
let SignUpEmail = document.querySelector(".signup-email");
let uesrsInfo = JSON.parse(localStorage.getItem("uesrinfo"));
let signUpBtn = document.querySelector(".signUpBtn");
let signUpBox = document.querySelector(".signup-box");
let signiBox = document.querySelector(".login-box");
let signIn2 = document.getElementById("signIn");
let signup2 = document.getElementById("signup");
let logIn = document.querySelector(".login");
let Home = document.querySelector(".home");
let logOut = document.querySelector(".logOut");
let singinEmail = document.querySelector(".singin-email");
let singinPassword = document.querySelector(".singin-password");
let isInputsEmpty = document.querySelector(".isInputsEmpty");
let HomeBox = document.querySelector(".HomeBox");
let chickEmail = true;
function removeInputs() {
  UesrName.value = "";
  SignUpEmail.value = "";
  SignUpPassword.value = "";
}
if (uesrsInfo == null) {
  uesrsInfo = [];
} else {
  uesrsInfo = JSON.parse(localStorage.getItem("uesrinfo"));
}
function addUesr() {
  if (
    UesrName.value == "" ||
    SignUpEmail.value == "" ||
    SignUpPassword.value == ""
  ) {
    isInputsEmpty.classList.remove("d-none");
    isInputsEmpty.innerHTML = " All inputs is required";
    isInputsEmpty.classList.replace("text-success", "text-danger");
  } else {
    let uesrO = {
      name: UesrName.value,
      email: SignUpEmail.value,
      password: SignUpPassword.value,
    };
    for (let i = 0; i < uesrsInfo.length; i++) {
      chickEmail = true;
      if (
        SignUpEmail.value ==
        JSON.parse(localStorage.getItem("uesrinfo"))[i].email
      ) {
        isInputsEmpty.classList.remove("d-none");
        isInputsEmpty.innerHTML = "this email already exsit";
        isInputsEmpty.classList.replace("text-danger", "text-info");
        isInputsEmpty.classList.replace("text-success", "text-info");
        console.log("sudhhd");
        chickEmail = false;
        break;
      }
    }
    if (chickEmail == true) {
      uesrsInfo.push(uesrO);
      isInputsEmpty.classList.remove("d-none");
      localStorage.setItem("uesrinfo", JSON.stringify(uesrsInfo));
      isInputsEmpty.innerHTML = "Success";
      isInputsEmpty.classList.replace("text-danger", "text-success");
      removeInputs();
    }
  }
}

signUpBtn.addEventListener("click", addUesr);
logIn.addEventListener("click", function () {
  for (let i = 0; i < uesrsInfo.length; i++) {
    if (
      singinEmail.value ==
        JSON.parse(localStorage.getItem("uesrinfo"))[i].email &&
      singinPassword.value ==
        JSON.parse(localStorage.getItem("uesrinfo"))[i].password
    ) {
      HomeBox.classList.remove("d-none");
      signiBox.classList.add("d-none");
      Home.innerHTML =
        "welcome " + JSON.parse(localStorage.getItem("uesrinfo"))[i].name;
    }
  }
});

// sign in btn sign up log out btns
signIn2.addEventListener("click", function () {
  signUpBox.classList.toggle("d-none");
  signiBox.classList.toggle("d-none");
});
signup2.addEventListener("click", function () {
  signUpBox.classList.toggle("d-none");
  signiBox.classList.toggle("d-none");
  isInputsEmpty.classList.add("d-none");
});
logOut.addEventListener("click", function () {
  HomeBox.classList.toggle("d-none");
  signiBox.classList.toggle("d-none");
});
