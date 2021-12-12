const burgerImg = document.getElementById('burgerImg');
const showMenu = () => {
    let iconSrc = document.getElementById('burgerImg').src;
    burgerBox.classList.toggle('menu');
    burgerBox.classList.toggle('transparent');
    // burgerImg.classList.toggle('closeIcon');
    let srcSplitted = iconSrc.split('/');
    let imgName = srcSplitted[srcSplitted.length-1]
    if (imgName === 'icon-hamburger.svg') {
        document.getElementById('burgerImg').src =  './images/icon-close.svg'
    } else {
        document.getElementById('burgerImg').src =  './images/icon-hamburger.svg'
    }
}