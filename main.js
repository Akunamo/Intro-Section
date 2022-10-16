const toggleBtn = document.querySelector(".toggle-nav");
const nav = document.querySelector("#navigation");
toggleBtn.addEventListener("click", toggleNav);

function toggleNav(e) {
  let expand = e.target.getAttribute("aria-expanded");
//  get attribute gives a string so had to us double quotes at 8
  if (e.target.getAttribute("aria-expanded") === "false") {
    e.target.setAttribute("aria-expanded", true);
    nav.setAttribute("aria-visible", true);
    // expand = true;
    // here m changing var value not the attr value
  } else {
    nav.setAttribute("aria-visible", false);
    e.target.setAttribute("aria-expanded", false);
  }
  console.log(this.getAttribute("aria-expanded"));
}
