/*
Logic for the FEATURES section that:
changes the images on clicking a controller
changes the heading on clicking a controller
changes the paragraph on clicking a controller
*/

const control = document.getElementsByClassName("control");
const video = document.getElementById("video");
const heading = document.getElementById("heading");
const paragraph = document.getElementById("paragraph");

control[0].onclick = function(){
    video.src = this.getAttribute("data-video-src");
    heading.innerHTML = "Vast Knowledge Base";
    remove();
    this.classList.add("active");
    paragraph.innerHTML = "Tapping into the vast resources of the X platform, Grok AI possesses an unparalleled knowledge base, answering even the most intricate queries with ease.";
}

control[1].onclick = function(){
    video.src = this.getAttribute("data-video-src");
    heading.innerHTML = "Creative Expression Unleashed";
    remove();
    this.classList.add("active");
    paragraph.innerHTML = "Unleash your creativity with Grok AI's ability to generate diverse text formats, from poems to scripts, musical pieces, and more.";
}

control[2].onclick = function(){
    video.src = this.getAttribute("data-video-src");
    heading.innerHTML = "Real-Time Information at Your Fingertips";
    remove();
    this.classList.add("active");
    paragraph.innerHTML = "Stay informed with Grok AI's access to real-time information, keeping you abreast of the latest developments.";
}

control[3].onclick = function(){
    video.src = this.getAttribute("data-video-src");
    heading.innerHTML = "Witty and Engaging Companion";
    remove();
    this.classList.add("active");
    paragraph.innerHTML = "Embark on captivating conversations with Grok AI's witty and engaging personality, adding a touch of humor to your interactions.";
}

control[4].onclick = function(){
    video.src = this.getAttribute("data-video-src");
    heading.innerHTML = "Continuous Learning and Improvement";
    remove();
    this.classList.add("active");
    paragraph.innerHTML = "Grok AI is a dynamic entity, constantly evolving and refining its capabilities to provide you with an ever-enhancing experience.";
}

// Removes the active class list after clicking another controller
function remove(){
    for (a of control){
        a.classList.remove("active");
    }
}

/*
Logic for the drop down menu which
toggles independently of other menus
*/

const controls = document.getElementsByClassName("text");
const dropMenu = document.getElementsByClassName("drop-down-text");

for (let i = 0; i < controls.length; i++) {
    controls[i].onclick = function () {
        if (dropMenu[i].style.display === "none") {
            dropMenu[i].style.display = "block";
        } else {
            dropMenu[i].style.display = "none";
        }
    };
}

/*
Form validation to check if email 
address is wrongly formatted before 
submitting. Returns error message when not formatted correctly
*/

function validateForm() {
    let email = document.getElementById("email");
    let alert = document.getElementById("alert");
    let form = document.getElementById("formbox");
    let error = document.getElementById("img");

    let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/;  // Email address pattern

    if (email.value.match(pattern)){
        form.classList.add("valid");
        form.classList.remove("invalid");
        email.style.borderTop = "2px solid hsl(231, 69%, 60%)";
        email.style.borderLeft = "2px solid hsl(231, 69%, 60%)";
        email.style.borderRight = "2px solid hsl(231, 69%, 60%)";
        email.style.borderBottom = "25px solid hsl(231, 69%, 60%)";
        alert.innerHTML = " "; 
        error.style.opacity = "0";
        document.getElementById("formbox").reset(); // Resets form - input field after successful submission
        return true
    }

    else{
        form.classList.remove("valid");
        form.classList.add("invalid");
        email.style.borderTop = "2px solid hsl(0, 94%, 66%)"; 
        email.style.borderLeft = "2px solid hsl(0, 94%, 66%)";
        email.style.borderRight = "2px solid hsl(0, 94%, 66%)";
        email.style.borderBottom = "25px solid hsl(0, 94%, 66%)";
        alert.innerHTML = "Whoops, make sure it's an email";
        error.style.opacity = "1";
        return false
    }
}

/* 
Mobile Navigation, navigation logo 
and hamburger menu toggle 
*/

const menu = document.getElementById("mobileNav");
const button = document.getElementById("mobileMenu");
const logo = document.getElementById("logo");

menu.style.display = "none";

button.onclick = function() {
    if (menu.style.display == "none"){
        menu.style.display = "block";
        button.src = "images/icon-close.svg";
        logo.style.filter = "invert(1) brightness(100%)";
        button.style.filter = "invert(0)";
    }
    else{
        menu.style.display = "none"
        button.src = "images/icon-hamburger.svg";
        logo.style.filter = "invert(0)";
    }
}
