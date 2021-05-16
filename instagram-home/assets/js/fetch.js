
// icon:
const iconSaveBlack = `<svg aria-label="Gỡ" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 28.9 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1z"></path></svg>`
const iconSaveWhite = `<svg aria-label="Lưu" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg>`
// api:
const api = `http://localhost:3000`;

// Dom :
const avtHeader = document.getElementById(`header__icon-end`);
const avtR = document.querySelector(`.main__right-heading .header__span-img`);
const profileR = document.querySelector(`.main__right .main__right-heading-content-profile`);
const userNameR = document.querySelector(`.main__right .main__right-heading-content-name`);
const popupAccAvt = document.querySelector(`.popUpAcc__content-item .header__span-img`);
const popupAccProfile = document.querySelector(`.popUpAcc__content-item .main__right-heading-content-profile`);
const flowR = document.querySelector(`.main__right-content-items`);
const sliderR = document.querySelector(`.main__slider .main__slider-items`);




async function getUserLogin() {
    let userId;
    await fetch(api + `/user_login`)
        .then((response) => response.json())
        .then((json) => {
            if (json.length === 1) {
                userId = json[0].userId
            }
        });
    getDataUser(userId)
}
function getDataUser(userId) {
    if (userId !== undefined) {
        fetch(api + `/User`)
            .then((response) => response.json())
            .then((json) => {
                getPosts(json, userId)
                let acc = [];
                let sliders = [];
                json.forEach((e) => {
                    if (e.id === userId) {

                        avtHeader.innerHTML = `<img alt="Ảnh đại diện của ${e.username}" class="h-100 " crossorigin="anonymous"
                        data-testid="user-avatar" draggable="false" src="${e.avt}">`;
                        avtR.innerHTML = `<img alt="Ảnh đại diện của ${e.username}" class="h-100 " crossorigin="anonymous"
                        data-testid="user-avatar" draggable="false" src="${e.avt}">`;
                        popupAccAvt.innerHTML = `<img alt="Ảnh đại diện của ${e.username}" class="h-100 " crossorigin="anonymous"
                        data-testid="user-avatar" draggable="false" src="${e.avt}">`;
                        profileR.textContent = e.username;
                        popupAccProfile.textContent = e.username;
                        userNameR.textContent = e.name;
                    } else {
                        acc.push(`<div class="main__right-content-item">
                        <div class="main__right-content-outline"></div>
                        <span class="header__span-img" role="link"
                            style="width: 32px; height: 32px; margin-left: 3px">
                            <img alt="Ảnh đại diện của ${e.username}" class="h-100 " crossorigin="anonymous"
                                data-testid="user-avatar" draggable="false" src="${e.avt}">
                        </span>
                        <div class="main__right-heading-content">
                            <a href="../ban be/friend.html">
                                <div class="main__right-heading-content-profile">${e.username}</div>
                            </a>
                            <div class="main__right-heading-content-name fz12">Theo dõi bạn</div>
                        </div>
                        <button class="main__right-heading-end ">Theo dõi</button>
                    </div>`);
                        sliders.push(`<li class="main__slider-item">
                        <div class="main__right-content-outline"></div>
                        <span class="header__span-img" role="link"
                            style="width: 56px; height: 56px;margin-top: 5px">
                            <img alt="Ảnh đại diện của  ${e.username}" class="h-100 " crossorigin="anonymous"
                                data-testid="user-avatar" draggable="false" src="${e.avt}">
                        </span>
                        <span class="main__slider-profile">
                        ${e.username}
                        </span>
                    </li>`)
                    }
                })
                flowR.innerHTML = acc.join('');
                sliderR.innerHTML = sliders.join('');
                slider();

            });
    };
}
getUserLogin()
// slider:
const sliderItems = document.querySelector(`.main__slider-items`);
const sliderArrowLeft = document.querySelector(`.main__slider-arrow-left`);
const sliderArrowRight = document.querySelector(`.main__slider-arrow-right`);
function slider() {
    let x = 0;
    sliderItems.style = `transform: translateX(${x}px)`;
    let items = sliderItems.children.length;
    numberRuns = Math.floor(items / 4) - 1;
    numberRun = Math.floor(items / 4) - 1;
    sliderArrowLeft.style = `display:none`;
    sliderArrowRight.onclick = () => {
        sliderItems.style = `transform: translateX(${x - 320}px)`;
        sliderArrowLeft.style = `display:block`;
        x -= 320;
        numberRuns -= 1;
        if (numberRuns == 0) {
            sliderArrowRight.style = `display:none`
        }
    }
    sliderArrowLeft.onclick = () => {
        sliderItems.style = `transform: translateX(${x + 320}px)`;
        sliderArrowRight.style = `display:block`;
        x += 320;
        numberRuns += 1;
        if (numberRuns == numberRun) {
            sliderArrowLeft.style = `display:none`
        }
    }
}
// post :
function getPosts(user, userId) {
    const postE = document.querySelector(`.main__posts-container`);
    let listUser = {};
    let likes = {};
    let listComments = {};
    let listSaves = {};
    let listPostSaves = {};
    user.map((e) => {
        listUser[e.id] = e.username;
        listUser[`avt${e.id}`] = e.avt;
    })
    fetch(api + `/post`)
        .then(response => response.json())
        .then(json => {

            let postItems = []
            user.forEach((element => {
                listPostSaves[userId] = element.postsave
            }))
            json.forEach((e) => {
                listComments[e.id] = e.comment;
                listSaves[e.id] = e.save;
                let arrCommentHTML = []
                let commentHTML;
                let saveHTML;
                if (e.save.find(element => element == userId) == undefined) {
                    saveHTML = `<button class="main__post-content-icon" id="main__post-icon-save">${iconSaveWhite}</button>`;
                } else {
                    saveHTML = `<button class="main__post-content-icon action" id="main__post-icon-save">${iconSaveBlack}</button>`
                }
                e.comment.forEach((element) => {
                    arrCommentHTML.push(`<div><a href= "../html/index.html">${listUser[element.userId]}</a> ${element.title}</div>`)
                })
                commentHTML = arrCommentHTML.join("")
                if (e.userId !== userId) {
                    like = JSON.parse(e.like);
                    likes[e.id] = JSON.parse(e.like);
                    if (like.find(element => element == userId) == undefined) {
                        postItems.push(`<article class="main__post-container" value="${e.id}">
                <header class="main__post-heading">
                    <div class="main__right-content-outline" style="top: 12px;left: 14px;"></div>
                    <span class="header__span-img" role="link" style="width: 32px; height: 32px">
                        <img alt="Ảnh đại diện của ${listUser[e.userId]}" class="h-100 " crossorigin="anonymous"
                            data-testid="user-avatar" draggable="false" src="${listUser[`avt${e.userId}`]}">
                    </span>
                    <span class="main__post-profile">
                        <a href="./index.html">${listUser[e.userId]}</a>
                    </span>
                    <div class="main__post-action">
                        <svg aria-label="Tùy chọn khác" class="_8-yf5 " fill="#262626" height="16"
                            viewBox="0 0 48 48" width="16">
                            <circle clip-rule="evenodd" cx="8" cy="24" fill-rule="evenodd" r="4.5"></circle>
                            <circle clip-rule="evenodd" cx="24" cy="24" fill-rule="evenodd" r="4.5"></circle>
                            <circle clip-rule="evenodd" cx="40" cy="24" fill-rule="evenodd" r="4.5"></circle>
                        </svg>
                    </div>
                </header>
                <div class="main__post-images">
                    <img src="${e.img}" alt="image_post">
                    
                </div>
                <div class="main__post-badges" style="opacity:0;">
                    <div class="main__post-badge main__post-badge-action"></div>
                    <div class="main__post-badge"></div>
                    <div class="main__post-badge"></div>
                </div>
                <div class="main__post-content" style="position: relative;z-index: 2;">
                    <section class="main__post-content-icons">
                        <button class="main__post-content-icon" id="main__post-icon-like">
                            <svg aria-label="Thích" class="_8-yf5 " fill="#262626" height="24"
                                viewBox="0 0 48 48" width="24">
                                <path
                                    d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z">
                                </path>
                            </svg>
                        </button>
                        <button class="main__post-content-icon">
                            <svg aria-label="Bình luận" class="_8-yf5 " fill="#262626" height="24"
                                viewBox="0 0 48 48" width="24">
                                <path clip-rule="evenodd"
                                    d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                                    fill-rule="evenodd"></path>
                            </svg>
                        </button>
                        <button class="main__post-content-icon">
                            <svg aria-label="Chia sẻ bài viết" class="_8-yf5 " fill="#262626" height="24"
                                viewBox="0 0 48 48" width="24">
                                <path
                                    d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z">
                                </path>
                            </svg>
                        </button>
                        ${saveHTML}
                    </section>
                    <section class="main__post-content-likes">
                        <span class="main__post-content-profile">
                            <a href="../ban be/friend.html">${listUser[like[0]]}</a>
                        </span>
                        và
                        <a href="./index.html">những người khác</a>
                        đã thích
                    </section>
                    <div class="main__post-content-title">
                        <span>
                            <a href="./index.html">${listUser[e.userId]}</a>
                            ${e.title}
                        </span>
                    </div>
                    <div class= "main__post-content-title" style="display: flex;flex-direction: column;">${commentHTML}</div>
                    <div class="main__post-content-time">
                        ${e.time}
                    </div>
                </div>
                <section class="main__post-footer">
                    <form action="" class="form-group">
                        <button class="btn-smile">
                            <svg aria-label="Biểu tượng cảm xúc"  fill="#262626" height="24"
                                viewBox="0 0 48 48" width="24">
                                <path
                                    d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z">
                                </path>
                                <path
                                    d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z">
                                </path>
                            </svg>
                        </button>
                        <textarea spellcheck="false" aria-label="Thêm bình luận…" placeholder="Thêm bình luận…" class="Ypffh" autocomplete="off" autocorrect="off" style="height: 18px !important;"></textarea>
                        <a type="submit">Đăng</a>
                    </form>
                </section>
            </article>`)
                    } else {
                        postItems.push(`<article class="main__post-container" value="${e.id}">
                <header class="main__post-heading">
                    <div class="main__right-content-outline" style="top: 12px;left: 14px;"></div>
                    <span class="header__span-img" role="link" style="width: 32px; height: 32px">
                        <img alt="Ảnh đại diện của ${listUser[e.userId]}" class="h-100 " crossorigin="anonymous"
                            data-testid="user-avatar" draggable="false" src="${listUser[`avt${e.userId}`]}">
                    </span>
                    <span class="main__post-profile">
                        <a href="./index.html">${listUser[e.userId]}</a>
                    </span>
                    <div class="main__post-action">
                        <svg aria-label="Tùy chọn khác" class="_8-yf5 " fill="#262626" height="16"
                            viewBox="0 0 48 48" width="16">
                            <circle clip-rule="evenodd" cx="8" cy="24" fill-rule="evenodd" r="4.5"></circle>
                            <circle clip-rule="evenodd" cx="24" cy="24" fill-rule="evenodd" r="4.5"></circle>
                            <circle clip-rule="evenodd" cx="40" cy="24" fill-rule="evenodd" r="4.5"></circle>
                        </svg>
                    </div>
                </header>
                <div class="main__post-images">
                    <img src="${e.img}" alt="image_post">
                    
                </div>
                <div class="main__post-badges" style="opacity:0;">
                    <div class="main__post-badge main__post-badge-action"></div>
                    <div class="main__post-badge"></div>
                    <div class="main__post-badge"></div>
                </div>
                <div class="main__post-content" style="position: relative;z-index: 2;">
                    <section class="main__post-content-icons">
                    <button class="main__post-content-icon action" id="main__post-icon-like"><svg aria-label="Bỏ thích" class="_8-yf5 " fill="#ed4956" height="24" viewBox="0 0 48 48" width="24"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg></button>
                        <button class="main__post-content-icon">
                            <svg aria-label="Bình luận" class="_8-yf5 " fill="#262626" height="24"
                                viewBox="0 0 48 48" width="24">
                                <path clip-rule="evenodd"
                                    d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                                    fill-rule="evenodd"></path>
                            </svg>
                        </button>
                        <button class="main__post-content-icon">
                            <svg aria-label="Chia sẻ bài viết" class="_8-yf5 " fill="#262626" height="24"
                                viewBox="0 0 48 48" width="24">
                                <path
                                    d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z">
                                </path>
                            </svg>
                        </button>
                        ${saveHTML}

                    </section>
                    <section class="main__post-content-likes">
                        <span class="main__post-content-profile">
                            <a href="../html/index.html">Bạn</a>
                        </span>
                        và
                        <a href="./index.html">những người khác</a>
                        đã thích
                    </section>
                    <div class="main__post-content-title">
                        <span>
                            <a href="./index.html">${listUser[e.userId]}</a>
                            ${e.title}
                        </span>
                    </div>
                    <div class= "main__post-content-title" style="display: flex;flex-direction: column;">${commentHTML}</div>
                    <div class="main__post-content-time">
                        ${e.time}
                    </div>
                </div>
                <section class="main__post-footer">
                    <form action="" class="form-group">
                        <button class="btn-smile">
                            <svg aria-label="Biểu tượng cảm xúc"  fill="#262626" height="24"
                                viewBox="0 0 48 48" width="24">
                                <path
                                    d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z">
                                </path>
                                <path
                                    d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z">
                                </path>
                            </svg>
                        </button>
                        <textarea spellcheck="false" aria-label="Thêm bình luận…" placeholder="Thêm bình luận…" class="Ypffh" autocomplete="off" autocorrect="off" style="height: 18px !important;"></textarea>
                        <a type="submit">Đăng</a>
                    </form>
                </section>
            </article>`)
                    }
                }
            })
            postE.innerHTML = postItems.join("");
            interaction(likes, userId, listUser, listComments, listSaves, listPostSaves);
            console.log(listSaves);
            console.log(listPostSaves);

        })

}
function interaction(likes, userId, listUser, listComments, listSaves, listPostSaves) {
    const postContainer = document.querySelector(`.main__posts-container`);
    let valuePost;

    postContainer.onclick = (e) => {

        let a = e.target.parentElement;
        while (e.target.parentElement) {

            comments(e, a, userId, listUser, listComments);

            // đổi màu nút like
            // từ trắng thành đỏ
            if (a.classList[1] == undefined && a.id == `main__post-icon-like`) {
                a.classList.add(`action`)
                a.innerHTML = `<svg aria-label="Bỏ thích" class="_8-yf5 " fill="#ed4956" height="24" viewBox="0 0 48 48" width="24"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>`
                while (a.parentElement) {
                    if (a.classList[0] == `main__post-container`) {
                        valuePost = a.attributes[1].value;
                        likes[valuePost].unshift(userId)
                        fetchPost(valuePost, likes[valuePost])
                        break
                    }
                    a = a.parentElement;
                }

                break
            }
            // từ đỏ thành trắng
            else if (a.classList[1] == `action` && a.id == `main__post-icon-like`) {
                a.classList.remove(`action`)
                a.innerHTML = `<svg aria-label="Thích" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>`
                while (a.parentElement) {
                    if (a.classList[0] == `main__post-container`) {
                        valuePost = a.attributes[1].value;
                        likes[valuePost].forEach((e, i) => {
                            if (e == userId) {
                                b = i
                            }
                        });
                        likes[valuePost].splice(b, 1);


                        fetchPost(valuePost, likes[valuePost])
                        break
                    }
                    a = a.parentElement;
                }

                break
            }
            // đổi màu nút save
            // từ trắng thành đen
            if (a.classList[1] == undefined && a.id == `main__post-icon-save`) {
                a.classList.add(`action`)
                a.innerHTML = iconSaveBlack;
                while (a.parentElement) {
                    if (a.classList[0] == `main__post-container`) {
                        valuePost = a.attributes[1].value;
                        listSaves[valuePost].unshift(userId);
                        listPostSaves[userId].unshift(Number(valuePost));
                        // console.log(listPostSaves);
                        fetchSaves(listSaves[valuePost], valuePost);
                        fetchPostSaves(listPostSaves[userId], userId);
                        break
                    }
                    a = a.parentElement;
                }
                break
            }
            // từ đen thành trắng
            else if (a.classList[1] == `action` && a.id == `main__post-icon-save`) {
                a.classList.remove(`action`)
                a.innerHTML = iconSaveWhite;
                while (a.parentElement) {
                    if (a.classList[0] == `main__post-container`) {
                        valuePost = a.attributes[1].value;
                        listSaves[valuePost].forEach((e, i) => {
                            if (e == userId) {
                                b = i
                            }
                        });
                        listPostSaves[userId].forEach((e, i) => {
                            if (e == valuePost) {
                                c = i
                            }
                        });
                        listSaves[valuePost].splice(b, 1);
                        listPostSaves[userId].splice(c, 1);
                        fetchSaves(listSaves[valuePost], valuePost);
                        fetchPostSaves(listPostSaves[userId], userId);
                        break
                    }
                    a = a.parentElement;
                }
                break
            }
            if (a.classList[0] == `main__post-container`) {
                console.log(`a1`);
                break
            }
            a = a.parentElement;
        }
    }
}



