let output;

output = document.documentElement;

output = document.head;
output = document.body;

output = document.head.children;
output = document.body.children;

output = document.doctype;
output = document.domain;
output = document.URL;
output = document.characterSet;
output = document.contentType;

output = document.forms;
output = document.forms[0];
output = document.forms[0].method;
output = document.forms[0].action;

// document.forms[0].id = 'new-id';
output = document.forms[0].id;

output = document.links;
output = document.links[0];
output = document.links[0].href;
document.links[0].id = 'google-link';
document.links[0].className = 'google-class';
output = document.links[0].classList;

output = document.images;
output = document.images[0];
output = document.images[0].src;

const forms = Array.from(document.forms);
forms.forEach((form) => console.log(form));

console.log(output);
