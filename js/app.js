const luckyNum = document.querySelector("#lucky-num");
const bday = document.querySelector("#bday");
const form = document.querySelector(".form");
const section = document.querySelector("section");
const result = document.querySelector(".result");
const model = document.querySelector(".model");
const modelBtn = document.querySelector(".model-btn");
const img = document.querySelector(".img");

img.style.display = "none";
model.style.display = "none";

setTimeout(() => {
  model.style.display = "";
}, 3000);

modelBtn.addEventListener("click", () => {
  model.style.display = "none";
});

form.addEventListener("submit", (e) => {
 
  e.preventDefault();
  const date= bday.value.replaceAll("-","");
 
  let dateSum=0;
  for(let index of date)
{
  dateSum+=Number(index);
}


  const luckyNumber = Number(luckyNum.value);
console.log(dateSum);
  const areYouLucky = dateSum % luckyNumber === 0 ? true : false;
  console.log(areYouLucky);
  luckyNum.value = "";
  bday.value = "";

  section.classList.add("lucky-section");

  if (areYouLucky) {
    result.textContent = "Woww, You're lucky .";
    img.style.display = "block";
    img.src = "/assets/happy.png";
  } else {
    result.textContent = `Oops! You missed by ${
      dateSum % luckyNumber
    } days from being lucky.`;

    img.style.display = "block";
    img.src = "/assets/sad.png";
  }
});


