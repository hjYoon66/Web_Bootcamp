//document.body.children[1].children[0].href='https://google.com';

let anchorElement=document.getElementById('external-link');
anchorElement.href='https://google.com';

anchorElement=document.querySelector('#external-id');
anchorElement.href='https://naver.com';

//1.Create the new element;
let newAnchorElement=document.createElement('a');

//2. Get access to the parent element 

