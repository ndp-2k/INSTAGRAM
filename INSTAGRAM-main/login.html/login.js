let username = document.getElementById('username');
let password = document.getElementById('password');
let signin = document.getElementById('signin');
let user;

signin.onclick = function () {
    fetch('http://localhost:3000/User')
        .then((response) => response.json())
        .then((json) => {
            json.forEach(element => {
                if((element.username==username.value||element.email==username.value)&&element.password==password.value){
                    window.location.replace("http://127.0.0.1:5500/ban%20be/friend.html"); 
                console.log("ok");
                }
            }
            
            );
        });

    
}
