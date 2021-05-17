
let regis = document.getElementById('regiss');



regis.onclick = function () {
    let email = document.getElementById('email').value;
    let name = document.getElementById('name').value;
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let check = true;
    fetch('http://localhost:3000/User')
        .then((response) => response.json())
        .then((json) => {
            json.forEach(element => {

                if ((element.email == email || element.username == username) || (email == "" || name == "" || password == "" || username == ""))
                    check = false;
            });
            if (check) {
                fetch('http://localhost:3000/User', {
                    method: 'POST',
                    body: JSON.stringify({
                        email: email,
                        name: name,
                        username: username,
                        password: password,
                        avt: "https://images.unsplash.com/photo-1504433374832-4fcf45f40967?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80&fbclid=IwAR1TYRbLjMqW70afytajLz-OLaIyqqO47dLlfLY0mcAMa2oLOf4NatUr290",
                        follow: [

                        ],
                        follower: [],
                        postsave: [
                        ]
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                    .then((response) => response.json())
                    .then((json) => console.log(json));
                if (alert("Đăng kí thành công, mời bạn đăng nhập !"))
                    window.location.replace("http://127.0.0.1:5500/INSTAGRAM-main/login.html/login.html");
            }
            else {
                alert("đăng ký thất bại !")
            }
        });
}