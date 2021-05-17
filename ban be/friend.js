const news = document.getElementById("news");
const tag = document.getElementById("tag");
// const contai2 = document.getElementById("contai2");
const tab = document.getElementById("tab");
const tabNews = document.getElementById("tabNews");
const tabTag = document.getElementById("tabTag");

news.classList.add("add-border");
news.children[0].children[1].classList.add("add-color");
news.children[0].children[0].classList.add("add-icon");

tabTag.classList.add("delete")

news.onclick = function () {
    // contai2.classList.remove("delete");

    news.classList.add("add-border");
    news.children[0].children[1].classList.add("add-color");
    news.children[0].children[0].classList.add("add-icon");

    tag.classList.remove("add-border");
    tag.children[0].children[1].classList.remove("add-color");
    tag.children[0].children[0].classList.remove("add-icon");

    tabNews.classList.remove("delete")
    tabTag.classList.add("delete")
}
tag.onclick = function () {
    // contai2.classList.remove("delete");

    news.classList.remove("add-border");
    news.children[0].children[1].classList.remove("add-color");
    news.children[0].children[0].classList.remove("add-icon");

    tag.classList.add("add-border");
    tag.children[0].children[1].classList.add("add-color");
    tag.children[0].children[0].classList.add("add-icon");

    tabNews.classList.add("delete")
    tabTag.classList.remove("delete")
}


const BtnFollow = document.getElementById("BtnFollow");
const BtnHashtag = document.getElementById("BtnHashtag");
const follow = document.getElementById("follow");
const hashtag = document.getElementById("hashtag");

hashtag.classList.add("delete");
BtnFollow.classList.add("add-hashtag");
BtnFollow.parentElement.classList.add("add-border-hashtag");


BtnFollow.onclick = function () {
    follow.classList.remove("delete");
    hashtag.classList.add("delete");
    BtnFollow.classList.add("add-hashtag");
    BtnHashtag.classList.remove("add-hashtag");
    BtnFollow.parentElement.classList.add("add-border-hashtag");
    BtnHashtag.parentElement.classList.remove("add-border-hashtag");
}
BtnHashtag.onclick = function () {
    hashtag.classList.remove("delete");
    follow.classList.add("delete");
    BtnFollow.classList.remove("add-hashtag");
    BtnHashtag.classList.add("add-hashtag");
    BtnFollow.parentElement.classList.remove("add-border-hashtag");
    BtnHashtag.parentElement.classList.add("add-border-hashtag");
}






const updown = document.getElementById("updown");
const down = document.getElementById("down");
const up = document.getElementById("up");
const list = document.getElementById("suggest-updown")

up.classList.add("delete");
list.classList.add("delete");

updown.onclick = function () {
    up.classList.toggle("delete");
    down.classList.toggle("delete");
    list.classList.toggle("delete");
}

modalAll.onclick = function () {
    // exampleModal2.classList.add("delete")
    // exam.classList.add("delete")
    exampleModal2.classList.remove("show")
}
// call api:
// api
const api = `http://localhost:3000`;

// data
let listUsers;
let listUserLogins;
let postFriend = [];

// logic
async function callUserId() {
    let userId;
    await fetch(api + `/user_login`)
        .then((response) => response.json())
        .then((jsons) => {
            if (jsons.length === 1) {
                userId = jsons[0].userId;
            }
        });
    callLoading(userId)
}
async function callLoading(userId) {
    let friendId;
    await fetch(api + `/friend`)
        .then((response) => response.json())
        .then((json) => {
            if (json.length === 1) {
                friendId = json[0].userId;
            }
        })
    getDataUser(friendId, userId)
}
callUserId()


async function getDataUser(id, userId) {
    await getDataPost(id)
    fetch(api + `/User`)
        .then(response => response.json())
        .then(json => {
            listUsers = json;
            listUsers.forEach((e) => {
                if (e.id == id) {
                    listUserFriend = e
                }
                if (e.id == userId) {
                    userIdInfor = e
                }
            })
            renderInfor(listUserFriend, userIdInfor, listUsers)
        })
}
function getDataPost(id) {
    fetch(api + `/post`)
        .then(response => response.json())
        .then(json => {
            json.forEach((e) => {
                if (e.userId == id) {
                    postFriend.push(e)
                }
            })
        })
}
function renderInfor(infor, inforuser, listUsers) {
    // dom :
    const avtE = document.querySelector(`.container-1 .component-1 .avatar`)
    const frofileE = document.querySelector(`.container-1 .component-1 .user .username`)
    const nameE = document.querySelector(`.container-1 .component-1 .info .name h1`)
    const peoplefl = document.querySelector(`.peoplefl`)
    const postNumberE = document.querySelector(`.container-1 .component-1 .follow .post .number`)
    const followE = document.getElementById(`follow`)
    const followerE = document.getElementById(`follower`)
    const avtHE = document.getElementById(`header__icon-end`)

    avtE.innerHTML = `<img src="${infor.avt}" style="height: 150px; width: 150px;border-radius: 50%;" alt="avatar">`
    frofileE.textContent = infor.username
    nameE.textContent = infor.name
    followE.textContent = infor.follow.length
    followerE.textContent = infor.follower.length
    avtHE.innerHTML = `<img alt="Ảnh đại diện của ${inforuser.username}" class="h-100 " crossorigin="anonymous" data-testid="user-avatar" draggable="false" src="${inforuser.avt}">`
    console.log(postFriend);
    postNumberE.textContent = postFriend.length
}