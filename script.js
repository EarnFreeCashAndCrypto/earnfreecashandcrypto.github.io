// ============================================
// EFCAC - UNIVERSAL SCRIPT (works on ALL pages)
// Includes: data, page config, dropdown fix, footer
// All site logos point to local /images/*.webp
// Footer logo added next to brand name
// + ALL missing sites from source HTML added
// ============================================

// ---- HOME PAGE DATA ----
const homeSitesData = [
  { name: "Earnbitmoon", category: "Faucet & PTC", description: "🚀 1,300,000+ Users | 💰 $785K+ Paid Out", bonus: "Claim Faucet Every 5 Minutes", features: ["Join $2,000 Offerwall Contest!", "PTC ads - Offers - SLinks - Tasks"], link: "https://earnbitmoon.club/start/423418.html", withdrawMethod: "FaucetPay", withdrawLink: "https://faucetpay.io/?r=9738732", logo: "images/Earnbitmoon.webp", badges: ["TOP", "HOT"] },
  { name: "FireFaucet", category: "Faucet & PTC", description: "🎉 celebrating its 8th anniversary!", bonus: "+20% Bonus - Offers & Surveys!", features: ["Join $3,000+ Offerwall Contest!", "Claim Faucet every 30 minute"], link: "https://firefaucet.win/ref/1026511", withdrawMethod: "FaucetPay", withdrawLink: "https://faucetpay.io/?r=9738732", logo: "images/FireFaucet.webp", badges: ["TOP", "Trusted"] },
  { name: "FomoEarn", category: "Watch & Earn", description: "🏆 Automatic earning with APP!", bonus: "Earn money by watching videos!", features: ["Minimum withdraw - just $0.01!", "3 Referral Levels: +50%+10% +1%"], link: "https://fomoearn.com/r/uYVwaQjj", withdrawMethod: "FaucetPay", withdrawLink: "https://faucetpay.io/?r=9738732", logo: "images/FomoEarn.webp", badges: ["NEW", "TOP"] },
  { name: "LuckyWatch", category: "Watch & Earn", description: "🏆 Referral Contest Prize pool: $1,200", bonus: "Earn money by watching videos!", features: ["Boost your income up to + 50%", "Minimum withdraw - just $0.10!"], link: "https://luckywatch.pro/u/000wt", withdrawMethod: "FaucetPay", withdrawLink: "https://faucetpay.io/?r=9738732", logo: "images/LuckyWatch.webp", badges: ["Boost", "Contest"] },
  { name: "EuroAds", category: "PTC & TASKS", description: "🔥 Earn by completing simple tasks!", bonus: "Claim faucet every 5 min 0.0010€", features: ["PTC ads - Social Networks - CPA", "2 Referral Levels: Up to +15% +7%"], link: "https://www.euroads.biz/r/DOVUUN", withdrawMethod: "FaucetPay", withdrawLink: "https://faucetpay.io/?r=9738732", logo: "images/EuroAds.webp", badges: ["NEW", "TOP"] },
  { name: "VieFaucet", category: "Faucet & PTC", description: "🎁 Highest faucet claim rewards!", bonus: "Claim faucet every 4 minutes!", features: ["View ads & complete shortlinks", "Daily Bonus, Challenges & Offers"], link: "https://viefaucet.com?r=6898bae6af2828013f673742", withdrawMethod: "FaucetPay", withdrawLink: "https://faucetpay.io/?r=9738732", logo: "images/VieFaucet.webp", badges: ["TOP", "Contest"] },
  { name: "TimeBucks", category: "PTC & TASKS", description: "💰 Earn by completing simple tasks!", bonus: "Sign Up & Verify Bonus up to $1", features: ["PTC ads - Offerwalls - Games", "Daily Streak - Up to $11 per day!"], link: "https://timebucks.com/?refID=226610913", withdrawMethod: "MEXC", withdrawLink: "https://www.mexc.com/?shareCode=mexc-EXMA", logo: "images/TimeBucks.webp", badges: ["Bonus", "Contest"] },
  { name: "EarnLab", category: "Play & Earn", description: "🔥 Tasks with the highest rewards", bonus: "Earn rewards by playing games", features: ["Daily Gifts - 7 Days Streak Boxes", "Min. withdraw: $0.25 via crypto"], link: "https://earnlab.com/r/scalevance", withdrawMethod: "MEXC", withdrawLink: "https://www.mexc.com/?shareCode=mexc-EXMA", logo: "images/EarnLab.webp", badges: ["Bonus", "Play"] },
  { name: "EarnApp", category: "Offers & Sharing", description: "💸 Easy Profit! FREE Passive income!", bonus: "Start the app, let it run & earn!", features: ["Complete tasks & earn rewards", "Earn $150+ from a single game"], link: "https://earnapp.com/i/KDKmvWkk", withdrawMethod: "PayPal", withdrawLink: "https://www.paypal.com/", logo: "images/EarnApp.webp", badges: ["TOP", "EASY"] },
  { name: "RewardJoy", category: "ptc & Offers", description: "🏆 3 Contests - $12,000 TOTAL Prizes", bonus: "Get up to $150 per offer - join!", features: ["Earn up to $0.03 per PTC ad view", "LVL up & boost reward up to 15%"], link: "https://www.rewardjoy.com/?r=2bh24NGaVQND", withdrawMethod: "MEXC", withdrawLink: "https://www.mexc.com/?shareCode=mexc-EXMA", logo: "images/RewardJoy.webp", badges: ["HOT", "Contest"] },
  { name: "DropBNB", category: "Faucet & Games", description: "💸 Claim free BNB & multiply reward!", bonus: "Claim up to $10 + RPoints hourly!", features: ["10 Sign Up Bonus Rolls + 1 Daily", "Boost FREE faucet with RPoints"], link: "https://dropbnb.io/?ref=exma_rsc", withdrawMethod: "Drop Sites", withdrawLink: "#", logo: "images/DropBNB.webp", badges: ["Bonus", "Contest"] },
  { name: "DropTRX", category: "Faucet & Games", description: "💸 Claim free TRX & multiply reward!", bonus: "Claim up to $10 + RPoints hourly!", features: ["10 Sign Up Bonus Rolls + 1 Daily", "Boost FREE faucet with RPoints"], link: "https://droptrx.io/?ref=exma_rsc", withdrawMethod: "Drop Sites", withdrawLink: "#", logo: "images/DropTRX.webp", badges: ["Bonus", "Contest"] },
  { name: "DropBTC", category: "Faucet & Games", description: "💸 Claim free BTC & multiply reward!", bonus: "Claim up to $10 + RPoints hourly!", features: ["10 Sign Up Bonus Rolls + 1 Daily", "Boost FREE faucet with RPoints"], link: "https://dropbtc.io/?ref=exma_rsc", withdrawMethod: "Drop Sites", withdrawLink: "#", logo: "images/DropBTC.webp", badges: ["Bonus", "Contest"] },
  { name: "Honeygain", category: "Bandwidth Sharing", description: "🐝 Simple online money earning app!", bonus: "Get Free $3 welcome gift now!", features: ["Earn more with desktop devices", "Lucky Pot - Win up to $10 daily!"], link: "https://r.honeygain.me/RINAL912", withdrawMethod: "PayPal", withdrawLink: "https://www.paypal.com/", logo: "images/Honeygain.webp", badges: ["GIFT", "EASY"] },
  { name: "BCHgames", category: "Faucet & Games", description: "🏆 Claim free BCH - play and win!", bonus: "Claim faucet every 5 minutes", features: ["Level up and get a rewards", "Giveaway every 30 minutes"], link: "https://bch.games/play/EXMA", withdrawMethod: "MEXC", withdrawLink: "https://www.mexc.com/?shareCode=mexc-EXMA", logo: "images/BCHgames.webp", badges: ["Contest", "Fast Pay"] },
  { name: "Nuts", category: "Faucet & Games", description: "🏆 Claim free solana - play and win!", bonus: "Claim faucet every 3 minutes", features: ['Claim the faucet in the "Perks"', "Earn rewards by leveling up!"], link: "https://nuts.gg/play/SCALEVANCE", withdrawMethod: "MEXC", withdrawLink: "https://www.mexc.com/?shareCode=mexc-EXMA", logo: "images/Nuts.webp", badges: ["Contest", "Fast Pay"] },
  { name: "TrustDice", category: "Faucet & Games", description: "🔥 Claim the highest faucet rewards", bonus: "Claim $0.04 in TRX every 6 hours", features: ['Find faucet in "Bonus" section', "Welcome Bonus - 500% + 100 FS"], link: "https://trustdice.win/faucet?ref=u_biscore", withdrawMethod: "MEXC", withdrawLink: "https://www.mexc.com/?shareCode=mexc-EXMA", logo: "images/TrustDice.webp", badges: ["Bonus", "Contest"] },
    // ---- NETWORK CARDS (Lux, Pick, Kong, FMatrix) ----
  { name: "Lux Sites", category: "Faucet network", description: "✅ Get paid for surveys and offers!", bonus: "Claim up to $25 per faucet claim!", features: ["Verify Email & Get 10 Bonus Rolls", "Increase your level & earn more"], link: "lux-sites.html", withdrawMethod: "Lux Sites", withdrawLink: "lux-sites.html", logo: "images/LuxSites.webp", badges: ["7 Bonuses", "Available"] },
  { name: "Pick Sites", category: "Faucet network", description: "✅ Get paid for surveys and offers!", bonus: "Claim up to $10 per faucet claim!", features: ["Verify Email & Get 10 Bonus Rolls", "Multiply rewards up to 4,850x"], link: "pick-sites.html", withdrawMethod: "Pick Sites", withdrawLink: "pick-sites.html", logo: "images/PickSites.webp", badges: ["9 Bonuses", "Available"] },
  { name: "Kong Sites", category: "Faucet network", description: "✅ Get paid for surveys and offers!", bonus: "Claim up to $25 per faucet claim!", features: ["Verify Email & Get 10 Bonus Rolls", "More Blocks = Higher Rewards!"], link: "kong-sites.html", withdrawMethod: "Kong Sites", withdrawLink: "kong-sites.html", logo: "images/KongSites.webp", badges: ["11 Bonuses", "Available"] },
  { name: "FMatrix", category: "Faucet network", description: "✅ Get paid for surveys and offers!", bonus: "Claim up to $25 per faucet claim!", features: ["Weekly wagering contest - live!", "Level up & earn higher rewards"], link: "faucetmatrix-sites.html", withdrawMethod: "FMatrix", withdrawLink: "faucetmatrix-sites.html", logo: "images/FMatrix.webp", badges: ["12 Cryptos", "Available"] },
  
  // ---- NEW SITES ADDED FROM SOURCE ----
  { name: "Beegobox", category: "Faucet & Games", description: "🎁 Sign up bonus + multiplier rewards!", bonus: "Get Free $1 sign up bonus!", features: ["Claim faucet every 5 min 0.0010€", "PTC ads - Social Networks - CPA"], link: "https://beegobox.com?ref=5849", withdrawMethod: "FaucetPay", withdrawLink: "https://faucetpay.io/?r=9738732", logo: "images/Beegobox.webp", badges: ["Bonus", "Fast Pay"] },
  { name: "ByteLixir", category: "Passive Income", description: "💸 Passive income from bandwidth sharing", bonus: "Get Free $1 sign up bonus", features: ["Idle earning app", "PTC ads - Social Networks - CPA"], link: "https://bytelixir.com/r/LXBZNW4KQXLZ", withdrawMethod: "PayPal", withdrawLink: "https://www.paypal.com/", logo: "images/ByteLixir.webp", badges: ["TOP", "EASY"] },
  { name: "PawnsApp", category: "Passive Income", description: "💰 Get paid for sharing your internet", bonus: "Get paid to share your unused internet", features: ["Idle earning on desktop & mobile", "Withdraw via PayPal or crypto"], link: "https://pawns.app/?r=520649", withdrawMethod: "PayPal", withdrawLink: "https://www.paypal.com/", logo: "images/PawnsApp.webp", badges: ["TOP", "Trusted"] },
  { name: "Freecash", category: "Offers & Rewards", description: "💰 Get up to Free $5 Sign Up Bonus!", bonus: "Get up to Free $5 Sign Up Bonus!", features: ["Complete offers, surveys & games", "Fastest payouts via crypto"], link: "https://freecash.com/r/SCV", withdrawMethod: "MEXC", withdrawLink: "https://www.mexc.com/?shareCode=mexc-EXMA", logo: "images/Freecash.webp", badges: ["TOP", "HOT"] },
  { name: "Getlike", category: "Social Tasks", description: "💸 Earn for completing social tasks", bonus: "Earn by completing social media tasks", features: ["Get paid for likes & followers", "Fast PayPal withdrawals"], link: "https://getlike.io/en/?ref=1056338", withdrawMethod: "PayPal", withdrawLink: "https://www.paypal.com/", logo: "images/Getlike.webp", badges: ["Bonus", "EASY"] },
  { name: "Gemsloot", category: "Play & Earn", description: "🎮 Play games & earn rewards!", bonus: "🎁 Start Earning Now", features: ["Play games, earn gems", "Trade gems for cash & crypto"], link: "https://gemsloot.com/?aff=scalevance", withdrawMethod: "MEXC", withdrawLink: "https://www.mexc.com/?shareCode=mexc-EXMA", logo: "images/Gemsloot.webp", badges: ["Bonus", "Play"] },
  { name: "CoinsGame", category: "Faucet & Games", description: "🎰 Play games & claim faucet rewards!", bonus: "Play and win big!", features: ["Casino games with faucet rewards", "Fast crypto withdrawals"], link: "https://coins.game/c/149887_8926af10", withdrawMethod: "MEXC", withdrawLink: "https://www.mexc.com/?shareCode=mexc-EXMA", logo: "images/CoinsGame.webp", badges: ["Bonus", "Contest"] }
];

