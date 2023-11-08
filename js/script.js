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
  //global varaible
  let showingSubMenu = false;
  //1.0
  const mainEl = document.querySelector("main");
  mainEl.style.backgroundColor =` var(--main-bg)`;
  //1.1-1.3
  const seiElement = document.createElement("h1");
  seiElement.textContent = "Sei Rocks";
  mainEl.appendChild(seiElement);
  mainEl.classList.add("flex-ctr");
  //stylinh for menu item
  const topMenuEl = document.querySelector("nav");
  topMenuEl.style.height = "100%";
  topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
  topMenuEl.classList.add("flex-around");
  
  for (let link of menuLinks) {
      const aEl = document.createElement("a");
      aEl.href = link.href;
      aEl.textContent = link.text;
      topMenuEl.appendChild(aEl);
  }
  //stylinh for menu item
  const subMenuEl = document.querySelector("#sub-menu");
  subMenuEl.style.height = "100%";
  subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
  subMenuEl.classList.add("flex-around");
  subMenuEl.style.position = "absolute";
  subMenuEl.style.top = "0";
  
  const topMenuLinks = topMenuEl.getElementsByTagName("a");
  // click event listener for top menu
  topMenuEl.addEventListener('click', function (event) {
      event.preventDefault();
      if (event.target.tagName !== "A") {
          return;
      }
  
      for (let link of topMenuLinks) {
          link.classList.remove("active");
      }
  
      const clickedLink = event.target;
      // click event 
      if (clickedLink.classList.contains("active")) {
          clickedLink.classList.remove("active");
          showingSubMenu = false;
          subMenuEl.style.top = "0";
          return;
      }
  
      clickedLink.classList.add("active");
      showingSubMenu = true;
  
      const linkText = clickedLink.textContent;
      const matchingLink = menuLinks.find((link) => link.text === linkText);
  
      if (matchingLink && matchingLink.subLinks) {
          buildSubMenu(matchingLink.subLinks);
          subMenuEl.style.top = "100%";
      } else {
          subMenuEl.style.top = "0";
      }
  });
  //submenu event
  subMenuEl.addEventListener('click', function (evt) {
      evt.preventDefault();
      if (evt.target.tagName !== 'A') {
          return;
      }
  
      showingSubMenu = false;
      subMenuEl.style.top = '0';
  
      for (let link of topMenuLinks) {
          link.classList.remove("active");
      }
  
      const h1El = document.querySelector('h1');
      h1El.textContent = evt.target.textContent;
  
      mainEl.innerHTML = `<h1>${evt.target.textContent}</h1>`;
  });
  //sub lik evnt
  function buildSubMenu(subLinks) {
      subMenuEl.innerHTML = '';
      for (let link of subLinks) {
          const aEl = document.createElement('a');
          aEl.href = link.href;
          aEl.textContent = link.text;
          subMenuEl.appendChild(aEl);
      }
  }