// ============================================
// EFCAC — CENTRALIZED MENU + FOOTER SYSTEM
// ============================================
// ✅ EDIT ONLY THIS FILE to change menu/footer
// Auto-injects into every page on DOMContentLoaded
// ============================================

// ---- MENU STRUCTURE ----
const MENU_CONFIG = [
    { type: 'link', label: 'TOP', href: 'index.html', page: 'index' },
    {
        type: 'dropdown',
        label: 'Earn & Multiply',
        items: [
            { label: 'Lux Sites',          href: 'lux-sites.html',          page: 'lux-sites' },
            { label: 'Pick Sites',         href: 'pick-sites.html',         page: 'pick-sites' },
            { label: 'FaucetMatrix Sites', href: 'faucetmatrix-sites.html', page: 'faucetmatrix-sites' },
            { label: 'Kong Sites',         href: 'kong-sites.html',         page: 'kong-sites' }
        ]
    },
    { type: 'link', label: 'Earn Crypto',          href: 'earn-crypto.html',     page: 'earn-crypto' },
    { type: 'link', label: 'Passive Income',       href: 'passive-income.html', page: 'passive-income' },
    { type: 'link', label: 'Play & Earn',          href: 'play-earn.html',      page: 'play-earn' },
    { type: 'link', label: 'Earn By Social Media', href: 'earn-social.html',    page: 'earn-social' }
    // 👇 ADD NEW LINKS HERE 👇
    // { type: 'link', label: 'Free Spins',    href: 'free-spins.html',    page: 'free-spins' },
];

// ---- FOOTER LINKS ----
const FOOTER_CONFIG = {
    earnMultiply: [
        { label: 'Lux Sites',          href: 'lux-sites.html' },
        { label: 'Pick Sites',         href: 'pick-sites.html' },
        { label: 'FaucetMatrix Sites', href: 'faucetmatrix-sites.html' },
        { label: 'Kong Sites',         href: 'kong-sites.html' }
    ],
    quickLinks: [
        { label: 'Top Earning',          href: 'index.html' },
        { label: 'Earn Crypto',          href: 'earn-crypto.html' },
        { label: 'Passive Income',       href: 'passive-income.html' },
        { label: 'Play & Earn',          href: 'play-earn.html' },
        { label: 'Earn By Social Media', href: 'earn-social.html' }
    ],
    support: [
        { label: 'About Us',         href: 'about.html' },
        { label: 'Contact',          href: 'contact.html' },
        { label: 'Privacy Policy',   href: 'pr.html' },
        { label: 'Terms of Service', href: 'terms.html' },
        { label: 'Disclaimer',       href: 'disclaimer.html' }
    ],
    legal: [
        { label: 'Privacy',    href: 'pr.html' },
        { label: 'Terms',      href: 'terms.html' },
        { label: 'Disclaimer', href: 'disclaimer.html' },
        { label: 'Home',       href: 'index.html' }
    ]
};

// ============================================
// HELPERS
// ============================================
function getCurrentPageKey() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    const file = path.replace('.html', '') || 'index';
    return (file === '' || file === 'index') ? 'index' : file;
}

function buildMenuHTML() {
    const currentPage = getCurrentPageKey();
    let html = '<ul class="nav-links" id="navLinks">';

    MENU_CONFIG.forEach(item => {
        if (item.type === 'link') {
            const active = item.page === currentPage ? ' class="active"' : '';
            html += `<li><a href="${item.href}"${active}>${item.label}</a></li>`;
        } else if (item.type === 'dropdown') {
            // Check if any child is active
            const childActive = item.items.some(sub => sub.page === currentPage);
            const parentActive = childActive ? ' class="active"' : '';
            html += `<li class="dropdown">
                <a href="#" data-dropdown${parentActive}>${item.label}</a>
                <ul class="dropdown-menu">`;
            item.items.forEach(sub => {
                const subActive = sub.page === currentPage ? ' class="active"' : '';
                html += `<li><a href="${sub.href}"${subActive}>${sub.label}</a></li>`;
            });
            html += `</ul></li>`;
        }
    });

    html += '</ul>';
    return html;
}

function buildFooterColumn(title, links) {
    let html = `<div class="footer-col"><h4>${title}</h4><ul>`;
    links.forEach(link => {
        html += `<li><a href="${link.href}">→ ${link.label}</a></li>`;
    });
    html += `</ul></div>`;
    return html;
}

// ============================================
// INJECT MENU
// ============================================
function injectMenu() {
    const nav = document.querySelector('.main-nav');
    if (!nav) return;

    // Add hamburger button + nav links
    nav.innerHTML = `
        <button class="menu-toggle" id="menuToggle" aria-label="Toggle menu" aria-expanded="false">
            <span></span><span></span><span></span>
        </button>
        ${buildMenuHTML()}
    `;
}

