var numb = 34;

try {
    if (numb>10 && numb<=20) throw "10 and 20";
    if (numb>20 && numb<=30) throw "20 and 30";
    if (numb>30 && numb<=40) throw "30 and 40";
    if (numb>40 && numb<=50) throw "40 and 50";
    if (numb>50 && numb<=60) throw "50 and 60";
    if (numb>60 && numb<=70) throw "60 and 70";
    if (numb>70 && numb<=80) throw "70 and 80";
    if (numb>80 && numb<=90) throw "80 and 90";
    if (numb>90 && numb<=100) throw "90 and 100";
  
} catch (err) {
    console.log(`Number is between ${err}`)
}finally {
    console.log("You have completed the project")
}


var number = 54;

switch (true) {
    case number>=10 && number<20:
        console.log("Number is between 10 and 20")
        break;
    case number>=20 && number<30:
        console.log("Number is between 20 and 30")
        break;
    case number>=30 && number<40:
        console.log("Number is between 30 and 40")
        break;
    case number>=40 && number<50:
        console.log("Number is between 40 and 50")
        break;
    case number>=50 && number<60:
        console.log("Number is between 50 and 60")
        break;
    case number>=60 && number<70:
        console.log("Number is between 60 and 70")
        break;
    case number>=70 && number<80:
        console.log("Number is between 70 and 80")
        break;
    case number>=80 && number<90:
        console.log("Number is between 80 and 90")
        break;
    case number>=90 && number<=100:
        console.log("Number is between 90 and 100")
        break;
        default:
            console.assertlog("Number is not between 10 and 100.")
}

var limit = 10;
var sum=0, termOne=0, termTwo=1;

console.log(0);
console.log(1);

for (var i=1 ; i<limit ; i++) {
    sum= termOne+termTwo;
    console.log(sum);
    termOne=termTwo;
    termTwo=sum;
}
