const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Junior Software Engineer";
    }, 0);
    setTimeout(() => {
        text.textContent = "AI security developer";
    }, 4000);
    setTimeout(() => {
        text.textContent = "PM + 개발자 이찬우(LINKER)입니다.";
    }, 8000); //1s = 1000 milliseconds
}

textLoad();
setInterval(textLoad, 12000);