// ---- LUX SITES DATA ----
const luxSitesData = [
  { name: "BnbLux", category: "Faucet & Games", description: "💸 Get paid for surveys and offers!", bonus: "Claim up to $25 per faucet claim!", features: ["Verify Email & Get 10 Bonus Rolls", "Increase your level & earn more"], link: "https://bnblux.io/?ref=ExmaRS", withdrawMethod: "MEXC", withdrawLink: "https://www.mexc.com/?shareCode=mexc-EXMA", logo: "images/BnbLux.webp", badges: ["NEW", "Bonus"] },
  { name: "TronLux", category: "Faucet & Games", description: "💸 Get paid for surveys and offers!", bonus: "Claim up to $25 per faucet claim!", features: ["Verify Email & Get 10 Bonus Rolls", "Increase your level & earn more"], link: "https://tronlux.io/?ref=ExmaRS", withdrawMethod: "MEXC", withdrawLink: "https://www.mexc.com/?shareCode=mexc-EXMA", logo: "images/TronLux.webp", badges: ["Bonus", "Popular"] },
  { name: "BtcLux", category: "Faucet & Games", description: "💸 Get paid for surveys and offers!", bonus: "Claim up to $25 per faucet claim!", features: ["Verify Email & Get 10 Bonus Rolls", "Increase your level & earn more"], link: "https://btclux.io/?ref=ExmaRS", withdrawMethod: "MEXC", withdrawLink: "https://www.mexc.com/?shareCode=mexc-EXMA", logo: "images/BtcLux.webp", badges: ["Bonus", "Popular"] },
  { name: "UsdtLux", category: "Faucet & Games", description: "💸 Get paid for surveys and offers!", bonus: "Claim up to $25 per faucet claim!", features: ["Verify Email & Get 10 Bonus Rolls", "Increase your level & earn more"], link: "https://usdtlux.io/?ref=ExmaRS", withdrawMethod: "MEXC", withdrawLink: "https://www.mexc.com/?shareCode=mexc-EXMA", logo: "images/UsdtLux.webp", badges: ["Bonus", "Popular"] },
  { name: "ShibaLux", category: "Faucet & Games", description: "💸 Get paid for surveys and offers!", bonus: "Claim up to $25 per faucet claim!", features: ["Verify Email & Get 10 Bonus Rolls", "Increase your level & earn more"], link: "https://shibalux.io/?ref=ExmaRS", withdrawMethod: "MEXC", withdrawLink: "https://www.mexc.com/?shareCode=mexc-EXMA", logo: "images/ShibaLux.webp", badges: ["Bonus", "Contest"] },
  { name: "PepeLux", category: "Faucet & Games", description: "💸 Get paid for surveys and offers!", bonus: "Claim up to $25 per faucet claim!", features: ["Verify Email & Get 10 Bonus Rolls", "Increase your level & earn more"], link: "https://pepelux.io/?ref=ExmaRS", withdrawMethod: "MEXC", withdrawLink: "https://www.mexc.com/?shareCode=mexc-EXMA", logo: "images/PepeLux.webp", badges: ["Bonus", "Contest"] },
  { name: "XrpLux", category: "Faucet & Games", description: "💸 Get paid for surveys and offers!", bonus: "Claim up to $25 per faucet claim!", features: ["Verify Email & Get 10 Bonus Rolls", "Increase your level & earn more"], link: "https://xrplux.io/?ref=ExmaRS", withdrawMethod: "MEXC", withdrawLink: "https://www.mexc.com/?shareCode=mexc-EXMA", logo: "images/XrpLux.webp", badges: ["Bonus"] }
];

