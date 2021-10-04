const navbarElems = document.getElementById("nav-elems").children;

function markActive(toMark) {
  for (let i = 0; i < navbarElems.length; i++) {
    const sibling = navbarElems[i];

    sibling.classList.remove("active");
  }

  let elem = toMark.currentTarget;
  elem.classList += "active";
}

for (let i = 0; i < navbarElems.length; i++) {
  const child = navbarElems[i];

  child.addEventListener("click", markActive)
}

