function main(){
   chessBepperRight();
   
   turnLeft();
   move();
   turnLeft();
   
   chessBepperLeft();
   
   turnRight();
   move();
   turnRight();
   
   chessBepperRight();
   
   turnLeft();
   move();
   turnLeft();
   
   chessBepperLeft();
   
   turnRight();
   move();
   turnRight();
   
   chessBepperRight();
   
}


function chessBepperRight() {
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   
}

function chessBepperLeft() {
   
   
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   
}