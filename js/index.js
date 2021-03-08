const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//* Nav styling 
let nav = document.getElementsByTagName("a");
console.log(nav);
nav[0].textContent = siteContent["nav"]["nav-item-1"];
nav[1].textContent = siteContent["nav"]["nav-item-2"];
nav[2].textContent = siteContent["nav"]["nav-item-3"];
nav[3].textContent = siteContent["nav"]["nav-item-4"];
nav[4].textContent = siteContent["nav"]["nav-item-5"];
nav[5].textContent = siteContent["nav"]["nav-item-6"];

for(let i = 0; i < nav.length; i++){
  nav[i].style.color = "green";
}

//* Middle Section

let firstSection = document.querySelector("h1");
firstSection.innerHTML = siteContent["cta"]["h1"].split(" ").join("<br>");
console.log(firstSection);

let secondSection = document.querySelector("button");
secondSection.innerText = siteContent["cta"]["button"];

let img1 = document.getElementById("cta-img");
img1.setAttribute('src',siteContent["cta"]["img-src"]);

let img2 = document.getElementById("middle-img");
img2.setAttribute('src',siteContent["main-content"]["middle-img-src"]);

//* Main Content
let mainHeaders = document.querySelectorAll("h4");
let pTags = document.querySelectorAll("p");
mainHeaders[0].textContent = siteContent["main-content"]["features-h4"];
pTags[0].textContent = siteContent["main-content"]["features-content"];

mainHeaders[1].textContent = siteContent["main-content"]["about-h4"];
pTags[1].textContent = siteContent["main-content"]["about-content"];

mainHeaders[2].textContent = siteContent["main-content"]["services-h4"];
pTags[2].textContent = siteContent["main-content"]["services-content"];

mainHeaders[3].textContent = siteContent["main-content"]["product-h4"];
pTags[3].textContent = siteContent["main-content"]["product-content"];

mainHeaders[4].textContent = siteContent["main-content"]["vision-h4"];
pTags[4].textContent = siteContent["main-content"]["vision-content"];

//* Contact

mainHeaders[5].textContent = siteContent["contact"]["contact-h4"];
pTags[5].textContent = siteContent["contact"]["address"];
pTags[6].textContent = siteContent["contact"]["phone"];
pTags[7].textContent = siteContent["contact"]["email"];

//* Footer
pTags[8].textContent = siteContent["footer"]["copyright"];

//* NEW 
let navs = document.querySelector("nav");
let newTag = document.createElement("a");
newTag.textContent = "More";
navs.appendChild(newTag);
newTag.style.color="purple";

let somethingNew = document.createElement("a");
somethingNew.textContent = "Weebs only!!!";
navs.prepend(somethingNew);
somethingNew.style.color = "pink";