// Create the menu icon element
const menu = document.createElement("div");
menu.innerHTML = '<i class="fa-solid fa-bars"></i>';
menu.style.marginRight = "20px";
let nav_div = document.createElement("div");

let getter;

fetch('read.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        data.forEach(person => {
            let number=document.querySelector(".number");
            number.innerHTML=person.number;
            let name=document.querySelector(".name");
            name.innerHTML=person.name;
        });
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

console.log(getter);


menu.classList.add("box");
let clicked = false;

function createNavItems() {
  const navItems = [
    { href: "#home", text: "Home" },
    { href: "#about", text: "Skills" },
    { href: "#projects", text: "Projects" },
    { href: "#Experience", text: "Education" },
    { href: "#Experience", text: "Experience" },
    { href: "#contact", text: "Contact" },
  ];

  const ul = document.createElement("ul");
  navItems.forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = item.href;
    a.textContent = item.text;
    li.appendChild(a);
    ul.appendChild(li);
  });
  ul.classList.add("dropdown");
  ul.style.zIndex = 3;
  return ul;
}

// Menu click event listener
menu.addEventListener("click", function () {
  if (!clicked) {
    clicked = true;
    let items = createNavItems();
    nav_div.appendChild(items);
    document.body.appendChild(nav_div);
    nav_div.style.width = '100vw';
    nav_div.style.position = 'absolute';
    nav_div.style.top = '0';
  } else {
    clicked = false;
    while (nav_div.firstChild) {
      nav_div.removeChild(nav_div.firstChild);
    }
    if (document.body.contains(nav_div)) {
      document.body.removeChild(nav_div);
    }
  }
});

let nav = document.querySelector("nav");

function handleScreenResize() {
  if (window.innerWidth < 916) {
    if (!nav.contains(menu)) {
      nav.appendChild(menu); // Append the menu icon to the nav
      nav.style.display = "flex";
      nav.style.justifyContent = "flex-end";
      nav.style.alignItems = "start";
    }
  } else {
    if (nav.contains(menu)) {
      clicked = false;
      while (nav_div.firstChild) {
        nav_div.removeChild(nav_div.firstChild);
      }
      if (document.body.contains(nav_div)) {
        document.body.removeChild(nav_div);
      }
      nav.removeChild(menu); 
      nav.style.alignItems = "center";
    }
  }
}

handleScreenResize();

window.addEventListener("resize", handleScreenResize);



const slider = document.querySelector('.slider');
const sliderContents = document.querySelectorAll('.ball');

slider.addEventListener('mouseenter', () => {
    sliderContents[0].classList.add('p1');
    sliderContents[1].classList.add('p3');
    sliderContents[2].classList.add('p1');
    sliderContents[3].classList.add('p2');
    sliderContents[4].classList.add('p1');
    console.log(sliderContents);
});



