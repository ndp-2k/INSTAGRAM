const api = `https://sheetdb.io/api/v1/6vygm913c6rtj`;

// Dom :
const avtHeader = document.getElementById(`header__icon-end`);
const avtR = document.querySelector(`.main__right-heading .header__span-img`);
const profileR = document.querySelector(`.main__right .main__right-heading-content-profile`);
const userNameR = document.querySelector(`.main__right .main__right-heading-content-name`);
const popupAccAvt = document.querySelector(`.popUpAcc__content-item .header__span-img`);
const popupAccProfile = document.querySelector(`.popUpAcc__content-item .main__right-heading-content-profile`);
const flowR = document.querySelector(`.main__right-content-items`);
const sliderR = document.querySelector(`.main__slider .main__slider-items`);

console.log(sliderR);


async function getUserLogin() {
    let userId;
    await fetch(api + `?sheet=user_login`)
        .then((response) => response.json())
        .then((json) => {
            if (json.length === 1) {
                userId = json[0].id
            }
        });
    getDataUser(userId)
}
async function getDataUser(userId) {
    if (userId !== undefined) {
        await fetch(api)
            .then((response) => response.json())
            .then((json) => {
                let acc = [];
                let sliders = [];

                json.forEach((e) => {
                    if (e.ID === userId) {

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
    console.log(sliderItems.children.length);
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
