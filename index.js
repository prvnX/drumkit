for(i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var drum=this.textContent;
        var sound=selectaudio(drum);
        sound.play();
        buttonanimate(drum);
    }
    );
}
document.addEventListener("keydown",function(event){
    var key=event.key;
    var sound=selectaudio(key);
    sound.play();
    buttonanimate(key);
});

document.querySelector(".text").addEventListener("click",function(){
    var music=new Audio("sounds/drummusic.mp3");
    music.play();
});

function selectaudio(drum){
    var sound;
    switch(drum){
        case "w":
            sound=new Audio("sounds/tom-1.mp3");
            break;
        case "a":
            sound=new Audio("sounds/tom-2.mp3");
            break;
        case "s":
            sound=new Audio("sounds/tom-3.mp3");
            break;
        case "d":
            sound=new Audio("sounds/tom-4.mp3");
            break;
        case "j":
            sound=new Audio("sounds/snare.mp3");
            break;
        case "k":
            sound=new Audio("sounds/crash.mp3");
            break;
        case "l":
            sound=new Audio("sounds/kick-bass.mp3");
            break;
        default:
            console.log("Invalid key ");
    }
    return(sound)

}

function buttonanimate(key){
    var buttonpressed=("."+ key);
    var button=document.querySelector(buttonpressed);
    button.classList.toggle("drumanimate");
    setTimeout(function(){
        button.classList.toggle("drumanimate");
    },200);
}