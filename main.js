function pageRedirectOne() {
    window.location.href = "firstHTML.html";
  }

function pageRedirectTwo() {
    window.location.href = "courses.html";
  }

function pageRedirectThree() {
    window.location.href = "submitted.html";
  }

var des = document.querySelector("#text")

const nthWord = des.textContent.split(' ');

console.log(`The fifth word is ${nthWord[4]}`);
console.log(`The seventh word is ${nthWord[6]}`);
console.log(`The tenth word is ${nthWord[10]}`);

// var nameOfUser = document.querySelector("#Name");
// var phoneOfUser = document.querySelector("#phoneNumber");

// var resName = /[a-zA-Z]+/.test(nameOfUser.value);
// var resPhone = /\d+/.test(phoneOfUser.value);

// var checkd = document.getElementById("Physics").checked || document.getElementById("Chemistry").checked || document.getElementById("Biology").checked || document.getElementById("Maths").checked


// var submitPage = document.querySelector("#formFill")

// submitPage.addEventListener("submit", (e) => {
//     e.preventDefault();

//     if (resName && resPhone && checkd ){
//         console.log(checkd);
//         alert("Your registration has be submitted successfully!")
//         nameOfUser = ""
//         phoneOfUser = ""
//     }else {
//         alert("Please enter necessary credentials!")
//     }
// })

