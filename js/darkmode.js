const headerToggleDarkmode = document.querySelector('.header-toggle-darkmode');
const sidebarToggleDarkmode = document.querySelector('.sidebar-toggle-darkmode');

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    sidebarToggleDarkmode.classList.add('active-toggle');
    headerToggleDarkmode.classList.add('active-toggle');
    document.body.classList.add('dark');
} else {
    sidebarToggleDarkmode.classList.remove('active-toggle');
    headerToggleDarkmode.classList.remove('active-toggle');
    document.body.classList.remove('dark');
}

if (localStorage.getItem('darkMode') == 'dark') {
    sidebarToggleDarkmode.classList.add('active-toggle');
    headerToggleDarkmode.classList.add('active-toggle');
    document.body.classList.add('dark');
} else {
    sidebarToggleDarkmode.classList.remove('active-toggle');
    headerToggleDarkmode.classList.remove('active-toggle');
    document.body.classList.remove('dark');
}

headerToggleDarkmode.addEventListener('click', function() {

    headerToggleDarkmode.classList.toggle('active-toggle');
    sidebarToggleDarkmode.classList.toggle('active-toggle');

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

    const isDark = document.body.classList.toggle('dark');
    
    if (isDark) {
        localStorage.setItem('darkMode', 'dark')
    } else {
        localStorage.setItem('darkMode', 'light')
    }
});