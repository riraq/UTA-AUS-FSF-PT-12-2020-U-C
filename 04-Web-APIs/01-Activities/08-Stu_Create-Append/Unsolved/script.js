var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var kittenEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");
// Create ordered list element
var listEl = document.createElement("ol");
// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

h1El.textContent = "Welcome to my page";
kittenEl.textContent = "This is my kitten 🐱.";
nameEl.textContent = "His name is Jax.";
favoriteEl.textContent = "My favorite foods are:";

body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
// Append ordered list 
favoriteEl.appendChild(listEl);

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "http://placekitten.com/200/300");
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
favoriteEl.setAttribute("style", "font-size:20px;");

// TODO: Add ordered list items containing four favorite foods
listEl.setAttribute("style", "background-color: #333333; color: white; padding: 20px");
var listItems = [li1, li2, li3, li4];
var listFoods = ["apples", "pizza", "cupcakes", "dumplings"];
var colors = ["background-color: red", "background-color: blue", "background-color: orange", "background-color: green"];

for (var i = 0; i < listItems.length; i++) {
    listEl.appendChild(listItems[i]);
};

for (var i = 0; i < listItems.length; i++) {
    listItems[i].textContent = listFoods[i]
};

for (var i = 0; i < listItems.length; i++){
    listItems[i].setAttribute("style", "color: white; padding: 5px; margin-left: 35px")
};

for (var i = 0; i < colors.length; i++) {
    listItems[i].setAttribute("style", colors[i])
}