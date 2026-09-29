// ============================================
// EXMA.IO - UNIVERSAL SCRIPT (works on ALL pages)
// Includes: data, page config, dropdown fix, footer
// ============================================

// ---- HOME PAGE DATA ----
const homeSitesData = [
  { name: "Earnbitmoon", category: "Faucet & PTC", description: "🚀 1,300,000+ Users | 💰 $785K+ Paid Out", bonus: "Claim Faucet Every 5 Minutes", features: ["Join $2,000 Offerwall Contest!", "PTC ads - Offers - SLinks - Tasks"], link: "https://earnbitmoon.club/start/423418.html", withdrawMethod: "FaucetPay", withdrawLink: "https://faucetpay.io/?r=9738732", logo: "images/Earnbitmoon.png.webp", badges: ["TOP", "HOT"] },
  { name: "FireFaucet", category: "Faucet & PTC", description: "🎉 celebrating its 8th anniversary!", bonus: "+20% Bonus - Offers & Surveys!", features: ["Join $3,000+ Offerwall Contest!", "Claim Faucet every 30 minute"], link: "https://firefaucet.win/ref/1026511", withdrawMethod: "FaucetPay", withdrawLink: "https://faucetpay.io/?r=9738732", logo: "https://placehold.co/47x47/FF4D00/fff?text=FF", badges: ["TOP", "Trusted"] },
  { name: "FomoEarn", category: "Watch & Earn", description: "🏆 Automatic earning with APP!", bonus: "Earn money by watching videos!", features: ["Minimum withdraw - just $0.01!", "3 Referral Levels: +50%+10% +1%"], link: "https://fomoearn.com/r/uYVwaQjj", withdrawMethod: "FaucetPay", withdrawLink: "https://faucetpay.io/?r=9738732", logo: "https://placehold.co/47x47/4CAF50/fff?text=FE", badges: ["NEW", "TOP"] },
  { name: "LuckyWatch", category: "Watch & Earn", description: "🏆 Referral Contest Prize pool: $1,200", bonus: "Earn money by watching videos!", features: ["Boost your income up to + 50%", "Minimum withdraw - just $0.10!"], link: "https://luckywatch.pro/u/000wt", withdrawMethod: "FaucetPay", withdrawLink: "https://faucetpay.io/?r=9738732", logo: "https://placehold.co/47x47/9C27B0/fff?text=LW", badges: ["Boost", "Contest"] },
  { name: "TimeBucks", category: "PTC & TASKS", description: "💰 Earn by completing simple tasks!", bonus: "Sign Up & Verify Bonus up to $1", features: ["PTC ads - Offerwalls - Games", "Daily Streak - Up to $11 per day!"], link: "https://timebucks.com/?refID=226610913", withdrawMethod: "MEXC", withdrawLink: "https://www.mexc.com/?shareCode=mexc-EXMA", logo: "https://placehold.co/47x47/2196F3/fff?text=TB", badges: ["Bonus", "Contest"] },
  { name: "EarnApp", category: "Offers & Sharing", description: "💸 Easy Profit! FREE Passive income!", bonus: "Start the app, let it run & earn!", features: ["Complete tasks & earn rewards", "Earn $150+ from a single game"], link: "https://earnapp.com/i/KDKmvWkk", withdrawMethod: "PayPal", withdrawLink: "https://www.paypal.com/", logo: "https://placehold.co/47x47/FF9800/fff?text=EA", badges: ["TOP", "EASY"] },
  { name: "RewardJoy", category: "ptc & Offers", description: "🏆 3 Contests - $12,000 TOTAL Prizes", bonus: "Get up to $150 per offer - join!", features: ["Earn up to $0.03 per PTC ad view", "LVL up & boost reward up to 15%"], link: "https://www.rewardjoy.com/?r=2bh24NGaVQND", withdrawMethod: "MEXC", withdrawLink: "https://www.mexc.com/?shareCode=mexc-EXMA", logo: "https://placehold.co/47x47/E91E63/fff?text=RJ", badges: ["HOT", "Contest"] },
  { name: "Honeygain", category: "Bandwidth Sharing", description: "🐝 Simple online money earning app!", bonus: "Get Free $3 welcome gift now!", features: ["Earn more with desktop devices", "Lucky Pot - Win up to $10 daily!"], link: "https://r.honeygain.me/RINAL912", withdrawMethod: "PayPal", withdrawLink: "https://www.paypal.com/", logo: "https://placehold.co/47x47/FFC422/000?text=HG", badges: ["GIFT", "EASY"] },
  { name: "BCHgames", category: "Faucet & Games", description: "🏆 Claim free BCH - play and win!", bonus: "Claim faucet every 5 minutes", features: ["Level up and get a rewards", "Giveaway every 30 minutes"], link: "https://bch.games/play/EXMA", withdrawMethod: "MEXC", withdrawLink: "https://www.mexc.com/?shareCode=mexc-EXMA", logo: "https://placehold.co/47x47/8BC34A/fff?text=BCH", badges: ["Contest", "Fast Pay"] },
  { name: "Nuts", category: "Faucet & Games", description: "🏆 Claim free solana - play and win!", bonus: "Claim faucet every 3 minutes", features: ['Claim the faucet in the "Perks"', "Earn rewards by leveling up!"], link: "https://nuts.gg/play/SCALEVANCE", withdrawMethod: "MEXC", withdrawLink: "https://www.mexc.com/?shareCode=mexc-EXMA", logo: "https://placehold.co/47x47/00BCD4/fff?text=Nuts", badges: ["Contest", "Fast Pay"] },
  { name: "TrustDice", category: "Faucet & Games", description: "🔥 Claim the highest faucet rewards", bonus: "Claim $0.04 in TRX every 6 hours", features: ['Find faucet in "Bonus" section', "Welcome Bonus - 500% + 100 FS"], link: "https://trustdice.win/faucet?ref=u_biscore", withdrawMethod: "MEXC", withdrawLink: "https://www.mexc.com/?shareCode=mexc-EXMA", logo: "https://placehold.co/47x47/673AB7/fff?text=TD", badges: ["Bonus", "Contest"] }
];

