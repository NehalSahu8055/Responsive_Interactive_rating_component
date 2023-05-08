const submit = document.querySelector(".btn"),
  thnku = document.querySelector(".thnk-u"),
  rate_card = document.querySelector(".rate-card"),
  rstar = document.querySelectorAll(".r-star"),
  add = document.querySelector(".add");

var rate = 0;
for (let i = 0; i < rstar.length; i++) {
  rstar[i].addEventListener("click", function () {
    rstar[i].style.backgroundColor="var(--clr-o)";
    rstar[i].style.color="var(--clr-w)";
    
    rate = rstar[i].textContent;
    add.textContent = "You selected " + rate + " out of 5";
  });
}

submit.addEventListener("click", function () {
  if (rate == 0) alert("Please rate us");
  else {
    thnku.classList.remove("hidden");
    rate_card.classList.add("hidden");
  }
});
