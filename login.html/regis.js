let username = document.getElementById('username');
let password = document.getElementById('password');
let subit = document.getElementById('submit');
let email = document.getElementById("email");
let name = document.getElementById('name');








function post(id, username, password, name, email, avt, follow, follower, postID) {
    axios.post('https://sheetdb.io/api/v1/58f61be4dda40', {
        "data": { "id": id, "username": username, "password": password, "name": name, "email": email, "follow": 99, "follower": 99, "POST ": postID }
    }).then(response => {
        console.log(response.data);
    });
}