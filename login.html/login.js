let usernameE = document.getElementById('username');
let passwordE = document.getElementById('password');
let signinE = document.getElementById('signin');
let user;


signin.onclick = function () {
   username = usernameE.value;
   password = passwordE.value;
   signin = signinE.value;
   if (username == 0 || password == 0) alert("Hay nhap thong tin day du !");
   else {
      console.log(user);
      user.forEach(element => {
         if ((element.username == username || element.email == username) && element.password == password) {
            active(username);
            console.log(element);
            console.log("login susscess");
         }
      });
   }
}

function onload() {
   axios.get('https://sheetdb.io/api/v1/nh7iq1a8y8cgk')
      .then(response => {
         user = response.data;
      });
}



function active(username) {
   console.log(username);
   axios.patch('https://sheetdb.io/api/v1/58f61be4dda40/id/1?sheet=756220895', {
      "data": { "online": username }
   }).then(response => {
      console.log(response.data);
   });
}