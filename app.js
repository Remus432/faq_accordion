const arrow = document.querySelectorAll(".arrow-btn");
const allCards = document.querySelectorAll(".card__faq");
let toggleState = false;

arrow.forEach(btn => {
  btn.addEventListener("click", toggleAccordion);
})

function toggleAccordion(e) {
  const parentDiv = e.target.parentElement.parentElement;

  if (toggleState) {
    parentDiv.classList.replace("toggle-on", "toggle-off");
    toggleState = !toggleState;
  } else {
    parentDiv.classList.replace("toggle-off", "toggle-on");

    console.log("clicked");
    
    allCards.forEach(card => {
      if (card.classList.contains("toggle-on") && card.textContent !== parentDiv.textContent) {
        card.classList.replace("toggle-on", "toggle-off");
      }
    })

    toggleState = !toggleState;
  }
  
  
}