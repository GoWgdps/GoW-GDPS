const headerToggleDarkmode = document.querySelector('.header-toggle-darkmode');
const sidebarToggleDarkmode = document.querySelector('.sidebar-toggle-darkmode');

const wave1w = document.querySelector('.wave1-white');
const wave2w = document.querySelector('.wave2-white');
const wave3w = document.querySelector('.wave3-white');
const wave1b = document.querySelector('.wave1-black');
const wave2b = document.querySelector('.wave2-black');
const wave3b = document.querySelector('.wave3-black');

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    sidebarToggleDarkmode.classList.add('active-toggle');
    headerToggleDarkmode.classList.add('active-toggle');
    document.body.classList.add('dark');

    wave1w.classList.add('active-wave');
    wave2w.classList.add('active-wave');
    wave3w.classList.add('active-wave');
    wave1b.classList.remove('active-wave');
    wave2b.classList.remove('active-wave');
    wave3b.classList.remove('active-wave');
} else {
    sidebarToggleDarkmode.classList.remove('active-toggle');
    headerToggleDarkmode.classList.remove('active-toggle');
    document.body.classList.remove('dark');

    wave1w.classList.remove('active-wave');
    wave2w.classList.remove('active-wave');
    wave3w.classList.remove('active-wave');
    wave1b.classList.add('active-wave');
    wave2b.classList.add('active-wave');
    wave3b.classList.add('active-wave');
}

if (localStorage.getItem('darkMode') == 'dark') {
    sidebarToggleDarkmode.classList.add('active-toggle');
    headerToggleDarkmode.classList.add('active-toggle');
    document.body.classList.add('dark');
    
    wave1w.classList.add('active-wave');
    wave2w.classList.add('active-wave');
    wave3w.classList.add('active-wave');
    wave1b.classList.remove('active-wave');
    wave2b.classList.remove('active-wave');
    wave3b.classList.remove('active-wave');
} else {
    sidebarToggleDarkmode.classList.remove('active-toggle');
    headerToggleDarkmode.classList.remove('active-toggle');
    document.body.classList.remove('dark');

    wave1w.classList.remove('active-wave');
    wave2w.classList.remove('active-wave');
    wave3w.classList.remove('active-wave');
    wave1b.classList.add('active-wave');
    wave2b.classList.add('active-wave');
    wave3b.classList.add('active-wave');
}

headerToggleDarkmode.addEventListener('click', function() {

    headerToggleDarkmode.classList.toggle('active-toggle');
    sidebarToggleDarkmode.classList.toggle('active-toggle');

    wave1w.classList.toggle('active-wave');
    wave2w.classList.toggle('active-wave');
    wave3w.classList.toggle('active-wave');
    wave1b.classList.toggle('active-wave');
    wave2b.classList.toggle('active-wave');
    wave3b.classList.toggle('active-wave');

    const isDark = document.body.classList.toggle('dark');
    
    if (isDark) {
        localStorage.setItem('darkMode', 'dark')
    } else {
        localStorage.setItem('darkMode', 'light')
    }
});

sidebarToggleDarkmode.addEventListener('click', function() {

    headerToggleDarkmode.classList.toggle('active-toggle');
    sidebarToggleDarkmode.classList.toggle('active-toggle');

    wave1w.classList.toggle('active-wave');
    wave2w.classList.toggle('active-wave');
    wave3w.classList.toggle('active-wave');
    wave1b.classList.toggle('active-wave');
    wave2b.classList.toggle('active-wave');
    wave3b.classList.toggle('active-wave');

    const isDark = document.body.classList.toggle('dark');
    
    if (isDark) {
        localStorage.setItem('darkMode', 'dark')
    } else {
        localStorage.setItem('darkMode', 'light')
    }
});