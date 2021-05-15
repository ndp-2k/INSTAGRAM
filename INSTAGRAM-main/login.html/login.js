let username = document.getElementById('username');
let password = document.getElementById('password');
let signin = document.getElementById('signin');
let user;

signin.onclick = function () {
    fetch('http://localhost:3000/User')
        .then((response) => response.json())
        .then((json) => {
            json.forEach(element => {
                if ((element.username == username.value || element.email == username.value) && element.password == password.value) {
                    window.location.replace("http://127.0.0.1:5500/instagram-home/index.html");
                    updateOnline(element);
                    console.log(element);
                }
            }

            );
        });


}


function updateOnline(a) {
    fetch('http://localhost:3000/user_login/1', {
        method: 'PUT',
        body: JSON.stringify({
            userid: a.id,
            username: a.username,
            password:a.password,
            name:a.name,
            email:a.email,
            avt:a.avt,
            follow:a.follow,
            follower:a.follower
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}
