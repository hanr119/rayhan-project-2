
let shadow1 = document.querySelector('.click-shadow1')
let popup1 = document.querySelector('.popup-1')

shadow1.addEventListener('click', () => {

    // this randomizes the location of the popup
    popup1.style.top = document.body.clientHeight * Math.random() + 'px';
    popup1.style.left = document.body.clientWidth * Math.random() + 'px';
    popup1.classList.toggle('active');
})


