// Navbar statica senza Tailwind
function createNavbar(currentPage) {
    const navbarHTML = `
<nav class="navbar">
    <div class="navbar-container">
        <a href="index.html" class="logo">
            <img src="assets/images/logo/logo dudu.png" alt="Logo Cartoleria Dudù" style="height: 40px; width: auto; display: block;" />
            Dudù
        </a>
        <button class="hamburger" id="navbar-hamburger" aria-label="Apri menu">
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
        </button>
        <ul class="nav-menu" id="navbar-menu">
            <li class="nav-item"><a href="index.html">Home</a></li>
            <li class="nav-item"><a href="html/chi-siamo.html">Chi Siamo</a></li>
            <li class="nav-item"><a href="html/novita.html">Novità</a></li>
            <li class="nav-item"><a href="html/servizi.html">Servizi</a></li>
            <li class="nav-item"><a href="html/contatti.html">Contatti</a></li>
        </ul>
        <div class="navbar-social">
            <a href="https://www.facebook.com/cartoleria.dudu/" target="_blank">
                <img src="assets/images/social/facebook.png" alt="Facebook" width="24" height="24" />
            </a>
            <a href="https://www.instagram.com/cartoleriadudu/" target="_blank">
                <img src="assets/images/social/instagram.png" alt="Instagram" width="24" height="24" />
            </a>
            <a href="https://wa.me/393317393337" target="_blank">
                <img src="assets/images/social/whatsapp.png" alt="Whatsapp" width="24" height="24" />
            </a>
        </div>
    </div>
</nav>
    `;
    return navbarHTML;
}

function insertNavbar(currentPage) {
    const navbarHTML = createNavbar(currentPage);
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (navbarPlaceholder) {
        navbarPlaceholder.innerHTML = navbarHTML;
    } else {
        const navbarContainer = document.createElement('div');
        navbarContainer.innerHTML = navbarHTML;
        document.body.insertBefore(navbarContainer.firstElementChild, document.body.firstElementChild);
    }

    // Hamburger menu toggle
    const hamburger = document.getElementById('navbar-hamburger');
    const menu = document.getElementById('navbar-menu');
    if (hamburger && menu) {
        hamburger.addEventListener('click', function () {
            menu.classList.toggle('hidden');
        });
    }

    // Controllo visibilità navbar su desktop
    function checkNavbarVisibility() {
        if (menu) {
            if (window.innerWidth >= 768) {
                menu.classList.remove('hidden');
            } else {
                menu.classList.add('hidden');
            }
        }
    }
    window.addEventListener('resize', checkNavbarVisibility);
    checkNavbarVisibility();
}