// ---- LUX SITES DATA ----
const luxSitesData = [
  { name: "BnbLux", category: "Faucet & Games", description: "💸 Get paid for surveys and offers!", bonus: "Claim up to $25 per faucet claim!", features: ["Verify Email & Get 10 Bonus Rolls", "Increase your level & earn more"], link: "https://bnblux.io/?ref=ExmaRS", withdrawMethod: "MEXC", withdrawLink: "https://www.mexc.com/?shareCode=mexc-EXMA", logo: "https://placehold.co/47x47/FFC422/000?text=BnB", badges: ["NEW", "Bonus"] },
  { name: "TronLux", category: "Faucet & Games", description: "💸 Get paid for surveys and offers!", bonus: "Claim up to $25 per faucet claim!", features: ["Verify Email & Get 10 Bonus Rolls", "Increase your level & earn more"], link: "https://tronlux.io/?ref=ExmaRS", withdrawMethod: "MEXC", withdrawLink: "https://www.mexc.com/?shareCode=mexc-EXMA", logo: "https://placehold.co/47x47/FF4D00/fff?text=TRX", badges: ["Bonus", "Popular"] },
  { name: "BtcLux", category: "Faucet & Games", description: "💸 Get paid for surveys and offers!", bonus: "Claim up to $25 per faucet claim!", features: ["Verify Email & Get 10 Bonus Rolls", "Increase your level & earn more"], link: "https://btclux.io/?ref=ExmaRS", withdrawMethod: "MEXC", withdrawLink: "https://www.mexc.com/?shareCode=mexc-EXMA", logo: "https://placehold.co/47x47/F7931A/fff?text=BTC", badges: ["Bonus", "Popular"] },
  { name: "UsdtLux", category: "Faucet & Games", description: "💸 Get paid for surveys and offers!", bonus: "Claim up to $25 per faucet claim!", features: ["Verify Email & Get 10 Bonus Rolls", "Increase your level & earn more"], link: "https://usdtlux.io/?ref=ExmaRS", withdrawMethod: "MEXC", withdrawLink: "https://www.mexc.com/?shareCode=mexc-EXMA", logo: "https://placehold.co/47x47/26A17B/fff?text=USDT", badges: ["Bonus", "Popular"] },
  { name: "ShibaLux", category: "Faucet & Games", description: "💸 Get paid for surveys and offers!", bonus: "Claim up to $25 per faucet claim!", features: ["Verify Email & Get 10 Bonus Rolls", "Increase your level & earn more"], link: "https://shibalux.io/?ref=ExmaRS", withdrawMethod: "MEXC", withdrawLink: "https://www.mexc.com/?shareCode=mexc-EXMA", logo: "https://placehold.co/47x47/FFA500/fff?text=SHIB", badges: ["Bonus", "Contest"] },
  { name: "PepeLux", category: "Faucet & Games", description: "💸 Get paid for surveys and offers!", bonus: "Claim up to $25 per faucet claim!", features: ["Verify Email & Get 10 Bonus Rolls", "Increase your level & earn more"], link: "https://pepelux.io/?ref=ExmaRS", withdrawMethod: "MEXC", withdrawLink: "https://www.mexc.com/?shareCode=mexc-EXMA", logo: "https://placehold.co/47x47/4CAF50/fff?text=PEPE", badges: ["Bonus", "Contest"] },
  { name: "XrpLux", category: "Faucet & Games", description: "💸 Get paid for surveys and offers!", bonus: "Claim up to $25 per faucet claim!", features: ["Verify Email & Get 10 Bonus Rolls", "Increase your level & earn more"], link: "https://xrplux.io/?ref=ExmaRS", withdrawMethod: "MEXC", withdrawLink: "https://www.mexc.com/?shareCode=mexc-EXMA", logo: "https://placehold.co/47x47/23292F/fff?text=XRP", badges: ["Bonus"] }
];

