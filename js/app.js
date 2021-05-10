const news = document.getElementById("news");
const igtv = document.getElementById("igtv");
const save = document.getElementById("save");
const tag = document.getElementById("tag");
const contai2 = document.getElementById("contai2");
const contai3 = document.getElementById("contai3");
const contai4 = document.getElementById("contai4");
const tab = document.getElementById("tab");

news.classList.add("add-border");
news.children[0].children[1].classList.add("add-color");
news.children[0].children[0].classList.add("add-icon");

// news.classList.add("add");
contai3.classList.add("delete");
contai4.classList.add("delete");
// console.log(test);
news.onclick = function(){
    contai2.classList.remove("delete");
    contai3.classList.add("delete");
    contai4.classList.add("delete");

    news.classList.add("add-border");
    news.children[0].children[1].classList.add("add-color");
    news.children[0].children[0].classList.add("add-icon");

    igtv.classList.remove("add-border");
    igtv.children[0].children[1].classList.remove("add-color");
    igtv.children[0].children[0].classList.remove("add-icon");

    save.classList.remove("add-border");
    save.children[0].children[1].classList.remove("add-color");
    save.children[0].children[0].classList.remove("add-icon");

    tag.classList.remove("add-border");
    tag.children[0].children[1].classList.remove("add-color");
    tag.children[0].children[0].classList.remove("add-icon");
}
igtv.onclick = function(){
    contai2.classList.add("delete");
    contai3.classList.remove("delete");
    contai4.classList.add("delete");

    news.classList.remove("add-border");
    news.children[0].children[1].classList.remove("add-color");
    news.children[0].children[0].classList.remove("add-icon");

    igtv.classList.add("add-border");
    igtv.children[0].children[1].classList.add("add-color");
    igtv.children[0].children[0].classList.add("add-icon");

    save.classList.remove("add-border");
    save.children[0].children[1].classList.remove("add-color");
    save.children[0].children[0].classList.remove("add-icon");

    tag.classList.remove("add-border");
    tag.children[0].children[1].classList.remove("add-color");
    tag.children[0].children[0].classList.remove("add-icon");
}
save.onclick = function(){
    contai2.classList.add("delete");
    contai3.classList.add("delete");
    contai4.classList.remove("delete");

    news.classList.remove("add-border");
    news.children[0].children[1].classList.remove("add-color");
    news.children[0].children[0].classList.remove("add-icon");

    igtv.classList.remove("add-border");
    igtv.children[0].children[1].classList.remove("add-color");
    igtv.children[0].children[0].classList.remove("add-icon");

    save.classList.add("add-border");
    save.children[0].children[1].classList.add("add-color");
    save.children[0].children[0].classList.add("add-icon");

    tag.classList.remove("add-border");
    tag.children[0].children[1].classList.remove("add-color");
    tag.children[0].children[0].classList.remove("add-icon");
}
tag.onclick = function(){
    contai2.classList.remove("delete");
    contai3.classList.add("delete");
    contai4.classList.add("delete");

    news.classList.remove("add-border");
    news.children[0].children[1].classList.remove("add-color");
    news.children[0].children[0].classList.remove("add-icon");

    igtv.classList.remove("add-border");
    igtv.children[0].children[1].classList.remove("add-color");
    igtv.children[0].children[0].classList.remove("add-icon");

    save.classList.remove("add-border");
    save.children[0].children[1].classList.remove("add-color");
    save.children[0].children[0].classList.remove("add-icon");

    tag.classList.add("add-border");
    tag.children[0].children[1].classList.add("add-color");
    tag.children[0].children[0].classList.add("add-icon");
}


const BtnFollow = document.getElementById("BtnFollow");
const BtnHashtag = document.getElementById("BtnHashtag");
const follow = document.getElementById("follow");
const hashtag = document.getElementById("hashtag");

hashtag.classList.add("delete");
BtnFollow.classList.add("add-hashtag");
BtnFollow.parentElement.classList.add("add-border-hashtag");


BtnFollow.onclick = function(){
    follow.classList.remove("delete");
    hashtag.classList.add("delete");
    BtnFollow.classList.add("add-hashtag");
    BtnHashtag.classList.remove("add-hashtag");
    BtnFollow.parentElement.classList.add("add-border-hashtag");
    BtnHashtag.parentElement.classList.remove("add-border-hashtag");
}
BtnHashtag.onclick = function(){
    hashtag.classList.remove("delete");
    follow.classList.add("delete");
    BtnFollow.classList.remove("add-hashtag");
    BtnHashtag.classList.add("add-hashtag");
    BtnFollow.parentElement.classList.remove("add-border-hashtag");
    BtnHashtag.parentElement.classList.add("add-border-hashtag");
}


const modalAll = document.getElementById("modalAll");
const exampleModal2 = document.getElementById("exampleModal2");

modalAll.onclick = function() {
    // exampleModal2.classList.add("delete")
    // exam.classList.add("delete")
    exampleModal2.classList.remove("show")
}