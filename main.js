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

document.addEventListener('click', toggleDropDown);

function toggleDropDown(e) {
  const isDropdownButton = e.target.matches("[data-dropdown-button]") 
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return
  let currentDropdown = e.target.closest("[data-dropdown]");
  const dropdownMenu = currentDropdown.querySelector(".dropdown");
  
  let toggle = dropdownMenu.getAttribute("aria-visible") === "false"? true : false;
  // dropdownMenu.getAttribute("aria-visible") ? true : false WONT WORK
  // getAttribute returns a string  so had to usee === "stringval"
  // console.log(typeof toggle);
  if (isDropdownButton){
    dropdownMenu.setAttribute("aria-visible", toggle)
  }

}