let btn = document.querySelector('#login');
btn.addEventListener('click', login);

function login()
{
    let username = document.querySelector("#user").value;
    let password = document.querySelector("#pass").value;
    if (username == "") {
        alert("Please Enter a username");
        return;
    }
    if (password == "") {
        alert("Please Enter a password");
        return;
    }
    if (!(username in localStorage)) {
        alert("Username not found");
        return;
    }

    let tmp = JSON.parse(localStorage.getItem(username));
    if (password !== tmp[0])
    {
        alert("Incorrect password");
        return;
    }

    // let tempData = [username, tmp];
    // console.log(tempData[1][0]);
    // localStorage.setItem('tempUserData', JSON.stringify(tempData));
    // loggedInUserName = tmp[0];
    sessionStorage.setItem('loggedInUserName', username);

    btn.setAttribute("href", "/TOYCATHON/dashboard.html");
}
