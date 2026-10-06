// ============================================
// EFCAC - UNIVERSAL SCRIPT (works on ALL pages)
// ============================================
// NOTE: Menu and footer are handled by menu.js
// This file only handles page data + rendering
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
  { name: "Lux Sites", category: "Faucet network", description: "✅ Get paid for surveys and offers!", bonus: "Claim up to $25 per faucet claim!", features: ["Verify Email & Get 10 Bonus Rolls", "Increase your level & earn more"], link: "lux-sites.html", withdrawMethod: "Lux Sites", withdrawLink: "lux-sites.html", logo: "images/LuxSites.webp", badges: ["7 Bonuses", "Available"] },
  { name: "Pick Sites", category: "Faucet network", description: "✅ Get paid for surveys and offers!", bonus: "Claim up to $10 per faucet claim!", features: ["Verify Email & Get 10 Bonus Rolls", "Multiply rewards up to 4,850x"], link: "pick-sites.html", withdrawMethod: "Pick Sites", withdrawLink: "pick-sites.html", logo: "images/PickSites.webp", badges: ["9 Bonuses", "Available"] },
  { name: "Kong Sites", category: "Faucet network", description: "✅ Get paid for surveys and offers!", bonus: "Claim up to $25 per faucet claim!", features: ["Verify Email & Get 10 Bonus Rolls", "More Blocks = Higher Rewards!"], link: "kong-sites.html", withdrawMethod: "Kong Sites", withdrawLink: "kong-sites.html", logo: "images/KongSites.webp", badges: ["11 Bonuses", "Available"] },
  { name: "FMatrix", category: "Faucet network", description: "✅ Get paid for surveys and offers!", bonus: "Claim up to $25 per faucet claim!", features: ["Weekly wagering contest - live!", "Level up & earn higher rewards"], link: "faucetmatrix-sites.html", withdrawMethod: "FMatrix", withdrawLink: "faucetmatrix-sites.html", logo: "images/FMatrix.webp", badges: ["12 Cryptos", "Available"] },
  { name: "Beegobox", category: "Faucet & Games", description: "🎁 Sign up bonus + multiplier rewards!", bonus: "Get Free $1 sign up bonus!", features: ["Claim faucet every 5 min 0.0010€", "PTC ads - Social Networks - CPA"], link: "https://beegobox.com?ref=5849", withdrawMethod: "FaucetPay", withdrawLink: "https://faucetpay.io/?r=9738732", logo: "images/Beegobox.webp", badges: ["Bonus", "Fast Pay"] },
  { name: "ByteLixir", category: "Passive Income", description: "💸 Passive income from bandwidth sharing", bonus: "Get Free $1 sign up bonus", features: ["Idle earning app", "PTC ads - Social Networks - CPA"], link: "https://bytelixir.com/r/LXBZNW4KQXLZ", withdrawMethod: "PayPal", withdrawLink: "https://www.paypal.com/", logo: "images/ByteLixir.webp", badges: ["TOP", "EASY"] },
  { name: "PawnsApp", category: "Passive Income", description: "💰 Get paid for sharing your internet", bonus: "Get paid to share your unused internet", features: ["Idle earning on desktop & mobile", "Withdraw via PayPal or crypto"], link: "https://pawns.app/?r=520649", withdrawMethod: "PayPal", withdrawLink: "https://www.paypal.com/", logo: "images/PawnsApp.webp", badges: ["TOP", "Trusted"] },
  { name: "Freecash", category: "Offers & Rewards", description: "💰 Get up to Free $5 Sign Up Bonus!", bonus: "Get up to Free $5 Sign Up Bonus!", features: ["Complete offers, surveys & games", "Fastest payouts via crypto"], link: "https://freecash.com/r/SCV", withdrawMethod: "MEXC", withdrawLink: "https://www.mexc.com/?shareCode=mexc-EXMA", logo: "images/Freecash.webp", badges: ["TOP", "HOT"] },
  { name: "Getlike", category: "Social Tasks", description: "💸 Earn for completing social tasks", bonus: "Earn by completing social media tasks", features: ["Get paid for likes & followers", "Fast PayPal withdrawals"], link: "https://getlike.io/en/?ref=1056338", withdrawMethod: "PayPal", withdrawLink: "https://www.paypal.com/", logo: "images/Getlike.webp", badges: ["Bonus", "EASY"] },
  { name: "Gemsloot", category: "Play & Earn", description: "🎮 Play games & earn rewards!", bonus: "🎁 Start Earning Now", features: ["Play games, earn gems", "Trade gems for cash & crypto"], link: "https://gemsloot.com/?aff=scalevance", withdrawMethod: "MEXC", withdrawLink: "https://www.mexc.com/?shareCode=mexc-EXMA", logo: "images/Gemsloot.webp", badges: ["Bonus", "Play"] },

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
];

