
let red = document.getElementsByClassName("red")[0];
let yellow = document.getElementsByClassName("yellow")[0];
let green = document.getElementsByClassName("green")[0];
let duration = 19;
let interValClassName;
// red.style.Color = "red"

function countDown(){
    
        duration--;
        red.style.backgroundColor = "red"
        yellow.style.backgroundColor = "yellow"
        green.style.backgroundColor = "Green"
 
        green.style.opacity =0.1
        yellow.style.opacity = 0.1
        red.style.opacity = 1

        if(duration < 14){
            red.style.opacity = 0.1
            
            yellow.style.opacity = 1
            
        }
        if (duration < 11){
          yellow.style.opacity = 0.1
        green.style.opacity = 1
        
      }
      if (duration<1){
green.style.opacity =1
clearInterval(interValClassName);
setTimeout(loop,1000)
duration = 19;
      }
}

function loop(){
    interValClassName = setInterval(countDown,1000);
}

loop()