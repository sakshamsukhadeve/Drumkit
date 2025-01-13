var i = 0;
for(i >= 0; i < 7; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click" ,callme);
        function callme(){
            var button_pressed = this.innerHTML;
            switch (button_pressed) {
                case "w":
                    var tom1 = new Audio("./sounds/tom-1.mp3");
                    tom1.play()
                    document.getElementsByClassName("drum")[0].classList.add("pressed");
                    setTimeout(function(){
                        document.getElementsByClassName("drum")[0].classList.remove("pressed")
                    }, 100);
                    
                    
                    break;
                case "a":
                    var tom2 = new Audio("./sounds/tom-2.mp3");
                    tom2.play()
                    document.getElementsByClassName("drum")[1].classList.add("pressed");
                    setTimeout(function(){
                        document.getElementsByClassName("drum")[1].classList.remove("pressed")
                    }, 100);
                    
                    
                    break;
                case "s":
                    var tom3 = new Audio("./sounds/tom-3.mp3");
                    tom3.play()
                    document.getElementsByClassName("drum")[2].classList.add("pressed");
                    setTimeout(function(){
                        document.getElementsByClassName("drum")[2].classList.remove("pressed")
                    }, 100);
                    
                    
                    break;
                case "d":
                    var tom4 = new Audio("./sounds/tom-4.mp3");
                    tom4.play()
                    document.getElementsByClassName("drum")[3].classList.add("pressed");
                    setTimeout(function(){
                        document.getElementsByClassName("drum")[3].classList.remove("pressed")
                    }, 100);
                    
                        
                    break;
                case "j":
                    var snare = new Audio("./sounds/snare.mp3");
                    snare.play()
                    document.getElementsByClassName("drum")[4].classList.add("pressed");
                    setTimeout(function(){
                        document.getElementsByClassName("drum")[4].classList.remove("pressed")
                    }, 100);
                      
                    break;
                case "k":
                    var crash = new Audio("./sounds/crash.mp3");
                    crash.play()
                    document.getElementsByClassName("drum")[5].classList.add("pressed");
                    setTimeout(function(){
                        document.getElementsByClassName("drum")[5].classList.remove("pressed")
                    }, 100);
                    
                        
                    break;
                case "l":
                    var kick_bass = new Audio("./sounds/kick-bass.mp3");
                    kick_bass.play()
                    document.getElementsByClassName("drum")[6].classList.add("pressed");
                    setTimeout(function(){
                        document.getElementsByClassName("drum")[6].classList.remove("pressed")
                    }, 100);
                    
                    break;
            
                default: console.log(button_pressed);
                    break;
            }
            
        
    }
}
    document.addEventListener("keypress", function(event){
        var button_pressed = event.key;
        console.log(button_pressed);
        if(button_pressed === "w"){
            switch (button_pressed){
                case "w":
                    var tom1 = new Audio("./sounds/tom-1.mp3");
                    tom1.play()
                    document.getElementsByClassName("drum")[0].classList.add("pressed");
                    setTimeout(function(){
                        document.getElementsByClassName("drum")[0].classList.remove("pressed")
                    }, 100);
                    
                    break;
                default: console.log(button_pressed);
                    break;
            }
        }
        if(button_pressed === "a"){
            switch (button_pressed){
                case "a":
                    var tom2 = new Audio("./sounds/tom-2.mp3");
                    tom2.play()
                    document.getElementsByClassName("drum")[1].classList.add("pressed");
                    setTimeout(function(){
                        document.getElementsByClassName("drum")[1].classList.remove("pressed")
                    }, 100);
                
                    break;
                default: console.log(button_pressed);
                    break;
            }
        }
        if(button_pressed === "s"){
            switch (button_pressed){
                case "s":
                    var tom3 = new Audio("./sounds/tom-3.mp3");
                    tom3.play()
                    document.getElementsByClassName("drum")[2].classList.add("pressed");
                    setTimeout(function(){
                        document.getElementsByClassName("drum")[2].classList.remove("pressed")
                    }, 100);
                    
                    break;
                default: console.log(button_pressed);
                    break;
            }
        }
        if(button_pressed === "d"){
            switch (button_pressed){
                case "d":
                    var tom4 = new Audio("./sounds/tom-4.mp3");
                    tom4.play()
                    document.getElementsByClassName("drum")[3].classList.add("pressed");
                    setTimeout(function(){
                        document.getElementsByClassName("drum")[3].classList.remove("pressed")
                    }, 100);
                    
                    break;
                default: console.log(button_pressed);
                    break;
            }
        }
        if(button_pressed === "j"){
            switch (button_pressed){
                case "j":
                    var snare = new Audio("./sounds/snare.mp3");
                    snare.play()
                    document.getElementsByClassName("drum")[4].classList.add("pressed");
                    setTimeout(function(){
                        document.getElementsByClassName("drum")[4].classList.remove("pressed")
                    }, 100);
                    
                    break;
                default: console.log(button_pressed);
                    break;
            }
        }
        if(button_pressed === "k"){
            switch (button_pressed){
                case "k":
                    var crash = new Audio("./sounds/crash.mp3");
                    crash.play()
                    document.getElementsByClassName("drum")[5].classList.add("pressed");
                    setTimeout(function(){
                        document.getElementsByClassName("drum")[5].classList.remove("pressed")
                    }, 100);
                    
                    break;
                default: console.log(button_pressed);
                    break;
            }
        }
        if(button_pressed === "l"){
            switch (button_pressed){
                case "l":
                    var kick_bass = new Audio("./sounds/kick-bass.mp3");
                    kick_bass.play()
                    document.getElementsByClassName("drum")[6].classList.add("pressed");
                    setTimeout(function(){
                        document.getElementsByClassName("drum")[6].classList.remove("pressed")
                    }, 100);
                        
                    break;
                default: console.log(button_pressed);
                    break;
            }
        }
    });

        







