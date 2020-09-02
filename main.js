var nameOfUser = document.querySelector("#Name");
var phoneOfUser = document.querySelector("#phoneNumber");

var resName = /[a-zA-Z]+/.test(nameOfUser.value);
var resPhone = /\d+/.test(phoneOfUser.value);

var checkd = document.getElementById("Physics").checked || document.getElementById("Chemistry").checked || document.getElementById("Biology").checked || document.getElementById("Maths").checked


var submitPage = document.querySelector("#formFill")

submitPage.addEventListener("submit", (e) => {
    e.preventDefault();

    if (resName && resPhone && checkd ){
        console.log(checkd);
        alert("Your registration has be submitted successfully!")
        nameOfUser = ""
        phoneOfUser = ""
    }else {
        alert("Please enter necessary credentials!")
    }
})

