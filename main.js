const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "books.png") {
    myImage.setAttribute("src", "pasta.png");
  } else {
    myImage.setAttribute("src", "books.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Hello, ${myName}`;
    }
  }

  myButton.onclick = () => {
    setUserName();
  };