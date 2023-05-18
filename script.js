const eyeBtn = document.querySelector(".fa-solid"),
  inputField = document.querySelector(".input"),
  requirementList = document.querySelectorAll(".requirement-list li");

const validationKey = [
  { regex: /.{8,}/, index: 0 },
  { regex: /[0-9]/, index: 1 },
  { regex: /[a-z]/, index: 2 },
  { regex: /[^A-Za-z0-9]/, index: 3 },
  { regex: /[A-Z]/, index: 4 },
];
const showOrHide = () => {
  console.log(inputField.type);
  inputField.type = inputField.type === "password" ? "text" : "password";
  eyeBtn.className = `fa-solid fa-eye${
    inputField.type === "password" ? "" : "-slash"
  }`;
};

const validate = (e) => {
  validationKey.forEach((item) => {
    const isValid = item.regex.test(e.target.value);
    // console.log(isValid);
    console.log(e.target.value);
    const requirementItem = requirementList[item.index];

    if (isValid) {
      requirementItem.firstElementChild.className = "fa-solid fa-check";
      requirementItem.lastElementChild.classList.add("valid");
    } else {
      requirementItem.firstElementChild.className = "fa-solid fa-circle";
      requirementItem.lastElementChild.classList.remove("valid");
    }
  });
};

eyeBtn.addEventListener("click", showOrHide);
inputField.addEventListener("keyup", validate);
