var squares = document.querySelectorAll(".square");
var rgbDisplay = document.querySelector("#rgbDisplay");
var messageBar = document.querySelector("#messageDisplay");
var topBar = document.querySelector("#topBar");
var newColors = document.querySelector("#newColorsButton");
var easyBtn = document.querySelector("#easyBtn");
var normalBtn = document.querySelector("#normalBtn");
var hardBtn = document.querySelector("#hardBtn");

//assiging random colors to squares
var numSquares = 6;
var colors = gameColors(numSquares);

//hiding xtra squares
for(var i = 0; i < squares.length; i++) {
    if (!colors[i]) {
        squares[i].style.display = "none";
    }
}


//picking the color to be guessed
var theGameColorIndex = Math.floor(Math.random() * numSquares);
var theGameColor = colors[theGameColorIndex];

//displaying the RGB value on the display
rgbDisplay.textContent = theGameColor;

//assiging colors to squares and comparing the clicked one to the game color
reset()

//New Colors button
newColorsButton.addEventListener("click", function(){
    reset();
});

//easy dificulty selector button
easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    normalBtn.classList.remove("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    reset();
    for(var i = 0; i < squares.length; i++) {
        if (!colors[i]) {
            squares[i].style.display = "none";
        }
        else {
            squares[i].style.display = "block";            
        }
    }
});

//medium dificulty selector button
normalBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    normalBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 6;
    reset();
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.display = "block";  
        if (!colors[i]) {
            squares[i].style.display = "none";
        }
        else {          
        }
    }
});

//hard dificulty selector button
hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    normalBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 9;
    reset();
    for(var i = 0; i < squares.length; i++) {
        if (!colors[i]) {
            squares[i].style.display = "none";
        }
        else {
            squares[i].style.display = "block";            
        }
    }
});


//generating a random color
function randomColor() {
    var r = Math.floor(Math.random()* 256);
    var g = Math.floor(Math.random()* 256);
    var b = Math.floor(Math.random()* 256);
    return "rgb(" + r + ", " + g + ", " + b + ")"
}

//making an array of colors
function gameColors(num) {
    //create an array
    var arr = [];
    //push random collors into the array
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    //return the array
    return arr;
}

function reset() {
    //assigning new random colors to the squares
    colors = gameColors(numSquares);
    //picking the color to be guessed
    theGameColorIndex = Math.floor(Math.random() * numSquares);
    theGameColor = colors[theGameColorIndex];
    //displaying the RGB value on the display
    rgbDisplay.textContent = theGameColor;
    //changing the top bar background back
    topBar.style.backgroundColor = "#195fb9";
    //changing the message display to Guess the Color
    messageBar.textContent = "Guess the color";
    //changing the new colors button back
    newColorsButton.textContent = "New colors";
    for (var i = 0; i < squares.length; i++) {
        //assigning the color to the square
        squares[i].style.backgroundColor = colors[i];
        //listening to clicks
        squares[i].addEventListener ("click", function(){
            if (this.style.backgroundColor != theGameColor) {
                this.style.backgroundColor = "#f5f5dc";
                messageBar.textContent = "Try again";
            }
            else {
                topBar.style.backgroundColor = theGameColor;
                messageBar.innerHTML = "Correct! <i class=\"fas fa-thumbs-up\"></i>";
                for (var i = 0; i < squares.length; i++) {
                squares[i].style.backgroundColor = theGameColor;
                newColorsButton.textContent = "Play again";
                }
            }
        });
    }
}