
function main(){
   lr();
   move();
   rl();
   lr();
   move();
   rl();
   lr();
   
}
function lr(){
      
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   turnLeft();   
   putBeeper();
   
}
function rl(){
   turnLeft();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   turnRight();
    move();
   turnRight();
}