// ---- PICK SITES DATA ----
const pickSitesData = [
  { name: "Bnbpick", category: "Faucet & Games", description: "💸 Get paid for surveys and offers!", bonus: "Claim up to 0.225 BNB every hour", features: ["Verify Email & Get 10 Bonus Rolls", "Multiply rewards up to 4,850x"], link: "https://bnbpick.io/?ref=ExmaRS", withdrawMethod: "Pick Sites", withdrawLink: "#", logo: "images/Bnbpick.webp", badges: ["Bonus", "Contest"] },
  { name: "Solpick", category: "Faucet & Games", description: "💸 Get paid for surveys and offers!", bonus: "Claim up to 1.5 SOL every hour", features: ["Verify Email & Get 10 Bonus Rolls", "Multiply rewards up to 4,850x"], link: "https://solpick.io/?ref=ExmaRS", withdrawMethod: "Pick Sites", withdrawLink: "#", logo: "images/Solpick.webp", badges: ["Bonus", "Contest"] },
  { name: "Trxpick", category: "Faucet & Games", description: "💸 Get paid for surveys and offers!", bonus: "Claim up to 1.5 TRX every hour", features: ["Verify Email & Get 10 Bonus Rolls", "Multiply rewards up to 4,850x"], link: "https://trxpick.io/?ref=ExmaRS", withdrawMethod: "Pick Sites", withdrawLink: "#", logo: "images/Trxpick.webp", badges: ["Bonus", "Contest"] },
  { name: "Btcpick", category: "Faucet & Games", description: "💸 Get paid for surveys and offers!", bonus: "Claim up to $18 in BTC every hour", features: ["Get paid for surveys and offers", "Level up & earn higher rewards"], link: "https://btcpick.io/?ref=ExmaRS", withdrawMethod: "Pick Sites", withdrawLink: "#", logo: "images/Btcpick.webp", badges: ["Contest", "Fast Pay"] },
  { name: "Tonpick", category: "Faucet & Games", description: "🚀 Weekly wagering contest - live!", bonus: "Claim up to 1.20 TON every hour", features: ["Get paid for surveys and offers", "Level up & earn higher rewards"], link: "https://tonpick.io/?ref=ExmaRS", withdrawMethod: "Pick Sites", withdrawLink: "#", logo: "images/Tonpick.webp", badges: ["Contest", "Fast Pay"] }
];