// ---- PICK SITES DATA ----
const pickSitesData = [
  { name: "Bnbpick", category: "Faucet & Games", description: "💸 Get paid for surveys and offers!", bonus: "Claim up to 0.225 BNB every hour", features: ["Verify Email & Get 10 Bonus Rolls", "Multiply rewards up to 4,850x"], link: "https://bnbpick.io/?ref=ExmaRS", withdrawMethod: "Pick Sites", withdrawLink: "#", logo: "https://placehold.co/47x47/F0B90B/fff?text=BNB", badges: ["Bonus", "Contest"] },
  { name: "Solpick", category: "Faucet & Games", description: "💸 Get paid for surveys and offers!", bonus: "Claim up to 1.5 SOL every hour", features: ["Verify Email & Get 10 Bonus Rolls", "Multiply rewards up to 4,850x"], link: "https://solpick.io/?ref=ExmaRS", withdrawMethod: "Pick Sites", withdrawLink: "#", logo: "https://placehold.co/47x47/00BCD4/fff?text=SOL", badges: ["Bonus", "Contest"] },
  { name: "Trxpick", category: "Faucet & Games", description: "💸 Get paid for surveys and offers!", bonus: "Claim up to 1.5 TRX every hour", features: ["Verify Email & Get 10 Bonus Rolls", "Multiply rewards up to 4,850x"], link: "https://trxpick.io/?ref=ExmaRS", withdrawMethod: "Pick Sites", withdrawLink: "#", logo: "https://placehold.co/47x47/FF0000/fff?text=TRX", badges: ["Bonus", "Contest"] },
  { name: "Btcpick", category: "Faucet & Games", description: "💸 Get paid for surveys and offers!", bonus: "Claim up to $18 in BTC every hour", features: ["Get paid for surveys and offers", "Level up & earn higher rewards"], link: "https://btcpick.io/?ref=ExmaRS", withdrawMethod: "Pick Sites", withdrawLink: "#", logo: "https://placehold.co/47x47/F7931A/fff?text=BTC", badges: ["Contest", "Fast Pay"] },
  { name: "Tonpick", category: "Faucet & Games", description: "🚀 Weekly wagering contest - live!", bonus: "Claim up to 1.20 TON every hour", features: ["Get paid for surveys and offers", "Level up & earn higher rewards"], link: "https://tonpick.io/?ref=ExmaRS", withdrawMethod: "Pick Sites", withdrawLink: "#", logo: "https://placehold.co/47x47/009688/fff?text=TON", badges: ["Contest", "Fast Pay"] }
];

