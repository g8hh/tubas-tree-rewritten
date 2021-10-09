addLayer("g", {
    name: "achievements", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "*", // This appears on the layer's node. Default is the id with the first letter capitalized
    color: "#F5754E",
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    tooltip:"Achievements",
    resource: "achievements", // Name of prestige currency
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    row: "side", // Row the layer is in on the tree (0 is the first row)
tabFormat: [
    ["display-text", () => `You have ${player.g.achievements.length}/16 achievements (${format(new Decimal(player.g.achievements.length).div(16).mul(100))}%)<br>`],
    "achievements"
],
    layerShown(){return true},
  achievements: {
    11: {
        name: "Grandma?",
      done(){return getBuyableAmount("n",11).gte(1)},
      tooltip:"Hire a Worker."
    },
    12: {
        name: "Your Parents Lied",
      done(){return getBuyableAmount("n",12).gte(1)},
      tooltip:"Plant a Tree."
    },
    13: {
        name: "Nice",
      done(){return player.points.gte(6969)},
      tooltip:"Reach 6,969 points."
    },
    14: {
        name: "Pollution",
      done(){return getBuyableAmount("n",13).gte(1)},
      tooltip:"Build a Point Factory."
    },
    15: {
        name: "Stonks!",
      done(){return getBuyableAmount("n",21).gte(1)},
      tooltip:"Establish a Bank."
    },
    16: {
        name: "Finally<br><br><br>Obamium",
      done(){return getBuyableAmount("n",22).gte(1)},
      tooltip:"Create a Research Lab."
    },
    21: {
        name: "Pether Nortal",
      done(){return getBuyableAmount("n",23).gte(1)},
      tooltip:"Open a Point Portal."
    },
    22: {
        name: "I Am Speed",
      done(){return getBuyableAmount("n",31).gte(1)},
      tooltip:"Start a Time Accelerator."
    },
    23: {
        name: "Prestigious",
      done(){return player.p.points.gte(1)},
      tooltip:"Prestige."
    },
    24: {
        name: "Super Sonic Racing",
      done(){return getBuyableAmount("n",31).gte(11)},
      tooltip:"Get a time speed of 10x. Reward: Gain 2x more points."
    },
    25: {
        name: "Vacillation",
      done(){return player.points.gte(1e18) && getBuyableAmount("n",31).lt(1)},
      tooltip:"Reach 1e18 points without any Time Accelerators. Reward: Time Accelerators boost prestige point gain at a reduced rate."
    },
    26: {
        name: "Ooh, buyables!",
      done(){return hasUpgrade("p",21)},
      tooltip:"Unlock Prestige Buyables."
    },
    31: {
        name: "Nice^10",
      done(){return player.points.gte(2.702e38)},
      tooltip:"Reach 2.70e38 points."
    },
    32: {
        name: "Super-Prestigious",
      done(){return player.points.gte(2.702e38)},
      tooltip:"Buy 8 prestige upgrades. Reward: Gain 70x more prestige points."
    },
    33: {
        name: "Point Planet",
      done(){return player.points.gte(1e160)},
      tooltip:"Reach 1e160 points."
    },
    34: {
        name: "Infinity?",
      done(){return player.points.gte(1.797e308)},
      tooltip:"Reach 1.79e308 points."
    },
},
})