// ---- KONG SITES DATA ----
const kongSitesData = [
  { name: "LtcKong", category: "Faucet & Games", description: "💸 Get paid for surveys and offers!", bonus: "Claim up to $50 in LTC per roll", features: ["Verify Email & Get 10 Bonus Rolls", "More Blocks = Higher Rewards!"], link: "https://ltckong.io/?ref=ExmaRS", withdrawMethod: "Kong Sites", withdrawLink: "#", logo: "images/LtcKong.webp", badges: ["Bonus", "Contest"] },
  { name: "SolKong", category: "Faucet & Games", description: "💸 Get paid for surveys and offers!", bonus: "Claim up to $50 in SOL per roll", features: ["Verify Email & Get 10 Bonus Rolls", "More Blocks = Higher Rewards!"], link: "https://solkong.io/?ref=ExmaRS", withdrawMethod: "Kong Sites", withdrawLink: "#", logo: "images/SolKong.webp", badges: ["Bonus", "Contest"] },
  { name: "BtcKong", category: "Faucet & Games", description: "💸 Get paid for surveys and offers!", bonus: "Claim up to $50 in BTC per roll", features: ["Verify Email & Get 10 Bonus Rolls", "More Blocks = Higher Rewards!"], link: "https://btckong.io/?ref=ExmaRS", withdrawMethod: "Kong Sites", withdrawLink: "#", logo: "images/BtcKong.webp", badges: ["Bonus", "Contest"] },
  { name: "DogeKong", category: "Faucet & Games", description: "💸 Get paid for surveys and offers!", bonus: "Claim up to $50 in DOGE per roll", features: ["Verify Email & Get 10 Bonus Rolls", "More Blocks = Higher Rewards!"], link: "https://dogekong.io/?ref=ExmaRS", withdrawMethod: "Kong Sites", withdrawLink: "#", logo: "images/DogeKong.webp", badges: ["Bonus", "Contest"] }
];

