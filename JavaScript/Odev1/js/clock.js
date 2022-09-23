let firstname = prompt("İsminizi Giriniz: ");
let myName = document.querySelector("#myName");
myName.innerHTML = ` ${firstname}`;
function showTime() {
    let date = new Date();
    let myClock = document.querySelector("#myClock")
    myClock.innerHTML = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    setTimeout(showTime, 1000);
}
showTime()