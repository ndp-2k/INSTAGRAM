
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
            
                if ((element.email == email || element.username == username)||(email==""||name==""||password==""||username==""))
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
                        avt:"https://i.pinimg.com/originals/3c/ae/61/3cae61dec3a7b4b8ce29b810488dc19d.jpg",
                        follow: [
                            9,
                            7,
                            8,
                            5,
                            3,
                            2,
                            6,
                            4
                        ],
                        follower: [],
                        postsave: [
                            2,
                            3,
                            4,
                            5
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
                else{
                    alert("đăng ký thất bại !")
                }
        });
}