// ---- KONG SITES DATA ----
const kongSitesData = [
  { name: "LtcKong", category: "Faucet & Games", description: "💸 Get paid for surveys and offers!", bonus: "Claim up to $50 in LTC per roll", features: ["Verify Email & Get 10 Bonus Rolls", "More Blocks = Higher Rewards!"], link: "https://ltckong.io/?ref=ExmaRS", withdrawMethod: "Kong Sites", withdrawLink: "#", logo: "https://placehold.co/47x47/345D9D/fff?text=LTC", badges: ["Bonus", "Contest"] },
  { name: "SolKong", category: "Faucet & Games", description: "💸 Get paid for surveys and offers!", bonus: "Claim up to $50 in SOL per roll", features: ["Verify Email & Get 10 Bonus Rolls", "More Blocks = Higher Rewards!"], link: "https://solkong.io/?ref=ExmaRS", withdrawMethod: "Kong Sites", withdrawLink: "#", logo: "https://placehold.co/47x47/00BCD4/fff?text=SOL", badges: ["Bonus", "Contest"] },
  { name: "BtcKong", category: "Faucet & Games", description: "💸 Get paid for surveys and offers!", bonus: "Claim up to $50 in BTC per roll", features: ["Verify Email & Get 10 Bonus Rolls", "More Blocks = Higher Rewards!"], link: "https://btckong.io/?ref=ExmaRS", withdrawMethod: "Kong Sites", withdrawLink: "#", logo: "https://placehold.co/47x47/F7931A/fff?text=BTC", badges: ["Bonus", "Contest"] },
  { name: "DogeKong", category: "Faucet & Games", description: "💸 Get paid for surveys and offers!", bonus: "Claim up to $50 in DOGE per roll", features: ["Verify Email & Get 10 Bonus Rolls", "More Blocks = Higher Rewards!"], link: "https://dogekong.io/?ref=ExmaRS", withdrawMethod: "Kong Sites", withdrawLink: "#", logo: "https://placehold.co/47x47/C2A633/fff?text=DOGE", badges: ["Bonus", "Contest"] }
];

// ---- FAUCETMATRIX SITES DATA ----
const fmatrixSitesData = [
  { name: "FreeBTC", category: "Faucet & Games", description: "🚀 Weekly wagering contest - live!", bonus: "Claim up to $18 in BTC every hour", features: ["Get paid for surveys and offers", "Level up & earn higher rewards"], link: "https://freebtc.io/?ref=ExmaRS", withdrawMethod: "FMatrix", withdrawLink: "#", logo: "https://placehold.co/47x47/F7931A/fff?text=BTC", badges: ["Contest", "Fast Pay"] },
  { name: "FreeTon", category: "Faucet & Games", description: "🚀 Weekly wagering contest - live!", bonus: "Claim up to 1.20 TON every hour", features: ["Get paid for surveys and offers", "Level up & earn higher rewards"], link: "https://freeton.io/?ref=ExmaRS", withdrawMethod: "FMatrix", withdrawLink: "#", logo: "https://placehold.co/47x47/009688/fff?text=TON", badges: ["Contest", "Fast Pay"] },
  { name: "FreeDoge", category: "Faucet & Games", description: "🚀 Weekly wagering contest - live!", bonus: "Claim up to $18 in DOGE every hour", features: ["Get paid for surveys and offers", "Level up & earn higher rewards"], link: "https://freedoge.io/?ref=ExmaRS", withdrawMethod: "FMatrix", withdrawLink: "#", logo: "https://placehold.co/47x47/C2A633/fff?text=DOGE", badges: ["Contest", "Fast Pay"] },
  { name: "FreeLTC", category: "Faucet & Games", description: "🚀 Weekly wagering contest - live!", bonus: "Claim up to $18 in LTC every hour", features: ["Get paid for surveys and offers", "Level up & earn higher rewards"], link: "https://freeltc.io/?ref=ExmaRS", withdrawMethod: "FMatrix", withdrawLink: "#", logo: "https://placehold.co/47x47/345D9D/fff?text=LTC", badges: ["Contest", "Fast Pay"] }
];

