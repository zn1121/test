var show = "advance";
var advance = document.getElementById("advance");
var advance_p = document.getElementById("advance_p");
var advance_span = document.getElementById("advance_span");

var custom = document.getElementById("custom");
var custome_span = document.getElementById("custom_span");
var custom_p = document.getElementById("custom_p");

var advance_title = document.getElementById("advance_title");
var custom_title = document.getElementById("custom_title");
var advance_t = document.getElementById("advance_t");

if (show == "advance") {
    advance.style.border = "0.2px solid red"
    advance.style.background = "#EFF1F5"
    advance_p.style.color = "rgb(248, 75, 7)"
    advance_span.style.color = "rgb(248, 75, 7)"

    custom.style.border = "#000"
    custom.style.background = "#eee"
    custom_p.style.color = "#000"
    custom_span.style.color = "#000"
    advance_title.style.display = "block"
    custom_title.style.display = "none"
    advance_t.innerHTML = "高级版"
} else {
    custom.style.border = "0.2px solid red"
    custom.style.background = "#EFF1F5"
    custom_p.style.color = "rgb(248, 75, 7)"
    custom_span.style.color = "rgb(248, 75, 7)"

    advance.style.border = "#000"
    advance.style.background = "#EEE"
    advance_p.style.color = "#000"
    advance_span.style.color = "#000"
    advance_title.style.display = "none"
    custom_title.style.display = "block"

    advance_t.innerHTML = "定制版"
}

function advance_check() {
    show = "advance"
    advance.style.border = "0.2px solid red"
    advance.style.background = "#EFF1F5"
    advance_p.style.color = "rgb(248, 75, 7)"
    advance_span.style.color = "rgb(248, 75, 7)"

    custom.style.border = "#000"
    custom.style.background = "#eee"
    custom_p.style.color = "#000"
    custom_span.style.color = "#000"
    advance_title.style.display = "block"
    custom_title.style.display = "none"
    advance_t.innerHTML = "高级版"
}
function custom_check() {
    show = "custom"
    custom.style.border = "0.2px solid red"
    custom.style.background = "#EFF1F5"
    custom_p.style.color = "rgb(248, 75, 7)"
    custom_span.style.color = "rgb(248, 75, 7)"

    advance.style.border = "#000"
    advance.style.background = "#EEE"
    advance_p.style.color = "#000"
    advance_span.style.color = "#000"
    advance_title.style.display = "none"
    custom_title.style.display = "block"

    advance_t.innerHTML = "定制版"
}  
function model(){
    var ele = document.getElementsByClassName("div");
        for (var i = 0; i < ele.length; i++) {
            ele[i].classList.remove("hide");
        }
}
function cancel() {
    var ele = document.getElementsByClassName("div");
    for (var i = 0; i < ele.length; i++) {
        ele[i].classList.add(("hide"));
    }
}