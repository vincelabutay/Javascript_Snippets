


function whosPaying() {
    var names = ["Angela", "Vince", "Kath","Franz","Mark", "Cha"];
    var n = Math.random();
    n = n * 6;
    n = Math.floor(n);
    names = names[n];

    console.log(names + " is going to buy lunch today");
    
    
    
}

whosPaying();