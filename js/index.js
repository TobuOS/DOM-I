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

//top to bottom in order of appearance
let title = document.querySelector('title')
title.textContent = 'Great Idea'

//nav a
let links = document.querySelectorAll('nav a')
console.log(links)
let linksArr = Array.from(links)

//make links green
linksArr.forEach( link => link.style.color = 'green')

let services = linksArr[0]
services.textContent = 'Services'

let product = linksArr[1]
product.textContent = 'Product'

let vision = linksArr[2]
vision.textContent = 'Vision'

let features = linksArr[3]
features.textContent = 'Features'

let about = linksArr[4]
about.textContent = 'About'

let contact = linksArr[5]
contact.textContent = 'Contact'

//append and prepend
let fun = document.createElement('a')
fun.textContent = 'Fun'
fun.href = '#'
fun.style.color = 'green'

let help = document.createElement('a')
help.textContent = 'Help'
help.href = '#'
help.style.color = 'green'

document.querySelector('nav').appendChild(help)
document.querySelector('nav').prepend(fun)


//cta

let awesome = document.querySelector('.cta-text h1')
awesome.innerHTML = 'DOM <br> Is<br> Awesome'

let ctaImg = document.querySelector('#cta-img')
ctaImg.src = 'img/header-img.png'

let ctaButton = document.querySelector('.cta-text button')
ctaButton.textContent = 'Get Started'

//main h4 content
let h4s = document.querySelectorAll('.text-content h4')
let h4Arr = Array.from(h4s)


let h4Features = h4Arr[0]
h4Features.textContent = 'Features'

let h4About = h4Arr[1]
h4About.textContent = 'About'

let h4Services = h4Arr[2]
h4Services.textContent = 'Services'

let h4Product = h4Arr[3]
h4Product.textContent = 'Product'

let h4Vision = h4Arr[4]
h4Vision.textContent = 'Vision'

//main p content
let ps = document.querySelectorAll('.text-content p')
let pArr = Array.from(ps)
console.log(pArr)

let pFeatures = pArr[0]
pFeatures.textContent = `Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,
in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
scelerisque quis.`

let pAbout = pArr[1]
pAbout.textContent = `About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in
interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
scelerisque quis.`

let pServices = pArr[2]
pServices.textContent = `Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,
in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
scelerisque quis.`

let pProduct = pArr[3]
pProduct.textContent = `Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in
interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
scelerisque quis.`

let pVision = pArr[4]
pVision.textContent = `Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in
interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
scelerisque quis.`

//middle image
let midImg = document.querySelector('#middle-img')
midImg.src = 'img/mid-page-accent.jpg'

//contact
let h4Contact = document.querySelector('.contact h4')
h4Contact.textContent = 'Contact'

let psContact = document.querySelectorAll('.contact p')
let pContactArr = Array.from(psContact)

let p1 = pContactArr[0]
p1.innerHTML = '123 Way 456 Street<br>Somewhere, USA'

let p2 = pContactArr[1]
p2.textContent = '1 (888) 888-8888'

let p3 = pContactArr[2]
p3.textContent = 'sales@greatidea.io'

//footer
let pFooter = document.querySelector('footer p')
pFooter.textContent = 'Copyright Great Idea! 2018'