// ---- EARN BY SOCIAL MEDIA DATA ----
const earnSocial = [
   { name: "Vboost", category: "Social Tasks", description: "💸 Earn from social content engagement", bonus: "Earn for engaging with posts", features: ["Swipe through sponsored posts", "Earn per engagement"], link: "https://vboost.ru/r/bAYx57Cl", withdrawMethod: "Crypto", withdrawLink: "#", logo: "images/vboost.webp", badges: ["NEW", "EASY"] },
  { name: "Getlike", category: "Social Tasks", description: "💸 Earn for completing social tasks", bonus: "Earn by completing social media tasks", features: ["Get paid for likes & followers", "Fast PayPal withdrawals"], link: "https://getlike.io/en/?ref=1056338", withdrawMethod: "PayPal", withdrawLink: "https://www.paypal.com/", logo: "images/Getlike.webp", badges: ["Bonus", "EASY"] },
  { name: "FollowFast", category: "Social Tasks", description: "📱 Get paid to follow & engage!", bonus: "Earn by following social accounts", features: ["Follow, like & share tasks", "Multiple social platforms supported"], link: "https://followfast.com/?ref=scalevance", withdrawMethod: "PayPal", withdrawLink: "https://www.paypal.com/", logo: "images/FollowFast.webp", badges: ["NEW", "EASY"] },
  { name: "SocialEarn", category: "Social Tasks", description: "💰 Monetize your social media presence", bonus: "Get paid for posting content", features: ["Post sponsored content", "Earn from engagement"], link: "https://socialearn.com/?ref=scalevance", withdrawMethod: "MEXC", withdrawLink: "https://www.mexc.com/?shareCode=mexc-EXMA", logo: "images/SocialEarn.webp", badges: ["TOP", "Bonus"] },
  { name: "InstaPay", category: "Social Tasks", description: "📸 Earn from Instagram tasks", bonus: "Complete Instagram tasks & earn", features: ["Like, comment & follow tasks", "Daily new tasks available"], link: "https://instapay.com/?ref=scalevance", withdrawMethod: "PayPal", withdrawLink: "https://www.paypal.com/", logo: "images/InstaPay.webp", badges: ["EASY", "Fast Pay"] },
  { name: "TikTokEarn", category: "Social Tasks", description: "🎵 Earn by creating TikTok content", bonus: "Get paid per video view", features: ["Create short videos", "Earn based on views"], link: "https://tiktokearn.com/?ref=scalevance", withdrawMethod: "MEXC", withdrawLink: "https://www.mexc.com/?shareCode=mexc-EXMA", logo: "images/TikTokEarn.webp", badges: ["NEW", "HOT"] },
  { name: "TweetPay", category: "Social Tasks", description: "🐦 Get paid for Twitter/X tasks", bonus: "Earn for tweets & retweets", features: ["Tweet & retweet tasks", "Engage with sponsored content"], link: "https://tweetpay.com/?ref=scalevance", withdrawMethod: "PayPal", withdrawLink: "https://www.paypal.com/", logo: "images/TweetPay.webp", badges: ["Bonus", "EASY"] },
  { name: "YouGet", category: "Social Tasks", description: "▶️ Earn from YouTube engagement", bonus: "Get paid for watching & subscribing", features: ["Watch videos & subscribe", "Like, comment & share tasks"], link: "https://youget.com/?ref=scalevance", withdrawMethod: "PayPal", withdrawLink: "https://www.paypal.com/", logo: "images/YouGet.webp", badges: ["TOP", "Trusted"] },
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
  'earn-crypto': {
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
  },
  'earn-social': {
    data: earnSocial,
    tag: "● EARN BY SOCIAL MEDIA",
    title: 'Get Paid for <span class="highlight">Social Media Tasks!</span>',
    subtitle: "Earn money by liking, following, sharing, and posting on social media platforms.",
    stats: ["📱 Social Tasks", "💰 Real Cash Rewards", "⚡ Fast Payouts"],
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
    // ---- BUILD BADGES (with fire icon for TOP / HOT) ----
    let badgesHtml = '';
    if (site.badges && site.badges.length > 0) {
      site.badges.forEach(badge => {
        let badgeClass = 'badge-bonus';

        if (badge === 'NEW') badgeClass = 'badge-new';
        if (badge === 'HOT' || badge === 'TOP' || badge === 'Popular') badgeClass = 'badge-popular';

        // TOP badge → fire icon
        if (badge === 'TOP') {
          badgesHtml += `
            <span class="badge ${badgeClass} badge-with-icon">
              <svg class="badge-icon" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M323.56 51.2c-20.8 19.3-39.58 39.59-56.22 59.97C240.08 73.62 206.28 35.53 168 0 69.74 91.17 0 209.96 0 281.6 0 408.85 100.29 512 224 512s224-103.15 224-230.4c0-53.27-51.98-163.14-124.44-230.4zm-19.47 340.65C282.43 407.01 255.72 416 226.86 416 154.71 416 96 368.26 96 290.75c0-38.61 24.31-72.63 72.79-130.75 6.93 7.98 98.83 125.34 98.83 125.34l58.63-66.88c4.14 6.85 7.91 13.55 11.27 19.97 27.35 52.19 15.81 118.97-33.43 153.42z"/>
              </svg>
              <span>${badge}</span>
            </span>`;
        }
        // HOT badge → fire icon
        else if (badge === 'HOT') {
          badgesHtml += `
            <span class="badge ${badgeClass} badge-with-icon">
              <svg class="badge-icon" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M323.56 51.2c-20.8 19.3-39.58 39.59-56.22 59.97C240.08 73.62 206.28 35.53 168 0 69.74 91.17 0 209.96 0 281.6 0 408.85 100.29 512 224 512s224-103.15 224-230.4c0-53.27-51.98-163.14-124.44-230.4zm-19.47 340.65C282.43 407.01 255.72 416 226.86 416 154.71 416 96 368.26 96 290.75c0-38.61 24.31-72.63 72.79-130.75 6.93 7.98 98.83 125.34 98.83 125.34l58.63-66.88c4.14 6.85 7.91 13.55 11.27 19.97 27.35 52.19 15.81 118.97-33.43 153.42z"/>
              </svg>
              <span>${badge}</span>
            </span>`;
        }
        // All other badges → plain
        else {
          badgesHtml += `<span class="badge ${badgeClass}">${badge}</span>`;
        }
      });
    }

    // ---- BUILD FEATURE LIST ----
    let featuresHtml = '';
    site.features.forEach(feature => {
      featuresHtml += `<li><i>🎁</i><span>${feature}</span></li>`;
    });

    // ---- BUILD CARD ----
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
// INIT - runs on every page
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  const currentPage = getCurrentPage();
  const config = PAGE_CONFIG[currentPage];

  if (!config) {
    console.warn('EFCAC: No config found for page:', currentPage);
    return;
  }

  // 1. Update hero content
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

  // 2. Show / hide tip bar
  const tipBar = document.getElementById('tipBar');
  if (tipBar && !config.showTip) tipBar.style.display = 'none';

  // 3. Update page title
  const titles = {
    'index': 'EFCAC – Earn Free Crypto!',
    'lux-sites': 'Lux Sites - EFCAC',
    'pick-sites': 'Pick Sites - EFCAC',
    'faucetmatrix-sites': 'FaucetMatrix Sites - EFCAC',
    'kong-sites': 'Kong Sites - EFCAC',
    'earn-crypto': 'Earn Crypto - EFCAC',
    'passive-income': 'Passive Income - EFCAC',
    'play-earn': 'Play & Earn - EFCAC',
    'earn-social': 'Earn By Social Media - EFCAC'
  };
  if (titles[currentPage]) document.title = titles[currentPage];

  // 4. Render cards (only if grid exists)
  const grid = document.getElementById('siteGrid');
  if (grid) renderCards(config.data, 'siteGrid');
});