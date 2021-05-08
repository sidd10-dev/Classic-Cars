const menu = document.querySelector('.menu');
menu.addEventListener('click',() => {
    (document.querySelectorAll('.target')).forEach((item) => {
        item.classList.toggle('change');
    })
})

document.querySelectorAll('.wrapper').forEach((item) => {
    item.addEventListener('click', () => {
        (document.querySelectorAll('.target')).forEach((item) => {
            item.classList.remove('change');
        })
    })
        
})

const vid = document.querySelectorAll('.vid');
vid.forEach((item) => {
    item.pause();
    item.addEventListener('mouseover',() => {
        item.play();
        item.style.opacity = '1';
    })
})
vid.forEach((item) => {
    item.addEventListener('mouseout',() => {
        item.pause();
        item.style.opacity = '0.9';
    })
})