// ---- FAUCETMATRIX SITES DATA ----
const fmatrixSitesData = [
  { name: "FreeBTC", category: "Faucet & Games", description: "🚀 Weekly wagering contest - live!", bonus: "Claim up to $18 in BTC every hour", features: ["Get paid for surveys and offers", "Level up & earn higher rewards"], link: "https://freebtc.io/?ref=ExmaRS", withdrawMethod: "FMatrix", withdrawLink: "#", logo: "images/FreeBTC.webp", badges: ["Contest", "Fast Pay"] },
  { name: "FreeTon", category: "Faucet & Games", description: "🚀 Weekly wagering contest - live!", bonus: "Claim up to 1.20 TON every hour", features: ["Get paid for surveys and offers", "Level up & earn higher rewards"], link: "https://freeton.io/?ref=ExmaRS", withdrawMethod: "FMatrix", withdrawLink: "#", logo: "images/FreeTon.webp", badges: ["Contest", "Fast Pay"] },
  { name: "FreeDoge", category: "Faucet & Games", description: "🚀 Weekly wagering contest - live!", bonus: "Claim up to $18 in DOGE every hour", features: ["Get paid for surveys and offers", "Level up & earn higher rewards"], link: "https://freedoge.io/?ref=ExmaRS", withdrawMethod: "FMatrix", withdrawLink: "#", logo: "images/FreeDoge.webp", badges: ["Contest", "Fast Pay"] },
  { name: "FreeLTC", category: "Faucet & Games", description: "🚀 Weekly wagering contest - live!", bonus: "Claim up to $18 in LTC every hour", features: ["Get paid for surveys and offers", "Level up & earn higher rewards"], link: "https://freeltc.io/?ref=ExmaRS", withdrawMethod: "FMatrix", withdrawLink: "#", logo: "images/FreeLTC.webp", badges: ["Contest", "Fast Pay"] }
];

