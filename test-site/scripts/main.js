let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cat.png') {
        myImage.setAttribute('src','images/narc.jpg');
    } else {
        myImage.setAttribute('src','images/cat.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'look at this comfy cat, ' + myName;
    }
}    

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'look at this comfy cat, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}