// ============================================
// PAGE CONFIGURATION
// ============================================
const PAGE_CONFIG = {
  'index': {
    data: homeSitesData,
    tag: "● TOP EARNING",
    title: 'Best ways to earn <span class="highlight">Free Cash & Crypto!</span>',
    subtitle: "Explore the best legit ways to earn free crypto and real money today!",
    stats: ["🏆 Top Paying Sites", "🎁 Free Sign Up Bonuses", "🛡️ Legit Websites"],
    showTip: false
  },
  'lux-sites': {
    data: luxSitesData,
    tag: "● LUX SITES",
    title: 'Earn <span class="highlight">Free Crypto</span> & Increase Reward!',
    subtitle: "Claim faucets, complete simple tasks, get bonuses and withdraw instantly.",
    stats: ["🛡️ 7 Trusted Sites", "💰 7 Cryptocurrencies", "⚡ Instant Withdrawals"],
    showTip: true
  },
  'pick-sites': {
    data: pickSitesData,
    tag: "● PICK SITES",
    title: 'Earn <span class="highlight">Free Crypto</span> & Multiply Rewards!',
    subtitle: "Claim faucets, complete simple tasks, and multiply your rewards up to 4,850x.",
    stats: ["🛡️ 5 Trusted Sites", "💰 5 Cryptocurrencies", "⚡ Instant Withdrawals"],
    showTip: true
  },
  'faucetmatrix-sites': {
    data: fmatrixSitesData,
    tag: "● FAUCETMATRIX SITES",
    title: 'Earn <span class="highlight">Free Crypto</span> from FMatrix!',
    subtitle: "Weekly wagering contests, surveys, offers and higher rewards as you level up.",
    stats: ["🛡️ 4 Trusted Sites", "💰 4 Cryptocurrencies", "⚡ Instant Withdrawals"],
    showTip: true
  },
  'kong-sites': {
    data: kongSitesData,
    tag: "● KONG SITES",
    title: 'Earn <span class="highlight">Free Crypto</span> with Kong!',
    subtitle: "Claim up to $50 per faucet roll and more blocks = higher rewards!",
    stats: ["🛡️ 4 Trusted Sites", "💰 4 Cryptocurrencies", "⚡ Instant Withdrawals"],
    showTip: true
  }
};

// ============================================
// DETECT CURRENT PAGE from URL
// ============================================
function getCurrentPage() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  const file = path.replace('.html', '');
  if (file === '' || file === 'index') return 'index';
  if (PAGE_CONFIG[file]) return file;
  return 'index';
}

