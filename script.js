// calls the functions
function drawScrene() {
bubbles();
bubblesX2();
myFunction();
}

//function for bubbles
function bubbles() {
for (var i = 0; i < 200; i++) {
  rgb (randomNumber(100,255),randomNumber(100,255),randomNumber(100,255) ,0.5);
  moveTo(randomNumber(0,320), randomNumber(0,450));
  dot(randomNumber(1,200));
  moveTo(randomNumber(0,320),randomNumber(0,450));
 }
}

// function for stable bubbles
function bubblesX2() {
for (var i = 0; i < 400; i++) {
  rgb (randomNumber(100,255),randomNumber(100,255),randomNumber(100,255));
  moveTo(randomNumber(0,320), randomNumber(0,450));
  dot(randomNumber(1,100));
  moveTo(randomNumber(0,320),randomNumber(0,450));
 }
}

function myFunction() {
  var x = document.getElementById("div.image");
  if (x.style.display === "none") {
    x.style.display = "image";
  } else {
    x.style.display = "none";
  }
  var x = document.getElementById("div.imageTwo");
  if (x.style.display === "none") {
    x.style.display = "imageTwo";
  } else {
    x.style.display = "none";
  }
  var x = document.getElementById("div.imageThree");
  if (x.style.display === "none") {
    x.style.display = "imageThree";
  } else {
    x.style.display = "none";
  }
  var x = document.getElementById("div.imageFour");
  if (x.style.display === "none") {
    x.style.display = "imageFour";
  } else {
    x.style.display = "none";
  }
}