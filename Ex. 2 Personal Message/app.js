"use strict";
let personName = "";
personName = prompt("what is your name") || "";
if (personName !== null && personName !== "") {
    alert(`Helloe ${personName}, would you like to learn some python today?`);
}
else {
    alert("you have fill your name !");
}
