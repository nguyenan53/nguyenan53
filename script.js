// script.js
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    const scrollTop = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 400;
        if (scrollTop > sectionTop) {
            section.classList.add('active');
        }
    });
});
let lastScroll = 0;
window.addEventListener('scroll', ()=> {
    const header = document.querySelector('header');
    const currentScroll = window.scrollY
    if(currentScroll > lastScroll )
    {
        header.style.top = '-200px'; // ẩn header khi kéo xún 
            
    }
    else
    {
        header.style.top = '0';   // hiện header khi kéo lên 
    }
    lastScroll = currentScroll;
});
