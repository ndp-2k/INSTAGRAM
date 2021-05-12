let user_name = 'phofng';
let user;
let avt = document.getElementById('avt');
let username = document.getElementById('username');
let post = document.getElementById('post');
let follower = document.getElementById('follower');
let follow = document.getElementById('follow');
let name = document.getElementById('name');


console.log(username);
function onload() {
    axios.get('https://sheetdb.io/api/v1/nh7iq1a8y8cgk')
        .then(response => {
            response.data.forEach(element => {
                console.log(element);

                if (element.username == user_name) {
                    console.log(element.username);
                    username.innerHTML = element.username;
                    post.innerHTML = element.POST;
                    follow.innerHTML = element.follow;
                    follower.innerHTML = element.follower;
                    
                    name.innerHTML = element.name;
                }
            });
        });

}