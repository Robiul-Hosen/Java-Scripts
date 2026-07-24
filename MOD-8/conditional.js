let mark = 39; 

if (mark >= 0 && mark <= 100){
    if (mark >= 80) console.log("A+");
    else if (mark >= 70) console.log("A");
    else if (mark >= 60) console.log("A-");
    else if (mark >= 50) console.log("B");
    else if (mark >= 40) console.log("C");
    else if (mark <= 40) console.log("F");
}
else{
    console.log ("invalid number.")
}
