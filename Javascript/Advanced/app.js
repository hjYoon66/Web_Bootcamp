//document.body.children[1].children[0].href='https://google.com';

let anchorElement = document.getElementById('external-link');
anchorElement.href = 'https://google.com';

// anchorElement = document.querySelector('#external-id');
// anchorElement.href = 'https://naver.com';

//1.Create the new element;
let newAnchorElement = document.createElement('a');
newAnchorElement.href = 'https://naver.com';
newAnchorElement.textContent = 'This leads to Naver';


//2. Get access to the parent element 
let firstParagraph = document.querySelector('p');

//3. Insert the new element into the parent element content
firstParagraph.append(newAnchorElement);

//Remove Elements
//1. Select the element that should be removed
let firstH1Element = document.querySelector('h1');
//2. Remove it
firstH1Element.remove();
// firstH1Element.parentElement.removeChild(firstH1Element); //for older browser

//Move Elements
firstParagraph.parentElement.append(firstParagraph);

//innerHTML
firstParagraph.innerHTML = 'Hi! This is <strong>important!</strong>';