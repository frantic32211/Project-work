var submitPage = document.querySelector("#formFill");
submitPage.addEventListener("submit", (e) => {
    e.preventDefault();
})

var nameOfUser = document.querySelector("#Name");

function myfun() {
    var re = /^[a-zA-Z]+/;
    var res = re.test(nameOfUser.value);
    if (!res) {
         return alert("Only alphabets allowed!");
    }

}

