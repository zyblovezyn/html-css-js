function btnShowDate(id) {
    document.getElementById(id).innerHTML = Date();
};
function btnShowHello() {
    alert("hello");
}

function changeHtml(html,id) {
    var item=document.getElementById(id);
    item.innerHTML=html;
}