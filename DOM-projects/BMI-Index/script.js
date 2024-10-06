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
