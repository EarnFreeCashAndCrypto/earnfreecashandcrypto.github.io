// ============================================
// EFCAC - UNIVERSAL SCRIPT (Eatly Purple Theme)
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
   { name: "Getlike", category: "Social Tasks", description: "💸 6.1M+ users | 1.2B+ tasks completed", bonus: "Earn real money for social tasks", features: ["Like, follow, comment & repost tasks", "Payouts every 48h - min. $2", "Earn 50% from referral commissions"], link: "https://getlike.io/en/?ref=1056338", withdrawMethod: "PayPal", withdrawLink: "https://www.paypal.com/", logo: "images/Getlike.webp", badges: ["TOP", "Trusted"] },
   { name: "Aviso", category: "Social Tasks", description: "💸 8+ years running | 4M+ users", bonus: "Earn for microtasks & surveys", features: ["Visit sites, test products, take surveys", "Tasks available on PC & mobile"], link: "https://aviso.bz/?r=ytman0164", withdrawMethod: "Crypto", withdrawLink: "#", logo: "images/aviso.webp", badges: ["Trusted", "Bonus"] },
   { name: "Vboost", category: "Social Tasks", description: "💸 Earn from social content engagement", bonus: "Earn for engaging with posts", features: ["Swipe through sponsored posts", "Earn per engagement"], link: "https://vboost.ru/r/bAYx57Cl", withdrawMethod: "Crypto", withdrawLink: "#", logo: "images/vboost.webp", badges: ["NEW", "EASY"] },
   { name: "FollowFast", category: "Social Tasks", description: "📱 Get paid to follow & engage!", bonus: "Earn by following social accounts", features: ["Follow, like & share tasks", "Multiple social platforms supported"], link: "https://followfast.com", withdrawMethod: "PayPal", withdrawLink: "https://www.paypal.com/", logo: "images/FollowFast.webp", badges: ["NEW", "EASY"] },
   { name: "SocialEarn", category: "Social Tasks", description: "💰 Monetize your social media presence", bonus: "Get paid for posting content", features: ["Post sponsored content", "Earn from engagement"], link: "https://socialearn.com", withdrawMethod: "MEXC", withdrawLink: "https://www.mexc.com/?shareCode=mexc-EXMA", logo: "images/SocialEarn.webp", badges: ["TOP", "Bonus"] },
   { name: "InstaPay", category: "Social Tasks", description: "📸 Earn from Instagram tasks", bonus: "Complete Instagram tasks & earn", features: ["Like, comment & follow tasks", "Daily new tasks available"], link: "https://instapay.com", withdrawMethod: "PayPal", withdrawLink: "https://www.paypal.com/", logo: "images/InstaPay.webp", badges: ["EASY", "Fast Pay"] },
   { name: "TikTokEarn", category: "Social Tasks", description: "🎵 Earn by creating TikTok content", bonus: "Get paid per video view", features: ["Create short videos", "Earn based on views"], link: "https://tiktokearn.com", withdrawMethod: "MEXC", withdrawLink: "https://www.mexc.com/?shareCode=mexc-EXMA", logo: "images/TikTokEarn.webp", badges: ["NEW", "HOT"] },
   { name: "TweetPay", category: "Social Tasks", description: "🐦 Get paid for Twitter/X tasks", bonus: "Earn for tweets & retweets", features: ["Tweet & retweet tasks", "Engage with sponsored content"], link: "https://tweetpay.com", withdrawMethod: "PayPal", withdrawLink: "https://www.paypal.com/", logo: "images/TweetPay.webp", badges: ["Bonus", "EASY"] },
   { name: "YouGet", category: "Social Tasks", description: "▶️ Earn from YouTube engagement", bonus: "Get paid for watching & subscribing", features: ["Watch videos & subscribe", "Like, comment & share tasks"], link: "https://youget.com", withdrawMethod: "PayPal", withdrawLink: "https://www.paypal.com/", logo: "images/YouGet.webp", badges: ["TOP", "Trusted"] },
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
// BADGE SYSTEM — Color-coded & Icon-driven
// ============================================
const BADGE_MAP = {
  'TOP':         { class: 'badge-top',     icon: 'fire'   },
  'HOT':         { class: 'badge-hot',     icon: 'fire'   },
  'NEW':         { class: 'badge-new',     icon: 'sparkle'},
  'Trusted':     { class: 'badge-trusted', icon: 'shield' },
  'EASY':        { class: 'badge-easy',    icon: 'bolt'   },
  'Contest':     { class: 'badge-contest', icon: 'trophy' },
  'Bonus':       { class: 'badge-bonus',   icon: 'gift'   },
  'GIFT':        { class: 'badge-gift',    icon: 'gift'   },
  'Popular':     { class: 'badge-popular', icon: 'star'   },
  'Fast Pay':    { class: 'badge-fast',    icon: 'bolt'   },
  'Boost':       { class: 'badge-boost',   icon: 'rocket' },
  'Play':        { class: 'badge-play',    icon: 'gamepad'},
  '7 Bonuses':   { class: 'badge-bonus',   icon: 'gift'   },
  '9 Bonuses':   { class: 'badge-bonus',   icon: 'gift'   },
  '11 Bonuses':  { class: 'badge-bonus',   icon: 'gift'   },
  '12 Cryptos':  { class: 'badge-trusted', icon: 'shield' },
  'Available':   { class: 'badge-fast',    icon: 'bolt'   },
};

