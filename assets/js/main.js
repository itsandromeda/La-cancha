/*global document*/
var container = document.createElement("div"),
    subContainer = document.createElement("div"),
    center = document.createElement("div"),
    sideFieldA = document.createElement("div"),
    sideFieldB = document.createElement("div"),
    ballA = document.createElement("div"),
    ballB = document.createElement("div"),
    ballC = document.createElement("div"),
    text = document.createTextNode("© Laboratoria 2017"),
    textContainer = document.createElement("span");

container.classList.add("main-wrapper");
container.classList.add("field");
subContainer.classList.add("sub-wrapper");
subContainer.classList.add("white-border");
subContainer.classList.add("field");
center.classList.add("field");
center.classList.add("center");
center.classList.add("white-border");
sideFieldA.classList.add("sidefield-a");
sideFieldA.classList.add("white-border");
sideFieldB.classList.add("sidefield-b");
sideFieldB.classList.add("white-border");
ballA.classList.add("ball");
ballA.classList.add("ball-right");
ballB.classList.add("ball");
ballB.classList.add("ball-mid");
ballC.classList.add("ball");
ballC.classList.add("ball-left");
textContainer.classList.add("copyright");

textContainer.appendChild(text);
sideFieldA.appendChild(ballA);
center.appendChild(ballB);
sideFieldB.appendChild(ballC);
subContainer.appendChild(center);
subContainer.appendChild(sideFieldA);
subContainer.appendChild(sideFieldB);
subContainer.appendChild(textContainer);
container.appendChild(subContainer);
document.body.appendChild(container);