// ============================================
// RENDER CARDS
// ============================================
function renderCards(data, containerId) {
  const grid = document.getElementById(containerId);
  if (!grid) return;
  grid.innerHTML = '';

  data.forEach(site => {
    let badgesHtml = '';
    if (site.badges && site.badges.length > 0) {
      site.badges.forEach(badge => {
        let badgeClass = 'badge-bonus';
        if (badge === 'NEW') badgeClass = 'badge-new';
        if (badge === 'HOT' || badge === 'TOP' || badge === 'Popular') badgeClass = 'badge-popular';
        badgesHtml += `<span class="badge ${badgeClass}">${badge}</span>`;
      });
    }

    let featuresHtml = '';
    site.features.forEach(feature => {
      featuresHtml += `<li><i>🎁</i><span>${feature}</span></li>`;
    });

    const card = document.createElement('div');
    card.className = 'site-card';
    card.innerHTML = `
      <div class="card-header">
        <img src="${site.logo}" alt="${site.name}" class="card-logo" loading="lazy">
        <div class="card-title-group">
          <a href="${site.link}" target="_blank" class="card-name">${site.name}</a>
          <div class="card-category">${site.category}</div>
        </div>
        <div class="card-badges">${badgesHtml}</div>
      </div>
      <div class="card-body">
        <div class="offer-tagline">${site.description}</div>
        <a href="${site.link}" target="_blank" class="claim-btn">
          <i>🔥</i> ${site.bonus}
        </a>
        <ul class="feature-list">${featuresHtml}</ul>
      </div>
      <div class="card-footer">
        <div class="withdraw-info">
          <div class="withdraw-label">Withdraw to:</div>
          <a href="${site.withdrawLink}" target="_blank" class="withdraw-method">
            <i>👛</i> ${site.withdrawMethod}
          </a>
        </div>
        <a href="${site.link}" target="_blank" class="earn-now-btn">Earn now</a>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ============================================
// INJECT FOOTER (auto-added on every page)
// ============================================
function injectFooter() {
  if (document.querySelector('.site-footer')) return;

  const footerHTML = `
    <footer class="site-footer">
      <div class="footer-container">
        <div class="footer-brand">
          <h3>EXMA.IO</h3>
          <p>Explore the best ways to earn free cash &amp; crypto. Find trusted earning platforms, faucets, apps and offers — carefully reviewed and checked by us.</p>
          <div class="footer-social">
            <a href="#" aria-label="Twitter" title="Twitter">𝕏</a>
            <a href="#" aria-label="Telegram" title="Telegram">✈</a>
            <a href="#" aria-label="YouTube" title="YouTube">▶</a>
            <a href="#" aria-label="Discord" title="Discord">💬</a>
          </div>
        </div>

        <div class="footer-col">
          <h4>Earn &amp; Multiply</h4>
          <ul>
            <li><a href="lux-sites.html">→ Lux Sites</a></li>
            <li><a href="pick-sites.html">→ Pick Sites</a></li>
            <li><a href="faucetmatrix-sites.html">→ FaucetMatrix Sites</a></li>
            <li><a href="kong-sites.html">→ Kong Sites</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="index.html">→ Top Earning</a></li>
            <li><a href="#">→ Earn Crypto</a></li>
            <li><a href="#">→ Passive Income</a></li>
            <li><a href="#">→ Play &amp; Earn</a></li>
            <li><a href="#">→ Free Spins</a></li>
            <li><a href="#">→ Telegram Apps</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Support</h4>
          <ul>
            <li><a href="#">→ About Us</a></li>
            <li><a href="#">→ Contact</a></li>
            <li><a href="#">→ Privacy Policy</a></li>
            <li><a href="#">→ Terms of Service</a></li>
            <li><a href="#">→ Disclaimer</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div>© 2026 EXMA.IO. All rights reserved.</div>
        <div class="footer-legal">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Cookies</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  `;

  document.body.insertAdjacentHTML('beforeend', footerHTML);
}

// ============================================
// INIT - runs on every page
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  const currentPage = getCurrentPage();
  const config = PAGE_CONFIG[currentPage];

  // 1. Active nav link
  document.querySelectorAll('[data-page]').forEach(el => {
    if (el.dataset.page === currentPage) el.classList.add('active');
  });

  // 2. Highlight dropdown parent when on a sub-page
  if (currentPage !== 'index') {
    const dropdownLink = document.querySelector('[data-dropdown]');
    if (dropdownLink) dropdownLink.classList.add('active');
  }

  // 3. Update hero content
  const heroTag = document.getElementById('heroTag');
  const heroTitle = document.getElementById('heroTitle');
  const heroSubtitle = document.getElementById('heroSubtitle');
  const heroStats = document.getElementById('heroStats');

  if (heroTag) heroTag.textContent = config.tag;
  if (heroTitle) heroTitle.innerHTML = config.title;
  if (heroSubtitle) heroSubtitle.textContent = config.subtitle;
  if (heroStats && config.stats) {
    heroStats.innerHTML = config.stats.map(s => {
      const parts = s.split(' ');
      const icon = parts[0];
      const text = parts.slice(1).join(' ');
      return `<span><i>${icon}</i> ${text}</span>`;
    }).join('');
  }

  // 4. Show / hide tip bar
  const tipBar = document.getElementById('tipBar');
  if (tipBar && !config.showTip) tipBar.style.display = 'none';

  // 5. Update page title
  const titles = {
    'index': 'EXMA.IO – Earn Free Crypto!',
    'lux-sites': 'Lux Sites - EXMA.IO',
    'pick-sites': 'Pick Sites - EXMA.IO',
    'faucetmatrix-sites': 'FaucetMatrix Sites - EXMA.IO',
    'kong-sites': 'Kong Sites - EXMA.IO'
  };
  if (titles[currentPage]) document.title = titles[currentPage];

  // 6. Render cards
  renderCards(config.data, 'siteGrid');

  // 7. DROPDOWN — hover intent + click toggle
  const dropdown = document.querySelector('.dropdown');
  const dropdownToggle = document.querySelector('[data-dropdown]');

  if (dropdown && dropdownToggle) {
    let hoverTimer = null;

    dropdown.addEventListener('mouseenter', () => {
      clearTimeout(hoverTimer);
      dropdown.classList.add('open');
    });

    dropdown.addEventListener('mouseleave', () => {
      hoverTimer = setTimeout(() => {
        dropdown.classList.remove('open');
      }, 150);
    });

    dropdownToggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropdown.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
      }
    });

    dropdown.querySelectorAll('.dropdown-menu a').forEach(link => {
      link.addEventListener('click', () => {
        dropdown.classList.remove('open');
      });
    });
  }

  // 8. Inject footer
  injectFooter();
});