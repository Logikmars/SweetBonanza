const popup = document.getElementById("popup");
const header = document.getElementById("header");
document.addEventListener("DOMContentLoaded", function() {
    console.log("workaet")
    setTimeout(() => {
        popup.style.display = 'flex';
        setTimeout(() => {
            popup.style.opacity = 1;
            popup.style.zIndex = 3;
        }, 100);
    }, 1000);
})

popup.onclick = () =>{
    popup.style.opacity = 0;
    setTimeout(() => {
        popup.style.display = 'none'
        popup.style.zIndex = 1;
        header.style.zIndex = 3;
    }, 700);
}