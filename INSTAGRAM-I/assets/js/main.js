const headerLoveIconElement = document.getElementById('header__icon-love');
const headerLoveDropdownElement = document.getElementById(`header__love-dropdown`);
const headerLoveDropdownHiddenElement = document.getElementById(`header__love-hidden`);
const headerHomeIconElement = document.getElementById(`header__icon-home`)
const headerIconOutLineElement = document.getElementById(`header__icon-outline`);
const headerIconEnd = document.getElementById(`header__icon-end`);
const headerEndDropDownElement = document.getElementById(`header__dropdown-end`);
const headerEndHiddenElement = document.getElementById(`header__end-hidden`);
const headerInputElement = document.getElementById(`header__input-seach`);
const headerSearchDropDown = document.getElementById(`header__search-dropdown`);
const headerSearchHidden = document.getElementById(`header__search-hidden`);
const headerSearchClose = document.getElementById(`header__icon-close`);
const popUpAccClose = document.getElementById(`popUpAccClose`);
const btnPopUpAcc = document.getElementById(`btn-popUpAcc`);
const popUpAcc = document.getElementById(`popUpAcc`);
const popupLoginClose = document.getElementById(`popupLoginClose`);
const popupLogin = document.getElementById(`popupLogin`);
const popupAccBtnLogin = document.getElementById(`popupAcc-btnLogin`)
const headerLoveIconWhite = `<svg aria-label="Nguồn cấp dữ liệu hoạt động" fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>`;
const headerLoveIconBlack = `<svg aria-label="Nguồn cấp dữ liệu hoạt động" fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>`;
const headerHomeIconWhite = `<svg aria-label="Trang chủ" class="_8-yf5 " fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path d="M45.3 48H30c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2-4.6-4.6-4.6s-4.6 2-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.5-.6 2.1 0l21.5 21.5c.4.4.6 1.1.3 1.6 0 .1-.1.1-.1.2v22.8c.1.8-.6 1.5-1.4 1.5zm-13.8-3h12.3V23.4L24 3.6l-20 20V45h12.3V34.2c0-4.3 3.3-7.6 7.6-7.6s7.6 3.3 7.6 7.6V45z"></path></svg>`;
const headerHomeIconBlack = `<svg aria-label="Trang chủ" class="_8-yf5 " fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z"></path></svg>`;
headerLoveIconElement.onclick = function (e) {
    if (headerLoveIconElement.classList[0] === `icon-action`) {
        headerLoveIconElement.innerHTML = headerLoveIconBlack;
        headerHomeIconElement.innerHTML = headerHomeIconWhite;
        headerLoveDropdownElement.style = `opacity: 1;visibility: inherit;`
        headerLoveIconElement.classList.remove(`icon-action`);
        headerLoveDropdownHiddenElement.classList.add(`header__dropdown-hidden`);
    } else if (headerLoveIconElement.classList[0] == undefined) {
        headerLoveIconElement.innerHTML = headerLoveIconWhite;
        headerHomeIconElement.innerHTML = headerHomeIconBlack;
        headerLoveIconElement.classList.add(`icon-action`);
        console.log(headerLoveIconElement.classList[0]);
        headerLoveDropdownElement.style = `opacity: 0;visibility: hidden`;
        headerLoveDropdownHiddenElement.classList.remove(`header__dropdown-hidden`)
    }
};
headerIconEnd.onclick = () => {
    if (headerIconOutLineElement.classList[0] === `header__icon-outline`) {
        headerIconOutLineElement.classList.remove(`header__icon-outline`);
        headerHomeIconElement.innerHTML = headerHomeIconBlack;
        headerEndDropDownElement.style = `opacity: 0;visibility: hidden`;
        headerEndHiddenElement.classList.remove(`header__dropdown-hidden`);
    } else if (headerIconOutLineElement.classList[0] == undefined) {
        headerIconOutLineElement.classList.add(`header__icon-outline`);
        headerHomeIconElement.innerHTML = headerHomeIconWhite;
        headerEndDropDownElement.style = `opacity: 1;visibility: inherit`;
        headerEndHiddenElement.classList.add(`header__dropdown-hidden`);
    }
};
headerInputElement.onclick = () => {
    if (headerInputElement.classList[1] == undefined) {
        headerInputElement.classList.add(`search-action`);
        headerSearchDropDown.style = `opacity: 1;visibility: inherit`;
        headerSearchHidden.classList.add(`header__dropdown-hidden`)
    } else if (headerInputElement.classList[1] == `search-action`) {
        headerInputElement.classList.remove(`search-action`);
        headerSearchDropDown.style = `opacity: 0;visibility: hidden`;
        headerSearchHidden.classList.remove(`header__dropdown-hidden`)
    }
};
headerLoveDropdownHiddenElement.onclick = () => {
    headerLoveIconElement.innerHTML = headerLoveIconWhite;
    headerHomeIconElement.innerHTML = headerHomeIconBlack;
    headerLoveIconElement.classList.add(`icon-action`);
    console.log(headerLoveIconElement.classList[0]);
    headerLoveDropdownElement.style = `opacity: 0;visibility: hidden`;
    headerLoveDropdownHiddenElement.classList.remove(`header__dropdown-hidden`)
};
headerEndHiddenElement.onclick = () => {
    headerIconOutLineElement.classList.remove(`header__icon-outline`);
    headerHomeIconElement.innerHTML = headerHomeIconBlack;
    headerEndDropDownElement.style = `opacity: 0;visibility: hidden`;
    headerEndHiddenElement.classList.remove(`header__dropdown-hidden`);
};
headerSearchHidden.onclick = () => {
    headerInputElement.classList.remove(`search-action`);
    headerSearchDropDown.style = `opacity: 0;visibility: hidden`;
    headerSearchHidden.classList.remove(`header__dropdown-hidden`)
};
headerSearchClose.onclick = () => {
    headerInputElement.classList.remove(`search-action`);
    headerSearchDropDown.style = `opacity: 0;visibility: hidden`;
    headerSearchHidden.classList.remove(`header__dropdown-hidden`);
    headerInputElement.value = '';
};
popUpAccClose.onclick = (e) => {
    popUpAcc.style = `display: none`
    document.getElementsByTagName(`body`)[0].style = `overflow:auto`

}
btnPopUpAcc.onclick = (e) => {
    popUpAcc.style = `display : flex`;
    document.getElementsByTagName(`body`)[0].style = `overflow:hidden`
}
popUpAcc.onclick = (e) => {
    if (e.target.id === `popUpAcc`) {
        popUpAcc.style = `display: none`
        document.getElementsByTagName(`body`)[0].style = `overflow:auto`
    }
};
popupLoginClose.onclick = (e) => {
    popupLogin.style = `display:none`
    document.getElementsByTagName(`body`)[0].style = `overflow:auto`

}
popupLogin.onclick = (e) => {
    if (e.target.id === `popupLogin`) {
        popupLogin.style = `display:none`
        document.getElementsByTagName(`body`)[0].style = `overflow:auto`

    }
}
popupAccBtnLogin.onclick = (e) => {
    popupLogin.style = `display:flex`
    popUpAcc.style = `display: none`
}


