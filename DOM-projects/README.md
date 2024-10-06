# Projects related to DOM

#### these projects are to understand document manipulations and some simple events

### Project-1 Color-Changer script

```javascript
const colors = document.querySelectorAll(".button");
const body = document.querySelector("body");

function change() {
  body.style.backgroundColor = "white";
}
// console.log(colors);  ->nodelist
colors.forEach(function (color) {
  color.addEventListener("click", function (e) {
    //here e is an event
    //e.target-> where the event occurred
    if (e.target.id == "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == "aquamarine") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == "yellow") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == "green") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```

### Project-2 BMI-Index script
