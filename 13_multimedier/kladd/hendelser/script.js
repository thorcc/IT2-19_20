const divInfo = document.querySelector("#divInfo");

document.onmousemove = function (event){
    console.log(event);
    divInfo.innerHTML = `mouseX = ${event.clientX}, mouseY = ${event.clientY}`
}

