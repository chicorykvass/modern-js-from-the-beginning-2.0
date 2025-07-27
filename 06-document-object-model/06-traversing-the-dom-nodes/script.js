let output;

const parent = document.querySelector('.parent');

output = parent.childNodes;
output = parent.childNodes[0].textContent;
output = parent.childNodes[0].nodeName;
output = parent.childNodes[3].textContent;
output = parent.childNodes[3].innerHTML;
output = parent.childNodes[3].outerHTML;

parent.childNodes[3].innerText = 'Child One';
parent.childNodes[5].style.color = 'red';

output = parent.firstChild;
output = parent.lastChild;

parent.lastChild.textContent = 'Hello';

// Parent node
const child = document.querySelector('.child');

output = child.parentNode;
output = child.parentElement; // Same parent

child.parentNode.style.backgroundColor = 'pink';

// Siblings
const secondItem = document.querySelector('.child:nth-child(2)');

output = secondItem.nextSibling;
output = secondItem.previousSibling;

console.log(output);