// ---- EARN CRYPTO DATA ----
const earnCrypto = [
  { name: "FreeBTC", category: "Faucet & Games", description: "🚀 Weekly wagering contest - live!", bonus: "Claim up to $18 in BTC every hour", features: ["Get paid for surveys and offers", "Level up & earn higher rewards"], link: "https://freebtc.io/?ref=ExmaRS", withdrawMethod: "FMatrix", withdrawLink: "#", logo: "images/FreeBTC.webp", badges: ["Contest", "Fast Pay"] },
  { name: "FreeTon", category: "Faucet & Games", description: "🚀 Weekly wagering contest - live!", bonus: "Claim up to 1.20 TON every hour", features: ["Get paid for surveys and offers", "Level up & earn higher rewards"], link: "https://freeton.io/?ref=ExmaRS", withdrawMethod: "FMatrix", withdrawLink: "#", logo: "images/FreeTon.webp", badges: ["Contest", "Fast Pay"] },
  { name: "FreeDoge", category: "Faucet & Games", description: "🚀 Weekly wagering contest - live!", bonus: "Claim up to $18 in DOGE every hour", features: ["Get paid for surveys and offers", "Level up & earn higher rewards"], link: "https://freedoge.io/?ref=ExmaRS", withdrawMethod: "FMatrix", withdrawLink: "#", logo: "images/FreeDoge.webp", badges: ["Contest", "Fast Pay"] },
  { name: "FreeLTC", category: "Faucet & Games", description: "🚀 Weekly wagering contest - live!", bonus: "Claim up to $18 in LTC every hour", features: ["Get paid for surveys and offers", "Level up & earn higher rewards"], link: "https://freeltc.io/?ref=ExmaRS", withdrawMethod: "FMatrix", withdrawLink: "#", logo: "images/FreeLTC.webp", badges: ["Contest", "Fast Pay"] }
];

