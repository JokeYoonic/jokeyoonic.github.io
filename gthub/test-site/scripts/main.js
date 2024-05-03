let myImage = document.querySelector("img");
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/dark-ninga.png") {
    myImage.setAttribute("src", "images/watermelon.png");
  } else {
    myImage.setAttribute("src", "images/dark-ninga.png");
  }
};

document.querySelector("html").addEventListener("click", () => {
    alert("Stop toching me, bitch");
  });


function setUserName() {
  let myName = prompt("Enter your name:");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "GTHub on the way\n" + myName;
  }
}


myButton.onclick = function () {
    setUserName();
  };
  