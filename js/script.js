// Menu data structure
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];
// global variable
let showingSubMenu = false


//1.0
const  mainEl = document.querySelector("main")
//1.1
mainEl.style.backgroundColor = "var(--main-bg)"
//1.2
let seiElement = document.createElement("h1")

mainEl.appendChild(seiElement)

let hOne = document.querySelector("h1")
//1.2
hOne.textContent = "Sei Rocks"
//1.3
mainEl.className = "flex-ctr"

// let topMenuEl = document.createElement("nav")
// topMenuEl.id = "top-menu"

// 2.0
let topMenuEl = document.querySelector("nav")
//2.1
topMenuEl.style.height = "100%"
//2.2
topMenuEl.style.backgroundColor = "var(--top-menu-bg)"
//2.3
topMenuEl.className = "flex-around"

//3.1
for (let value of menuLinks){
  let link = document.createElement('a');
  link.setAttribute('href', value.href); 
  link.textContent = value.text;
  topMenuEl.appendChild(link);
  // console.log(link)
};
//4.0
let subMenuEl = document.querySelector("#sub-menu")
console.log(subMenuEl)
//4.1
subMenuEl.style.height = "100%"
//4.2
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)"
//4.3
subMenuEl.className = "flex-around"
//4.4
subMenuEl.style.position ="absolute"
//4.5
subMenuEl.style.top = "0"
//5.1
let topMenuLinks = topMenuEl.getElementsByTagName("a")
console.log(topMenuLinks)
//5.2
topMenuEl.addEventListener('click', function(event){
  event.preventDefault();
  if (event.target.tagName !== "A") {
    return;
  }
  console.log(event.target.textContent);

  const clickedLink = event.target;

  if( clickedLink.classList.contains("active")) {
    clickedLink.classList.remove("active")
    showingSubMenu = false;

    subMenuEl.style.top = "0";
    return ;
  }
  clickedLink.classList.add("active")
  showingSubMenu = true;

  if ( clickedLink.classList.contains("active")) {
    clickedLink.classList.remove("active")
    topMenuLinks = false
  }
  
});
//5.4
topMenuLinks.forEach(function(element, index, array) {
  array[index].classList.remove('active');
});

 // 5.5 
 evt.target.classList.add('active');

 let subLinks = []; 
  let linkElement = menuLinks.find(({text}) => text === evt.target.innerHTML)
  for (const key in menuLinks) {
   
    if (linkElement.hasOwnProperty('subLinks')) {
        subLinks = linkElement.subLinks; //5.6
        showingSubMenu = true;
    } else {
    
      showingSubMenu = false;
    }
  }

   // 5.7 If showingSubMenu is true:
   if (showingSubMenu === true) {
    buildSubMenu(subLinks);
    subMenuEl.style.top = '100%';
  } else if (showingSubMenu = false) {
    subMenuEl.style.top = '0';
  } 


   // 5.8  buildSubMenu function
   function buildSubMenu(obj) {
  
    subMenuEl.replaceChildren();
    for (let value of obj){
      let link = document.createElement('a');
      link.href = value.href; 
      link.text = value.text;
      subMenuEl.appendChild(link);
    }
   
  }
  

// 6.0 Attach a delegated >'click' event listener to >subMenuEl.

subMenuEl.addEventListener('click', function (evt) {
  evt.preventDefault()
  if (evt.target.nodeName !== 'A') {
    return;
  } else {
    console.log("event target element:")
    console.log(evt.target.innerHTML);
  }
  // 6.1
  showingSubMenu = false;
  subMenuEl.style.top = '0';

  // 6.2 
  for (let value of topMenuLinks) {
    value.classList.remove("active");
    }

  // 6.3 
  const h1El = document.querySelector('h1');
  h1El.textContent = evt.target.innerHTML

  // 6.4
  mainEl.innerHTML = `<h1>${evt.target.text}</h1>`;
});



