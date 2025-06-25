const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');
const themeSwitch = document.getElementById('theme-switch');
const toggleIcon = document.getElementById('toggle-icon');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const resumeBtns = document.querySelectorAll('.resume-btn');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

// Verifica o tema salvo ou preferência do sistema
const currentTheme = localStorage.getItem('theme') || 
                    (prefersDarkScheme.matches ? 'dark' : 'light');

// Aplica o tema salvo
if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggleIcon.classList.replace('fa-sun', 'fa-moon');
}

// Alterna entre temas
themeSwitch.addEventListener('click', () => {
    let theme;
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        theme = 'light';
        toggleIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        theme = 'dark';
        toggleIcon.classList.replace('fa-sun', 'fa-moon');
    }
    localStorage.setItem('theme', theme);
});

resumeBtns.forEach((btn,idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail');
        
        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');
    });
});