// ---- PASSIVE INCOME DATA ----
const passiveIncome = [
  { name: "Honeygain", category: "Bandwidth Sharing", description: "🐝 Simple online money earning app!", bonus: "Get Free $3 welcome gift now!", features: ["Earn more with desktop devices", "Lucky Pot - Win up to $10 daily!"], link: "https://r.honeygain.me/RINAL912", withdrawMethod: "PayPal", withdrawLink: "https://www.paypal.com/", logo: "images/Honeygain.webp", badges: ["GIFT", "EASY"] },
  { name: "EarnApp", category: "Bandwidth Sharing", description: "💸 Easy Profit! FREE Passive income!", bonus: "Start the app, let it run & earn!", features: ["Complete tasks & earn rewards", "Earn $150+ from a single game"], link: "https://earnapp.com/i/KDKmvWkk", withdrawMethod: "PayPal", withdrawLink: "https://www.paypal.com/", logo: "images/EarnApp.webp", badges: ["TOP", "EASY"] },
  { name: "ByteLixir", category: "Passive Income", description: "💸 Passive income from bandwidth sharing", bonus: "Get Free $1 sign up bonus", features: ["Idle earning app", "PTC ads - Social Networks - CPA"], link: "https://bytelixir.com/r/LXBZNW4KQXLZ", withdrawMethod: "PayPal", withdrawLink: "https://www.paypal.com/", logo: "images/ByteLixir.webp", badges: ["TOP", "EASY"] },
  { name: "PawnsApp", category: "Passive Income", description: "💰 Get paid for sharing your internet", bonus: "Get paid to share your unused internet", features: ["Idle earning on desktop & mobile", "Withdraw via PayPal or crypto"], link: "https://pawns.app/?r=520649", withdrawMethod: "PayPal", withdrawLink: "https://www.paypal.com/", logo: "images/PawnsApp.webp", badges: ["TOP", "Trusted"] }
];

