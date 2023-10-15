let a = prompt("Enter your age")
if (a<0) {
    console.log("Age not valid")
}

else if (a<18) {
    console.log("Under 18")
}

else if (a>18) {
    console.log("can get license")
}

else  {
    console.log("can drive")
}
console.log("Done")