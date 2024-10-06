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

```javascript
const form = document.querySelector("form");
//cant access h and w here, coz the value will be obtained as soon as the page will be
//loaded. but e want values after the sumbit

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const h = parseInt(document.querySelector("#height").value);
  const w = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");

  if (h === "" || h < 0 || isNaN(h) || w === "" || w < 0 || isNaN(w)) {
    result.innerHTML = `Please give a valid height ${h} and weight ${w}`;
  } else {
    const bmi = (w / ((h * h) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;
  }
});
```

### Project 3 - digital clock - script

```javascript
<script>
    const clock = document.getElementById("clock");
    setInterval(function () {
      let date = new Date();
      clock.innerHTML = date.toLocaleTimeString();
    }, 1000); //1000 is milliseconds - interval for function to run
  </script>

```

### Project 4 -
