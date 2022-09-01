//FOR DETECTING THE MOUSE CLICKS
for(var i=0;i<document.querySelectorAll(".drum").length;i++){

    document.querySelectorAll("button")[i].addEventListener("click", function(){
        var buttonInnerHtml=this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    })
}


//FOR DETECTING THE BUTTON PRESSES 
document.addEventListener("keydown",function(event){
    var keyPressed=event.key;
    makeSound(keyPressed);
    buttonAnimation(keyPressed);
})


//FOR MAKING THE SOUNDS 
function makeSound(value){
    switch (value) {
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
              
            break;
        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
              
            break;
        case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
              
            break;
        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
              
            break;
        case "j":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
              
            break;
        case "k":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
              
            break;
        case "l":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
              
            break;   
        default:
            console.log(this);
            break;
    }

}
//FOR ANIMATIONS OF BUTTON DURING PRESS OR CLICK
function buttonAnimation(currentKey){
    var currentButton=document.querySelector("." + currentKey);
    currentButton.classList.add("pressed");
    setTimeout(function(){
    currentButton.classList.remove("pressed");    
    },100) //100 here tells the time duration after which we run this code
}