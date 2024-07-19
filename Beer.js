
var count = 100;

function beer() {

    while (count <= 100 && count >= 1) {
        console.log(count + "bootles of beer on the wall," + count + "bottles of beer. Take one down and pass it around,");
        count--
        console.log(count + " bottles of beer on the wall.");
    }
    
}

beer();