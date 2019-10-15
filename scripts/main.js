/*
Everything in between is a comment.
*/

// This is a comment 

var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/main.png') {
      myImage.setAttribute ('src','images/main2.png');
    } else {
      myImage.setAttribute ('src','images/main.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Grass! Mud! Horse!!!' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'kkkkkk, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

(function() {
    ('a.scroll').bind('click', function(event) {
    var $anchor = $(this);
        ('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});