const memesBtn = document.getElementById("generateMemes");
const elBody = document.querySelector(".heroimg");
const topText = document.getElementById("t-text");
const bottomText = document.getElementById("b-text");
const topContent = document.querySelector(".top");
const bottomContent = document.querySelector(".bottom")


memesBtn.addEventListener('click', memesData)

function memesData() {
    fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(data => {
            let memesImg = data.data.memes;
            const randomUrl = Math.floor(Math.random() *  memesImg.length)
            let memesUrl = memesImg[randomUrl].url;

    elBody.innerHTML = `<img src=${memesUrl} alt="" >`;     
        })
}

topText.addEventListener('input', function () {
    let userInput1 = topText.value;
    topContent.innerHTML = userInput1;
})

bottomText.addEventListener('input', function () {
    let userInput2 = bottomText.value;
    bottomContent.innerHTML = userInput2;
})