// ============================================
// INJECT FOOTER
// ============================================
function injectFooter() {
    if (document.querySelector('.site-footer')) return;

    const footerHTML = `
        <footer class="site-footer">
            <div class="footer-container">
                <div class="footer-brand">
                    <h3 class="footer-logo-wrap">
                        <svg class="footer-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" aria-hidden="true">
                            <defs>
                                <radialGradient id="footCoinG" cx="35%" cy="30%">
                                    <stop offset="0%" stop-color="#FFE9A8"/>
                                    <stop offset="60%" stop-color="#F5B942"/>
                                    <stop offset="100%" stop-color="#C98A1E"/>
                                </radialGradient>
                                <linearGradient id="footAccG" x1="0" y1="0" x2="1" y2="1">
                                    <stop offset="0%" stop-color="#FF6B2C"/>
                                    <stop offset="100%" stop-color="#E64A00"/>
                                </linearGradient>
                            </defs>
                            <ellipse cx="100" cy="155" rx="80" ry="28" fill="#A5650E"/>
                            <ellipse cx="100" cy="148" rx="80" ry="28" fill="url(#footCoinG)"/>
                            <ellipse cx="100" cy="140" rx="80" ry="28" fill="#A5650E"/>
                            <ellipse cx="100" cy="133" rx="80" ry="28" fill="url(#footCoinG)"/>
                            <circle cx="100" cy="85" r="65" fill="url(#footCoinG)"/>
                            <circle cx="100" cy="85" r="65" fill="none" stroke="#8B5708" stroke-width="2" opacity="0.4"/>
                            <circle cx="100" cy="85" r="52" fill="none" stroke="#8B5708" stroke-width="2" opacity="0.5"/>
                            <text x="100" y="112" font-family="Arial Black, sans-serif" font-size="78" text-anchor="middle" fill="#5B3600" font-weight="900">$</text>
                            <circle cx="160" cy="45" r="22" fill="url(#footAccG)"/>
                            <path d="M152 45 L158 51 L170 39" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>EFCAC</span>
                    </h3>
                    <p>Explore the best ways to earn free cash &amp; crypto. Find trusted earning platforms, faucets, apps and offers — carefully reviewed and checked by us.</p>
                </div>
                ${buildFooterColumn('Earn &amp; Multiply', FOOTER_CONFIG.earnMultiply)}
                ${buildFooterColumn('Quick Links', FOOTER_CONFIG.quickLinks)}
                ${buildFooterColumn('Support', FOOTER_CONFIG.support)}
            </div>
            <div class="footer-bottom">
                <div>© 2026 EFCAC. All rights reserved.</div>
                <div class="footer-legal">
                    ${FOOTER_CONFIG.legal.map(l => `<a href="${l.href}">${l.label}</a>`).join('')}
                </div>
            </div>
        </footer>
    `;

    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

// ============================================
// MENU BEHAVIOR (dropdown + mobile toggle)
// ============================================
function initMenuBehavior() {
    // ---- MOBILE HAMBURGER TOGGLE ----
    const toggle = document.getElementById('menuToggle');
    const nav = document.querySelector('.main-nav');

    if (toggle && nav) {
        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            nav.classList.toggle('open');
            const isOpen = nav.classList.contains('open');
            toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        // Close mobile menu when a link is clicked
        nav.querySelectorAll('.nav-links > li > a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 1000) {
                    nav.classList.remove('open');
                    toggle.setAttribute('aria-expanded', 'false');
                }
            });
        });

        // Close mobile menu on outside click
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 1000 && nav.classList.contains('open') && !nav.contains(e.target)) {
                nav.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // ---- DROPDOWN (desktop hover + click) ----
    const dropdown = document.querySelector('.dropdown');
    const dropdownToggle = document.querySelector('[data-dropdown]');

    if (dropdown && dropdownToggle) {
        let hoverTimer = null;

        dropdown.addEventListener('mouseenter', () => {
            if (window.innerWidth > 1000) {
                clearTimeout(hoverTimer);
                dropdown.classList.add('open');
            }
        });

        dropdown.addEventListener('mouseleave', () => {
            if (window.innerWidth > 1000) {
                hoverTimer = setTimeout(() => {
                    dropdown.classList.remove('open');
                }, 150);
            }
        });

        dropdownToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            // On mobile, the parent link toggles the submenu
            if (window.innerWidth <= 1000) {
                dropdown.classList.toggle('open');
            } else {
                dropdown.classList.toggle('open');
            }
        });

        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('open');
            }
        });

        // Auto-close dropdown when a child link is clicked
        dropdown.querySelectorAll('.dropdown-menu a').forEach(link => {
            link.addEventListener('click', () => {
                dropdown.classList.remove('open');
                if (window.innerWidth <= 1000 && nav) {
                    nav.classList.remove('open');
                    if (toggle) toggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }

    // Close mobile menu on window resize to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1000 && nav) {
            nav.classList.remove('open');
            if (toggle) toggle.setAttribute('aria-expanded', 'false');
        }
    });
}

// ============================================
// AUTO-INIT — runs on every page
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    injectMenu();
    injectFooter();
    initMenuBehavior();
});