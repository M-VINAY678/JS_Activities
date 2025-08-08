document.addEventListener('keypress', function (event) {
    try {
        console.log(event.key);
        let val = event.key.toUpperCase().charCodeAt(0);
        let key = document.querySelector(`.key[data-key="${val}"]`);
        key.classList.add("sound");
        key.classList.add("playing");
        let song = document.querySelector(`audio[data-key="${val}"]`);
        song.currentTime = 0;
        song.play();
        key.addEventListener('transitionend', () => {
            key.classList.remove("sound");
            key.classList.remove("playing");
        })

    } catch (error) {
        console.log("Enter correct character");
    }
});
