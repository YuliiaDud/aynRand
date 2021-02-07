document.querySelector('.btn-mobile').onclick = function () {
    this.classList.toggle('active');
    document.querySelector('.nav-menu').classList.toggle('active');
}