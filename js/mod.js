let modInfo = {
	name: "Tuba's Tree Rewritten",
	id: "tt_rewrite",
	author: "randomtuba",
	pointsName: "points",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (10), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.1",
	name: "Transcension",
}

let changelog = `<h1>Tuba's Tree Rewritten Changelog</h1><br><span style="color:red;"><b>WARNING: SPOILERS!</b></span><br><br>
  <span style="color:#C600D8;"><b style="font-size: 20px;">v0.1: Transcension</b><br>
-Added a new prestige layer, Transcension!<br>
-Added 5 new prestige upgrades and 2 new ascension upgrades.<br>
-Added 2 Ascension Buyables (yes, they exist now!).<br>
-Added 9 transcension upgrades and 9 transcension milestones.<br>
-Added 12 achievements (2 new rows!).<br>
-Added Super-Boosters, which, you guessed it, boost boosters.<br>
-Added Shards, which give a multiplier to previous currencies, and are generated with a polynomial growth system!<br>
-Added 3 new booster upgrades.<br>
-Prestige tokens are now capped at 1e45.<br>
-Made the changelog look more appealing.<br><br><br></span>
  <span style="color:#D2D900;"><b>v0.0.2.1</b><br>
-Fixed a bug where the game crashes when you open the console.<br>
-Fixed the v0.0.2 update info in the changelog.<br>
-Ascension tokens are now capped at 100,000.<br><br><br>
  <b style="font-size: 20px;">v0.0.2: Ascension</b><br>
-Un-abandoned the game.<br>
-Added a new prestige layer, Ascension!<br>
-Added 5 new prestige upgrades and a 3rd prestige buyable.<br>
-Added 13 ascension upgrades.<br>
-Added 5 ascension milestones.<br>
-Added 14 achievements.<br>
-Added Boosters, which multiply points, and later, other currencies!<br>
-Added prestige tokens and ascension tokens, contained within a new side layer!<br>
-Fixed some issues with the previous version.<br>
-Added 6 booster upgrades.<br>
-Added 4 token buyables (2 for prestige tokens, 2 for ascension tokens).<br>
-Added a website icon (the TT:R logo).<br><br><br></span>
  <span style="color:#0070CC;"><b>v0.0.1.1</b><br>
-Fixed a bug where the 2nd milestone could be obtained with 100 prestige points.<br><br><br>
	<b style="font-size: 20px;">v0.0.1: Prestige</b><br>
-Released the game.<br>
-Added 6 buildings: Workers, Trees, Point Factories, Banks, Research Labs, and Point Portals.<br>
-Added 10 prestige upgrades.<br>
-Added 2 prestige buyables.<br>
-Added 3 prestige milestones.<br>
-Added 16 achievements. Some of them have rewards!<br>
-Added Time Accelerators! Time Accelerators multiply your point production by speeding up time itself.<br>
-You have -30,000,000 social credit, execution date September 26th<br><br><br></span>`

let winText = `@randomtuba#8432 You litte f**ker<br>You made a shit of piece with your trash rewrite it's f**King Bad this trash game I will become back my money I hope you will in your next time a cow on a trash farm you sucker`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(0)
  gain = new Decimal(gain.add(buyableEffect("n",11).add(buyableEffect("n",12)).add(buyableEffect("n",13)).add(buyableEffect("n",21)).add(buyableEffect("n",22)).add(buyableEffect("n",23))))
  gain = gain.mul(buyableEffect("n",31))
  if(hasUpgrade("p",11)) gain = gain.mul(10)
  if(hasUpgrade("p",12)) gain = gain.mul(4)
  if(hasUpgrade("p",13)) gain = gain.mul(upgradeEffect("p",13))
  if(hasUpgrade("p",14)) gain = gain.mul(upgradeEffect("p",14))
  if(hasAchievement("g",24)) gain = gain.mul(2)
  gain = gain.mul(buyableEffect("p",11))
  if(hasUpgrade("p",22)) gain = gain.mul(1e10)
  if(hasUpgrade("p",23)) gain = gain.mul(upgradeEffect("p",23))
  if(hasUpgrade("p",24)) gain = gain.mul(upgradeEffect("p",24))
  if(hasUpgrade("a",11)) gain = gain.mul(100)
  gain = gain.mul(buyableEffect("p",13))
  gain = gain.mul(new Decimal(4).mul(hasUpgrade("b",11)?2:1).mul(hasUpgrade("b",12)?upgradeEffect("b",12):1).mul(hasUpgrade("b",23)?upgradeEffect("b",23):1).mul(player.sb.points.add(1).pow(hasUpgrade("b",31)?7:5)).mul(hasUpgrade("b",33)?upgradeEffect("b",33).eff:1).pow(player.b.points).pow(hasUpgrade("b",21)?2:1))
  if(hasAchievement("g",54)) gain = gain.mul(player.to.atokens.pow(10).add(1))
  gain = gain.mul(player.t.shards.pow(hasUpgrade("t",21)?10:0.5).add(1))
  gain = gain.mul(buyableEffect("a",11))
  if(gain.gte("1e3000")) gain = hasUpgrade("p",32) ? (hasUpgrade("a",32) ? gain.pow(0.86).mul("1e420") : gain.pow(0.85).mul("1e450")) : gain.pow(0.75).mul("1e750")
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [`<span>Current Endgame: 1e500,000 points</span>`,
        () => player.points.gte("1e3000") ? '<span style="color:orange">Your points have been (softcapped) due to taxes</span>' : ''
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("1e500000"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}