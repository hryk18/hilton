const arrow = document.getElementById('menu-arrow');
const arrowclose = document.getElementById('menu-arrow-close');
const openinfo = document.getElementById('infromation-open');

// ボタンをクリックしたとき
arrow.addEventListener('click', () => {
    openinfo.classList.toggle('open');
});
arrowclose.addEventListener('click', () => {
    openinfo.classList.toggle('open');
});