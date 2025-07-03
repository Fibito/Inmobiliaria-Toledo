document.querySelectorAll('.prop__container-item').forEach(item => {
    item.addEventListener('click', function() {
        const bg = getComputedStyle(item).backgroundImage;
        const url = bg.slice(5, -2);
        const overlay = document.createElement('div');
        overlay.className = 'lightbox-overlay';
        overlay.innerHTML = `<img class="lightbox-img" src="${url}" alt="Imagen ampliada">`;
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) overlay.remove();
        })
        document.body.appendChild(overlay);
    });
});
document.addEventListener('click', function(event) {
    if (
        event.target.classList.contains('header__open-nav-button') ||
        event.target.classList.contains('header__checkbox')
    ) {
        return;
    }
    setTimeout(function() {
        const checkbox = document.getElementById('open-menu');
        const nav = document.querySelector('.header__nav');
        if (
            checkbox.checked &&
            !nav.contains(event.target)
        ) {
            checkbox.checked = false;
        }
    }, 10);
});
document.getElementById('goTopBtn').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});