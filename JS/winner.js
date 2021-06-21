let username = sessionStorage.getItem('loggedInUserName');
let name = document.querySelector('h1');

name.innerText += " " + username;