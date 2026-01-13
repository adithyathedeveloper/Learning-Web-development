let somebutton = document.getElementById('btn');

// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

somebutton.addEventListener("click",()=>{
    alert("You clicked me");
    document.querySelector(".box").innerHTML="Woah now Iam not just a box, I am a box who was clicked by an user"
} )
somebutton.addEventListener("dblclick",()=>{
    alert("You clicked me again");
    document.querySelector(".box").innerHTML="Woah, back to normal, Iam just a box now"
} )
somebutton.addEventListener("contextmenu",()=>{
    alert("Why did you click on right button");
    document.querySelector(".box").innerHTML="You are supposed to click on the left button only"
} )
somebutton.addEventListener("keydown",(e)=>{
    console.log(e,e.key,e.keyCode)
} )