let user_name = 'phofng';
let user;
let avt = document.getElementById('avt');
let avt_head = document.getElementById('avtH');
let username = document.getElementById('username');
let follower = document.getElementById('followeruser');
let followw = document.getElementById('followuser');
let name = document.getElementById('nameuser');


function onload() {
    fetch('http://localhost:3000/user_login/1')
        .then((response) => response.json())
        .then((json) => {
            console.log(avt);
            username.innerHTML = json.username;
            followw.innerHTML = json.follow.length;
            avt.style.backgroundImage = "url('" + json.avt + "')";
            avt.style.backgroundSize = "cover";
            follower.innerHTML = json.follower.length;
            console.log(json.follower);
            name.innerHTML = json.name;
            avt_head.src=json.avt;
        });
}

