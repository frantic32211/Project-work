function averageMarks()  {
var sum =0;

for (let i=1; i<=4; i++) {

    var marks = document.getElementById(`val${i}`).textContent
    sum = sum + parseInt(marks)
}

var avg = sum/4

document.getElementById("totalMarks").innerHTML = sum
document.getElementById("average").innerHTML = avg
}

averageMarks();
