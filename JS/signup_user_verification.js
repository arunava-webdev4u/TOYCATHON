let btn = document.querySelector('#signup');

// btn.addEventListener('click', function(){
//     console.log("working")
// });
btn.addEventListener('click', signup);

function signup()
{
    let username = document.querySelector("#user").value;
    let password = document.querySelector("#pass").value;
    let password2 = document.querySelector("#pass2").value;

    if (username == "")
    {
        alert("Please Enter a username");
        return;
    }
    if (password == "") {
        alert("Please Enter a password");
        return;
    }
    if (username in localStorage)
    {
        alert("Username already exists");
        return;
    }
    if (password !== password2)
    {
        alert("Please check your password");
        return;
    }
    user_array = [password, 1, 0, 0, 0, 0];

    // console.log(user_array)

    localStorage.setItem(username, JSON.stringify(user_array));
    alert("Successfully Signed Up");

    btn.setAttribute("href", "index.html");
}