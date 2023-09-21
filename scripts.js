
// TOPNAV //

function myFunction() {

  var x = document.getElementById("ham");
  if (x.className === "ham_container") {
    x.className += " responsive";
  } else {
    x.className = "ham_container";
  }
}




document.addEventListener("DOMContentLoaded", function () {
  var bgAudio = document.getElementById("bgAudio");
  var muteButton = document.getElementById("muteButton");
  var video = document.getElementById("video1");
  var cookiesPolicyButton = document.getElementById("cookiesPolicyButton");
  


  function startVideo() {
    video.play();
    // Hide the Cookies Policy button after clicking
    cookiesPolicyButton.style.display = "none";
}

// Add click event to the Cookies Policy button
cookiesPolicyButton.addEventListener("click", startVideo);

  // Function to toggle unmute/mute
  function toggleMute() {
      if (bgAudio.muted) {
          // Unmute
          bgAudio.muted = false;
          muteButton.innerText = "Mute Music";
      } else {
          // Mute
          bgAudio.muted = true;
          muteButton.innerText = "Unmute Music";
      }
  }

  // Autoplay the background music only after the cookies policy is accepted
  cookiesPolicyButton.addEventListener("click", function () {
    bgAudio.muted = false;
    bgAudio.play();
    // Hide the cookies policy button after accepting
    cookiesPolicyButton.style.display = "none";
  });

  function startBackgroundMusic() {
    setTimeout(function () {
      bgAudio.muted = false;
      bgAudio.play();
    }, 3000); // Delay in milliseconds (5 seconds in this example)
  }
  // Add click event to the mute/unmute button
  muteButton.addEventListener("click", toggleMute);
});


/** //var vid = document.getElementById("video1");

var video = document.getElementById("video1");
var backgroundMusic = document.getElementById("backgroundMusic");
var muteButton = document.getElementById("muteButton");

function toggleMute() {
    if (video.muted) {
        video.muted = false;
        muteButton.innerText = "Mute";
        backgroundMusic.play();
    } else {
        video.muted = true;
        muteButton.innerText = "Unmute";
        backgroundMusic.pause();
    }
}




function slowPlaySpeed() { 
    vid.playbackRate = 0.5;
} 
 */



// SCROLL + DISPLAY EFFECT//


myID = document.getElementById("icon_arrow");

var myScrollFunc = function () {
  var y = window.scrollY;
  if (y >= 700) {
    document.getElementById("icon_arrow").style.display = "none";    
    
    document.getElementById("r1").addEventListener("mouseover", mouseOver);
     function mouseOver() {
    document.getElementById("r1").style.opacity = "1";
    document.getElementById("r2").style.opacity = "0.5";
    document.getElementById("r3").style.opacity = "0.5";
    document.getElementById("r4").style.opacity = "0.5";    
    document.getElementById("r4").style.opacity = "0.5";    
    document.getElementById("l1").style.display = "flex";
    document.getElementById("l2").style.display = "none";  
    document.getElementById("l3").style.display = "none";    
    document.getElementById("l4").style.display = "none";  
    document.getElementById("txt1").style.display = "flex";
    document.getElementById("txt2").style.display = "none";  
    document.getElementById("txt3").style.display = "none";    
    document.getElementById("txt4").style.display = "none";      
    }

    document.getElementById("r2").addEventListener("mouseover", mouseOver2);
    function mouseOver2() {
    document.getElementById("r1").style.opacity = "0.5";
    document.getElementById("r2").style.opacity = "1";
    document.getElementById("r3").style.opacity = "0;5";
    document.getElementById("r4").style.opacity = "0.5";  
    document.getElementById("l1").style.display = "none";
    document.getElementById("l2").style.display = "flex";  
    document.getElementById("l3").style.display = "none";    
    document.getElementById("l4").style.display = "none";  
    document.getElementById("txt1").style.display = "none";
    document.getElementById("txt2").style.display = "flex";  
    document.getElementById("txt3").style.display = "none";    
    document.getElementById("txt4").style.display = "none";       
   }

    document.getElementById("r3").addEventListener("mouseover", mouseOver3);
    function mouseOver3() {
    document.getElementById("r1").style.opacity = "0.5";
    document.getElementById("r2").style.opacity = "0.5";
    document.getElementById("r3").style.opacity = "1";
    document.getElementById("r4").style.opacity = "0.5";
    document.getElementById("l1").style.display = "none";
    document.getElementById("l2").style.display = "none";  
    document.getElementById("l3").style.display = "flex";    
    document.getElementById("l4").style.display = "none";   
    document.getElementById("txt1").style.display = "none";
    document.getElementById("txt2").style.display = "none";  
    document.getElementById("txt3").style.display = "flex";    
    document.getElementById("txt4").style.display = "none";     
    }

    document.getElementById("r4").addEventListener("mouseover", mouseOver4);
    function mouseOver4() {
    document.getElementById("r1").style.opacity = "0.5";
    document.getElementById("r2").style.opacity = "0.5";
    document.getElementById("r3").style.opacity = "0.5";
    document.getElementById("r4").style.opacity = "1";
    document.getElementById("l1").style.display = "none";
    document.getElementById("l2").style.display = "none";  
    document.getElementById("l3").style.display = "none";    
    document.getElementById("l4").style.display = "flex";   
    document.getElementById("txt1").style.display = "none";
    document.getElementById("txt2").style.display = "none";  
    document.getElementById("txt3").style.display = "none";    
    document.getElementById("txt4").style.display = "flex";     
    }
  } else {
    document.getElementById("icon_arrow").style.display = "flex";
  }
};

window.addEventListener("scroll", myScrollFunc);








