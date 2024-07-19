

function isLeap(year) {
    if ((year % 4 === 0) && (year % 100 != 0)) {
        alert(year +" is a leap year");
    } else if (year % 100 === 0 && year % 400 === 0) {
        alert(year +" is a leap year");
    } else {
        alert("Not a leap year");
    }
}

isLeap(2007);