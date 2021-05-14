// xay dung cac ham xu ly khi bam phim
function  uppress() {
let element = document.getElementById('nobita');
element.style.top = parseInt(element.style.top) - 5 +'px';
}
function downpress() {
    let element = document.getElementById('nobita');
    element.style.top = parseInt(element.style.top) + 5 + 'px';
}
function leftpress() {
    let element = document.getElementById('nobita');
    element.style.left = parseInt(element.style.left) - 5 + 'px';

    function rightpress() {
    let element = document.getElementById('nobita');
        element.style.left = parseInt(ele.style.left) + 5 +  'px; '
    }

}
// xay dung cac ham nhan phim
function moveSelection(evt) {
    switch (evt.keyCode) {
        case 37:
           leftpress();
            break;
        case 39:
            rightpress();
            break;
        case 38:
            upPress();
            break;
        case 40:
            downPress();
            break;
    }
}
// xay dun ham docReeady()
 function  docReady() {
    window.addEventListener('keydown', moveSelection);
 }
 // goi ham doReady()
<dody onload="docReady()">