// đoạn này a
function fetchPost(valuePost, likePost) {
    fetch(api + `/post/${valuePost}`, {
        method: 'PATCH',
        body: JSON.stringify({
            "like": JSON.stringify(likePost),
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}







function comments(e, a, userId, listUser, listComments) {
    let comment;

    if (e.target.type == `submit`) {
        if (e.target.parentElement[1].tagName == `TEXTAREA`) {
            comment = e.target.parentElement[1].value;
        }

        if (a.classList[0] == `main__post-container`) {
            if (comment !== '') {
                a.children[3].children[3].appendChild(document.createElement('div')).innerHTML = `<a href= "../html/index.html">${listUser[userId]}</a> ${comment}`
                listComments[a.attributes[1].value].push({
                    userId: userId,
                    title: comment
                })
                e.target.parentElement[1].value = '';
                fetchComment(a.attributes[1].value, listComments[a.attributes[1].value])
            }

        }
    }
}
function fetchComment(valuePost, valueComment) {
    fetch(api + `/post/${valuePost}`, {
        method: 'PATCH',
        body: JSON.stringify({
            "comment": valueComment,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}
function fetchSaves(data, id) {
    fetch(api + `/post/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            "save": data,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));

}
function fetchPostSaves(data, id) {
    fetch(api + `/User/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            "postsave": data,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));

}






