const news = document.getElementById("news");
const tag = document.getElementById("tag");
// const contai2 = document.getElementById("contai2");
const tab = document.getElementById("tab");
const tabNews = document.getElementById("tabNews");
const tabTag = document.getElementById("tabTag");
const posi = document.querySelector(`.posi`);

news.classList.add("add-border");
news.children[0].children[1].classList.add("add-color");
news.children[0].children[0].classList.add("add-icon");

tabTag.classList.add("delete");

news.onclick = function () {
    // contai2.classList.remove("delete");

    news.classList.add("add-border");
    news.children[0].children[1].classList.add("add-color");
    news.children[0].children[0].classList.add("add-icon");

    tag.classList.remove("add-border");
    tag.children[0].children[1].classList.remove("add-color");
    tag.children[0].children[0].classList.remove("add-icon");

    tabNews.classList.remove("delete");
    tabTag.classList.add("delete");
    tabNews.style = `display:flex`;
    tabTag.style = `display:none`;
};
tag.onclick = function () {
    // contai2.classList.remove("delete");

    news.classList.remove("add-border");
    news.children[0].children[1].classList.remove("add-color");
    news.children[0].children[0].classList.remove("add-icon");

    tag.classList.add("add-border");
    tag.children[0].children[1].classList.add("add-color");
    tag.children[0].children[0].classList.add("add-icon");

    tabNews.classList.add("delete");
    tabTag.classList.remove("delete");

    tabNews.style = `display:none`;
    tabTag.style = `display:flex`;
};

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
};
BtnHashtag.onclick = function () {
    hashtag.classList.remove("delete");
    follow.classList.add("delete");
    BtnFollow.classList.remove("add-hashtag");
    BtnHashtag.classList.add("add-hashtag");
    BtnFollow.parentElement.classList.remove("add-border-hashtag");
    BtnHashtag.parentElement.classList.add("add-border-hashtag");
};

const updown = document.getElementById("updown");
const down = document.getElementById("down");
const up = document.getElementById("up");
const list = document.getElementById("suggest-updown");

up.classList.add("delete");
list.classList.add("delete");

updown.onclick = function () {
    up.classList.toggle("delete");
    down.classList.toggle("delete");
    list.classList.toggle("delete");
};

modalAll.onclick = function () {
    // exampleModal2.classList.add("delete")
    // exam.classList.add("delete")
    exampleModal2.classList.remove("show");
};
// call api:
// api
const api = `http://localhost:3000`;

// data
let listUsers;
let listUserLogins;
let postFriend = [];
let listFollow = [];
let listFollows = [];

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
    callLoading(userId);
}
async function callLoading(userId) {
    let friendId;
    await fetch(api + `/friend`)
        .then((response) => response.json())
        .then((json) => {
            if (json.length === 1) {
                friendId = json[0].userId;
            }
        });
    getDataUser(friendId, userId);
}
callUserId();

