


var guestList = ["Angela", "Franz", "Kath", "Mark", "Vince", "Cha"];
var name = prompt("Enter your name");

if (guestList.includes(name)) {
    alert("Welcome " + name + "!");
} else {
    alert("You're not Welcome, Try Again Next Time");
}
