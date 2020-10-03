const createHeart = () => {
    const heart = document.createElement('img');
    heart.src = "images/bird3.gif";
    heart.classList.add('heart');
    heart.style.top = Math.random() * 100 + 'vw';
    heart.style.left = "0";

    heart.style.fontSize = "100px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}
setInterval(createHeart, 100);