async function getDataUser(id, userId) {
    await getDataPost(id);
    fetch(api + `/User`)
        .then((response) => response.json())
        .then((json) => {
            listUsers = json;
            listUsers.forEach((e) => {
                if (e.id == id) {
                    userFriendInfor = e;
                }
                if (e.id == userId) {
                    userIdInfor = e;
                }
            });
            renderInfor(userFriendInfor, userIdInfor, listUsers);
            renderPost(userFriendInfor);
            renderFlow(id, userIdInfor, userFriendInfor);
        });
}
function getDataPost(id) {
    fetch(api + `/post`)
        .then((response) => response.json())
        .then((json) => {
            json.forEach((e) => {
                if (e.userId == id) {
                    postFriend.push(e);
                }
            });
        });
}
function renderInfor(infor, inforuser, listUsers) {
    // dom :
    const avtE = document.querySelector(`.container-1 .component-1 .avatar`);
    const frofileE = document.querySelector(
        `.container-1 .component-1 .user .username`
    );
    const nameE = document.querySelector(
        `.container-1 .component-1 .info .name h1`
    );
    const peoplefl = document.querySelector(`.peoplefl`);
    const postNumberE = document.querySelector(
        `.container-1 .component-1 .follow .post .number`
    );
    const followE = document.getElementById(`follow`);
    const followerE = document.getElementById(`follower`);
    const avtHE = document.getElementById(`header__icon-end`);

    avtE.innerHTML = `<img src="${infor.avt}" style="height: 150px; width: 150px;border-radius: 50%;" alt="avatar">`;
    frofileE.textContent = infor.username;
    nameE.textContent = infor.name;
    followE.textContent = infor.follow.length;
    followerE.textContent = infor.follower.length;
    avtHE.innerHTML = `<img alt="Ảnh đại diện của ${inforuser.username}" class="h-100 " crossorigin="anonymous" data-testid="user-avatar" draggable="false" src="${inforuser.avt}">`;
    postNumberE.textContent = postFriend.length;
}
function renderPost(userFriendInfor) {
    // data:
    let listPostHTML = [];
    if (postFriend.length == 0) {
        tabNews.style = `display:none`;
        posi.style = `display:block`;
    } else {
        tabNews.style = `display:flex`;
        posi.style = `display:none`;
        postFriend.forEach((e) => {
            let like = JSON.parse(e.like);
            listPostHTML.push(`<div class="col">
            <div class="card card-new">
                <img src="${e.img}" class="card-img-top" alt="${userFriendInfor.username}">
                <div class="card-bacgr"></div>
                <div class="card-icon">
                    <div>
                        <i class="fas fa-heart"></i>
                        <span>${like.length}</span>
                    </div>
                    <div>
                        <i class="fas fa-comment"></i>
                        <span>${e.comment.length}</span>
                    </div>
                </div>
            </div>

        </div>`);
        });
        tabNews.innerHTML = listPostHTML.join("");
    }
}
function renderFlow(id, userIdInfor, userFriendInfor) {

    // Dom:
    const listBtn = document.querySelector(`.list-btn`);


    if (userIdInfor.follow.find((e) => e == id)) {
        listBtn.children[1].setAttribute("onclick", `unFollows(${id},${userIdInfor.id})`)
        listBtn.children[1].innerHTML = `<a class="info-follow" href="#" ">
        <div class="info-follow-icon"></div>
    </a>`;

    } else {
        listBtn.children[1].setAttribute("onclick", `follows(${id},${userIdInfor.id})`)

        listBtn.children[1].style = `background-color:#0095f6`;
        listBtn.children[2].style = `background-color:#0095f6`;
        listBtn.children[2].children[0].style = `color:white`;
        listBtn.children[1].innerHTML = `<a class="info-follow" href="#" style="width: 100px;color: #fff;">Theo dõi</a>`;
    }
}
function unFollows(id, userId) {
    const listBtn = document.querySelector(`.list-btn`);
    console.log(id);
    console.log(userId);
    listBtn.children[1].removeAttribute("onclick")
    listBtn.children[1].setAttribute("onclick", `follows(${id},${userIdInfor.id})`)
    listBtn.children[1].style = `background-color:#0095f6`;
    listBtn.children[2].style = `background-color:#0095f6`;
    listBtn.children[2].children[0].style = `color:white`;
    listBtn.children[1].innerHTML = `<a class="info-follow" href="#" style="width: 100px;color: #fff;">Theo dõi</a>`;
}
function follows(id, userId) {
    const listBtn = document.querySelector(`.list-btn`);
    listBtn.children[1].removeAttribute("onclick")
    listBtn.children[1].style = `background-color:#fff`;
    listBtn.children[2].style = `background-color:#fff`;
    listBtn.children[2].children[0].style = `color:#000`;
    listBtn.children[1].setAttribute("onclick", `unFollows(${id},${userIdInfor.id})`)
    listBtn.children[1].innerHTML = `<a class="info-follow" href="#" ">
        <div class="info-follow-icon"></div>
    </a>`;
    console.log(`a`);
}
