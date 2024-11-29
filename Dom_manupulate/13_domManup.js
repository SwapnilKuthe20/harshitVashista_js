
// Documnet Object Model ::::

// Browser reads html file and then convert it into document object, 
// and put it into window obj

// we can ommit window object

// console.dir(window.document);
// console.log(document);
// console.dir(document);
// ----------------------------------------------------

// :: How to access element using id ::

const logo = document.getElementById('logo');
// console.log(logo, "...log");
// console.dir(logo, '...dir');
// ----------------------------------------------------

// :: How to access element using class ::

// getElementsByClassName-- > returns HTMLCollection[]
// querySelectorAll --> returns nodeList[]
// we can't use forEach loop over HTMLCollection[]
// But we can use forEach loop over nodeList[] 

const navClass = document.getElementsByClassName('nav-links');
// console.log(navClass);
// it takes first className element only
// ----------------------------------------------------

// :: How to access all elements of className using queryselctor ::

const navItems = document.querySelector('.nav-item');
// console.log(navItems);          // it gives only first element
// console.dir(navItems);

//  if we want all elements related class ::

const allItems = document.querySelectorAll('.nav-item');
// console.log(allItems);
// returns : nodeList (Array like obj) --> we can use indexing and length prop
// And gives all elements related to className

const firstLink = document.querySelector('.nav-links li');
// console.log(firstLink);          // it gives 1st Home link 
// ----------------------------------------------------

// ::: How to get text of element :::
const getText = document.querySelector('.nav-links a');
// console.log(getText);
const innerText = getText.textContent;
// console.log(innerText);

// :: to set InnerText 
// getText.innerHTML = "About";
// ----------------------------------------------------
// :: How to get Attribute ::

const getAttri = document.querySelector('.nav-item a');
// console.log(getAttri);    // <a>

const getHref = getAttri.getAttribute('href');
// console.log(getHref);

// To setAttribute ::
const setAttri = getAttri.setAttribute('href', 'https://www.google.com');
// console.log(getAttri.getAttribute('href'));

// ----------------------------------------------------

//// :: To check type of input of form-todo

const checkType = document.querySelector('.form-todo input');
// console.log(checkType.getAttribute('type'));
// ----------------------------------------------------

//// :: get all elemnts using className ::

const getAllItems = document.getElementsByClassName('nav-item');
// console.log(getAllItems);    // HTMLCollection 
// console.log(Array.isArray(getAllItems));    // false
// retuns: HTMLCollection (Array like obj) --> we can use length prop and indexing
// HTMLCollection --> We can't use all methods of array

// console.log(getAllItems[0]);
// console.log(getAllItems[1]);
// console.log(getAllItems[2]);
// ----------------------------------------------------

// :: We can iterate over items ::

// we can use --> for loop, for of loop
// we can't use --> forEach loop to over HTML Collection

// for (let i = 0; i < getAllItems.length; i++) {
//     console.log(getAllItems[i]);
// }

// ----------------------------------------------------

//// :: Scenario - We have to chnge color of nav-Items ::

const navLinks = document.querySelectorAll('.nav-item a');
// console.log(navLinks);      // nodeList

// for (let i = 0; i < navLinks.length; i++) {
//     const navItems = navLinks[i];
//     // console.log(navItems);
//     navItems.style.color = "yellow";
// }
// ---------------------- OR ------------------------------

// :: By using for-of loop

// for (let navitem of navLinks) {
//     // console.log(navitem);
//     // navitem.style.backgroundColor = "yellow";
//     navitem.style.color = "pink";
// }

// ---------------------- OR ------------------------------
// navLinks.forEach((elements) => {
//     console.log(elements);
// })
//  yes we can iterate over nodeList[];

// ------------------------ OR ----------------------------
const navLinksByClass = document.getElementsByClassName('.nav-item a');
// console.log(navLinksByClass);       // HTMLCollection

// :: By using forEach loop

// navLinksByClass.forEach(element => {
//     console.log(element);
// });
//// Uncaught TypeError:: navLinksByClass.forEach is not a function
// ------------------------ OR ----------------------------

// :: Convert HTMLCollection into Array by using Array.from() method ::

let getInput = document.getElementsByClassName('nav-item');
// console.log(getInput);      // HTMLCollection
// console.log(Array.isArray(getInput));       // false

// :: Convert HTMLCollection into Array ::

getInput = Array.from(getInput);
// console.log(getInput);
// console.log(Array.isArray(getInput));       // true

// note : After converting into array we can use any array methods

// ------------------------------------------------------


















