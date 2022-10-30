const toggleBtn = document.querySelector(".toggle-nav");
const nav = document.querySelector("#navigation");

toggleBtn.addEventListener("click", toggleNav);

const allDropdown = document.querySelectorAll("[data-dropdown");

function toggleNav(e) {
  let expand = e.target.getAttribute("aria-expanded");
  //  get attribute gives a string so had to us double quotes below
  if (e.target.getAttribute("aria-expanded") === "false") {
    e.target.setAttribute("aria-expanded", true);
    nav.setAttribute("aria-visible", true);
    // expand = true;
    // here i was changing var value not the attr value
  } else {
    nav.setAttribute("aria-visible", false);
    e.target.setAttribute("aria-expanded", false);
  }
}

document.addEventListener('click', toggleDropDown);

function toggleDropDown(e) {
  const isDropdownButton = e.target.matches("[data-dropdown-button]")
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return
  
  let dropdownMenu;
  let currentDropdown;
  // dropdownMenu.getAttribute("aria-visible") ? true : false WONT WORK (Again 8)
  // getAttribute returns a string  so had to usee === "stringval"
  // console.log(typeof toggle);
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]");
    dropdownMenu = currentDropdown.querySelector(".dropdown");
    let toggle = currentDropdown.getAttribute("aria-expanded") === "false" ? true : false;
    dropdownMenu.setAttribute("aria-visible", toggle);
    currentDropdown.setAttribute("aria-expanded", toggle)
  }

  const dm = document.querySelectorAll("[data-dropdown]").forEach(dd =>{
    if (dd !== currentDropdown) {
      dd.querySelector(".dropdown").setAttribute("aria-visible", false);
      dd.setAttribute("aria-expanded", false);
    }
  })
}
