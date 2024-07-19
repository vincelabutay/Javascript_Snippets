function calcBMI(weight, height) {
    var bmi = weight / Math.pow(height,2);
    return Math.round(bmi);
}

calcBMI(65,1.8);