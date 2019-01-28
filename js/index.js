getEl = (str) => {
  return document.getElementsByTagName(str);
}
getClass = (str) => {

  return document.getElementById(str);
}
getID = (str) => {
  return document.getElementById(str);
}
getName = (str) => {
  return document.getElementsByName(str);
}
select = (str) => {
  return document.querySelector(str);
}
selectAll = (str) => {
  return document.querySelectorAll(str);
}



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

// NAV
const links = selectAll('a');
for (let i = 0; i <= 5; i++ ) {
  links[i].textContent = siteContent["nav"][`nav-item-${i+1}`];
  links[i].style.color = "green";
}

const nav = select('nav');
const leftAdd = document.createElement("a");
const leftContent = document.createTextNode("News");
leftAdd.appendChild(leftContent);
nav.prepend(leftAdd)

const rightAdd = document.createElement("a");
const rightContent = document.createTextNode("Sign Up");
rightAdd.appendChild(rightContent);
nav.append(rightAdd)


let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// CONTAINER
const container = selectAll('container');

// CTA
const ctaHeader = select('.cta-text h1');
ctaHeader.textContent = siteContent["cta"]["h1"];
const ctaButton = select('.cta-text button');
ctaButton.textContent = siteContent["cta"]["button"];
const ctaImg = select('.cta img');
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

// MAIN CONTENT
const contentH4 = selectAll('.text-content h4')
contentH4[0].textContent = siteContent["main-content"]["features-h4"];
contentH4[1].textContent = siteContent["main-content"]["about-h4"];
contentH4[2].textContent = siteContent["main-content"]["services-h4"];
contentH4[3].textContent = siteContent["main-content"]["product-h4"];
contentH4[4].textContent = siteContent["main-content"]["vision-h4"];

const contentP = selectAll('.text-content p')
contentP[0].textContent = siteContent["main-content"]["features-content"];
contentP[1].textContent = siteContent["main-content"]["about-content"];
contentP[2].textContent = siteContent["main-content"]["services-content"];
contentP[3].textContent = siteContent["main-content"]["product-content"];
contentP[4].textContent = siteContent["main-content"]["vision-content"];

const contentImg = select('.middle-img');
contentImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// CONTACT
const contact = getClass('contact')
const contacth4 = select('.contact h4');
contacth4.textContent = siteContent["contact"]["contact-h4"]
contactp = selectAll('.contact p');
contactp[0].textContent = siteContent["contact"]["address"];
contactp[1].textContent = siteContent["contact"]["phone"];
contactp[2].textContent = siteContent["contact"]["email"];

// FOOTER
const footer = getEl('footer');
const footerP = select('footer p');
footerP.textContent = siteContent["footer"]["copyright"];