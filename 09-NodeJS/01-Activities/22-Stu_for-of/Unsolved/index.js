let listItems = document.querySelectorAll("li");
console.log(listItems);

for (const value of listItems) {
    console.log(value.textContent);
    value.style.color = "red";
};