// ---- PLAY & EARN DATA ----
const playEarn = [
  { name: "EarnLab", category: "Play & Earn", description: "🔥 Tasks with the highest rewards", bonus: "Earn rewards by playing games", features: ["Daily Gifts - 7 Days Streak Boxes", "Min. withdraw: $0.25 via crypto"], link: "https://earnlab.com/r/scalevance", withdrawMethod: "MEXC", withdrawLink: "https://www.mexc.com/?shareCode=mexc-EXMA", logo: "images/EarnLab.webp", badges: ["Bonus", "Play"] },
  { name: "Gemsloot", category: "Play & Earn", description: "🎮 Play games & earn rewards!", bonus: "🎁 Start Earning Now", features: ["Play games, earn gems", "Trade gems for cash & crypto"], link: "https://gemsloot.com/?aff=scalevance", withdrawMethod: "MEXC", withdrawLink: "https://www.mexc.com/?shareCode=mexc-EXMA", logo: "images/Gemsloot.webp", badges: ["Bonus", "Play"] },
  { name: "BCHgames", category: "Faucet & Games", description: "🏆 Claim free BCH - play and win!", bonus: "Claim faucet every 5 minutes", features: ["Level up and get a rewards", "Giveaway every 30 minutes"], link: "https://bch.games/play/EXMA", withdrawMethod: "MEXC", withdrawLink: "https://www.mexc.com/?shareCode=mexc-EXMA", logo: "images/BCHgames.webp", badges: ["Contest", "Fast Pay"] },
  { name: "Nuts", category: "Faucet & Games", description: "🏆 Claim free solana - play and win!", bonus: "Claim faucet every 3 minutes", features: ['Claim the faucet in the "Perks"', "Earn rewards by leveling up!"], link: "https://nuts.gg/play/SCALEVANCE", withdrawMethod: "MEXC", withdrawLink: "https://www.mexc.com/?shareCode=mexc-EXMA", logo: "images/Nuts.webp", badges: ["Contest", "Fast Pay"] },
  { name: "TrustDice", category: "Faucet & Games", description: "🔥 Claim the highest faucet rewards", bonus: "Claim $0.04 in TRX every 6 hours", features: ['Find faucet in "Bonus" section', "Welcome Bonus - 500% + 100 FS"], link: "https://trustdice.win/faucet?ref=u_biscore", withdrawMethod: "MEXC", withdrawLink: "https://www.mexc.com/?shareCode=mexc-EXMA", logo: "images/TrustDice.webp", badges: ["Bonus", "Contest"] },
  { name: "CoinsGame", category: "Faucet & Games", description: "🎰 Play games & claim faucet rewards!", bonus: "Play and win big!", features: ["Casino games with faucet rewards", "Fast crypto withdrawals"], link: "https://coins.game/c/149887_8926af10", withdrawMethod: "MEXC", withdrawLink: "https://www.mexc.com/?shareCode=mexc-EXMA", logo: "images/CoinsGame.webp", badges: ["Bonus", "Contest"] }
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
  },
  'earncrypto': {
    data: earnCrypto,
    tag: "● EARN CRYPTO",
    title: 'Earn <span class="highlight">Free Crypto</span> Instantly!',
    subtitle: "Claim free crypto from faucets, PTC ads, and simple tasks.",
    stats: ["🛡️ Trusted Sites", "💰 Multiple Cryptos", "⚡ Instant Payouts"],
    showTip: true
  },
  'passive-income': {
    data: passiveIncome,
    tag: "● PASSIVE INCOME",
    title: 'Earn <span class="highlight">Passive Income</span> Online!',
    subtitle: "Set it up once and earn from bandwidth sharing, apps, and more.",
    stats: ["💸 Idle Earning", "🔒 Secure", "💰 Real Payouts"],
    showTip: true
  },
  'play-earn': {
    data: playEarn,
    tag: "● PLAY & EARN",
    title: 'Play Games & <span class="highlight">Earn Rewards!</span>',
    subtitle: "Play casual games, complete tasks, and earn real rewards.",
    stats: ["🎮 Fun Games", "🎁 Real Rewards", "⚡ Fast Payouts"],
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
        <img src="${site.logo}" alt="${site.name}" class="card-logo" loading="lazy" onerror="this.src='https://placehold.co/47x47/333/fff?text=' + encodeURIComponent('${site.name.charAt(0)}')">
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
            <li><a href="about.html">→ About Us</a></li>
            <li><a href="contact.html">→ Contact</a></li>
            <li><a href="privacy.html">→ Privacy Policy</a></li>
            <li><a href="terms.html">→ Terms of Service</a></li>
            <li><a href="disclaimer.html">→ Disclaimer</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div>© 2026 EFCAC. All rights reserved.</div>
        <div class="footer-legal">
          <a href="privacy.html">Privacy</a>
          <a href="terms.html">Terms</a>
          <a href="disclaimer.html">Disclaimer</a>
          <a href="index.html">Sitemap</a>
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
    'index': 'EFCAC – Earn Free Crypto!',
    'lux-sites': 'Lux Sites - EFCAC',
    'pick-sites': 'Pick Sites - EFCAC',
    'faucetmatrix-sites': 'FaucetMatrix Sites - EFCAC',
    'kong-sites': 'Kong Sites - EFCAC',
    'earncrypto': 'Earn Crypto - EFCAC',
    'passive-income': 'Passive Income - EFCAC',
    'play-earn': 'Play & Earn - EFCAC'
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