const ICONS = {
  fire:    '<path d="M323.56 51.2c-20.8 19.3-39.58 39.59-56.22 59.97C240.08 73.62 206.28 35.53 168 0 69.74 91.17 0 209.96 0 281.6 0 408.85 100.29 512 224 512s224-103.15 224-230.4c0-53.27-51.98-163.14-124.44-230.4z"/>',
  sparkle: '<path d="M224 0l50 150 150 50-150 50-50 150-50-150L24 200l150-50z"/>',
  shield:  '<path d="M256 0L0 96v128c0 141.4 109.3 273.3 256 320 146.7-46.7 256-178.6 256-320V96L256 0zm0 464c-113.3-34.7-208-141.3-208-240V120l208-78 208 78v104c0 98.7-94.7 205.3-208 240z"/>',
  bolt:    '<path d="M296 0L96 288h128l-32 224 200-288H264z"/>',
  trophy:  '<path d="M448 64h-64V32c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32v32H0v64c0 70.7 57.3 128 128 128h8.6c17.5 50.6 63.1 88.7 119.4 96.5V448H160c-17.7 0-32 14.3-32 32v32h224v-32c0-17.7-14.3-32-32-32h-96v-87.5c56.3-7.8 101.9-45.9 119.4-96.5H448c35.3 0 64-28.7 64-64v-64h-64zM128 192c-35.3 0-64-28.7-64-64V96h64v96zm320-64c0 35.3-28.7 64-64 64V96h64v32z"/>',
  gift:    '<path d="M464 144h-96.3c5.2-10.3 8.3-21.8 8.3-34 0-43.6-35.4-79-79-79-24.7 0-46.7 11.4-61 29.1C221.7 42.4 199.7 31 175 31c-43.6 0-79 35.4-79 79 0 12.2 3.1 23.7 8.3 34H16c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h16v240c0 17.7 14.3 32 32 32h352c17.7 0 32-14.3 32-32V240h16c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16zM297 110c0 17.6-14.4 32-32 32s-32-14.4-32-32 14.4-32 32-32 32 14.4 32 32zM175 110c0-17.6 14.4-32 32-32s32 14.4 32 32-14.4 32-32 32-32-14.4-32-32zM64 192h160v64H64v-64zm16 96h144v192H80V288zm288 192H272V288h144v192zm16-224H240v-64h160v64z"/>',
  star:    '<path d="M256 0l79 173 191 22-142 132 38 188-166-96-166 96 38-188L-14 195l191-22z"/>',
  rocket:  '<path d="M256 0c-64 0-128 64-128 160v32H96c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h32v32c0 35.3 28.7 64 64 64h128c35.3 0 64-28.7 64-64v-32h32c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32h-32v-32c0-96-64-160-128-160zM192 160c0-35.3 28.7-64 64-64s64 28.7 64 64v32H192v-32zm64 288c-35.3 0-64-28.7-64-64h128c0 35.3-28.7 64-64 64z"/>',
  gamepad: '<path d="M480 96H32C14.3 96 0 110.3 0 128v256c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32zM160 320h-48v48H80v-48H32v-32h48v-48h32v48h48v32zm160 32c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm64-96c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"/>'
};

function buildBadges(badges) {
  if (!badges || !badges.length) return '';
  return badges.map(badge => {
    const meta = BADGE_MAP[badge] || { class: 'badge-default', icon: null };
    const iconSvg = meta.icon
      ? `<svg class="badge-icon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${ICONS[meta.icon]}</svg>`
      : '';
    return `<span class="badge ${meta.class}">${iconSvg}<span>${badge}</span></span>`;
  }).join('');
}

// ============================================
// DETECT CURRENT PAGE
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
    const badgesHtml = buildBadges(site.badges);

    let featuresHtml = '';
    site.features.forEach(feature => {
      featuresHtml += `<li><i>🎁</i><span>${feature}</span></li>`;
    });

    const card = document.createElement('div');
    card.className = 'site-card';
    card.innerHTML = `
      <div class="card-header">
        <img src="${site.logo}" alt="${site.name}" class="card-logo" loading="lazy" onerror="this.src='https://placehold.co/47x47/7C3AED/fff?text=' + encodeURIComponent('${site.name.charAt(0)}')">
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
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  const currentPage = getCurrentPage();
  const config = PAGE_CONFIG[currentPage];

  if (!config) {
    console.warn('EFCAC: No config found for page:', currentPage);
    return;
  }

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

  const tipBar = document.getElementById('tipBar');
  if (tipBar && !config.showTip) tipBar.style.display = 'none';

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

  const grid = document.getElementById('siteGrid');
  if (grid) renderCards(config.data, 'siteGrid');
});