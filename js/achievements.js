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
    ["display-text", () => `You have ${player.g.achievements.length}/30 achievements (${format(new Decimal(player.g.achievements.length).div(30).mul(100))}%)<br><br>`],
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
      done(){return hasUpgrade("p",23)},
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
    35: {
        name: "Beyond",
      done(){return player.a.points.gte(1)},
      tooltip:"Ascend."
    },
    36: {
        name: "Passive Generation",
      done(){return hasMilestone("a",3)},
      tooltip:"Begin to passively generate prestige points."
    },
    41: {
        name: "Inflation 101",
      done(){return hasUpgrade("a",21)},
      tooltip:"Unlock the 3rd prestige buyable."
    },
    42: {
        name: "Boosted",
      done(){return player.b.points.gte(1)},
      tooltip:"Buy a booster."
    },
    43: {
        name: "Point Galaxy",
      done(){return player.points.gte("1e3000")},
      tooltip:"Reach 1e3000 points."
    },
    44: {
        name: "Today's Subject: Slavery",
      done(){return player.points.gte("1e60") && player.n.buyables[12] == "0" && player.n.buyables[13] == "0" && player.n.buyables[21] == "0" && player.n.buyables[22] == "0" && player.n.buyables[23] == "0" && player.n.buyables[31] == "0" && player.p.buyables[11] == "0" && player.p.buyables[12] == "0" && player.p.buyables[13] == "0"},
      tooltip:"Reach 1e60 points with no buildings except Workers, no Time Accelerators, and no prestige buyables. Reward: Gain more prestige points and ascension points based on Workers bought."
    },
    45: {
        name: "Do you even bend time bro?",
      done(){return new Decimal(1.4).pow(player.n.buyables[31]).gte("1e2000")},
      tooltip:"Get a time speed of 1e2000x."
    },
    46: {
        name: "They Matter After All",
      done(){return hasUpgrade("a",25)},
      tooltip:"Unlock Tokens."
    },
    51: {
        name: "That's a lot of tokens",
      done(){return player.to.ptokens.gte(1e10)},
      tooltip:"Reach 1e10 prestige tokens."
    },
    52: {
        name: "Nonlinearity",
      done(){return hasUpgrade("a",33)},
      tooltip:"Unlock Ascension Tokens."
    },
    53: {
        name: "Already???",
      done(){return player.a.points.gte("1.797e308")},
      tooltip:"Reach 1.79e308 ascension points."
    },
    54: {
        name: "Local Point Group",
      done(){return player.points.gte("1e10000")},
      tooltip:"Reach 1e10,000 points. Reward: Gain more points based on ascension tokens."
    },
    55: {
        name: "Token Boom",
      done(){return hasUpgrade("to",12)},
      tooltip:"Buy the second token upgrade."
    },
    56: {
        name: "The time has come!",
      done(){return hasUpgrade("p",35)},
      tooltip:"Buy Inflation I."
    },
},
})

addLayer("to", {
    name: "tokens", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "◯", // This appears on the layer's node. Default is the id with the first letter capitalized
    color: "#1D913C",
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    ptokens: new Decimal(0),
    atokens: new Decimal(0),
    atotal: new Decimal(0),
    }},
    tabFormat: [
    ["display-text", () => `<span style="color: #0070CC">You have ${format(player.to.ptokens)} prestige tokens, multiplying prestige point gain by ${format(player.to.ptokens.pow(new Decimal(20).add(buyableEffect("to",12))).add(1))}x</span><br><span style="color: #0070CC">(${format(new Decimal(hasUpgrade("to",12) ? new Decimal(1.3).pow(player.g.achievements.length) : player.g.achievements.length).mul(buyableEffect("to",11)).pow(hasUpgrade("a",31)?1.2:1))}/sec)</span><br><span style="color: #0070CC">You gain more prestige tokens based on the amount of achievements you have</span>`],
    () => hasUpgrade("a",33) ? ["display-text", `<span style="color: #D2D900">You have ${format(player.to.atokens)} ascension tokens</span><br><span style="color: #D2D900">By default, you gain 2 ascension tokens for every achievement you have in Row 5+</span>`] : "",
    "buyables",
    "upgrades",
     () => hasUpgrade("a",33) ? ["display-text", `<b>When you respec, you will not get your ascension tokens back!</b>`] : "",
    "clickables",
],
    tooltip:"Tokens",
    resource: "h", // Name of prestige currency
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    row: "side", // Row the layer is in on the tree (0 is the first row)
    position: 1,
    layerShown(){return hasUpgrade("a",25)},
    update(diff){
      if(hasUpgrade("a",25)) player.to.ptokens = player.to.ptokens.add(new Decimal(hasUpgrade("to",12) ? new Decimal(1.3).pow(player.g.achievements.length) : player.g.achievements.length).mul(buyableEffect("to",11)).pow(hasUpgrade("a",31)?1.2:1).mul(diff))
      if(hasUpgrade("a",33)) player.to.atokens = player.to.atokens.add(new Decimal(player.g.achievements.length).sub(24).mul(2).mul(hasUpgrade("to",11)?3:1).mul(diff))
      player.to.atokens = player.to.atokens.min(100000)
      // player.points.gte("1e3000") ? document.getElementById("taxes").style.display = "" : document.getElementById("taxes").style.display = "none";
    },
    buyables: {
    11: {
        title: "Faster Generation",
        cost(x) { return new Decimal(100).mul(new Decimal(8).pow(x)) },
        display() {return `Quadruple prestige token gain every time you buy this!\nTimes Bought: ${format(getBuyableAmount(this.layer, this.id))}\nCost: ${format(this.cost())} prestige tokens\nEffect: ${format(this.effect())}x prestige tokens`},
        canAfford() {return player.to.ptokens.gte(this.cost())},
        buy() {
            player.to.ptokens = player.to.ptokens.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        effect(x) {
          mult2 = new Decimal(4).pow(x)
          return mult2
        },
    },
    12: {
        title: "Better Exponent",
        cost(x) { return new Decimal(1000).mul(new Decimal(9).pow(x)) },
        display() {return `Increase the exponent in the prestige token multiplier by +5 every time you buy this!\nTimes Bought: ${format(getBuyableAmount(this.layer, this.id))}\nCost: ${format(this.cost())} prestige tokens\nEffect: +${format(this.effect())} exponent`},
        canAfford() {return player.to.ptokens.gte(this.cost())},
        buy() {
            player.to.ptokens = player.to.ptokens.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        effect(x) {
          mult2 = new Decimal(x).mul(5)
          return mult2
        },
    },
    21: {
        title: "More AP",
        cost(x) { return new Decimal(2).mul(new Decimal(2).pow(x)).mul(new Decimal(4).pow(getBuyableAmount("to",22))) },
        display() {return `Multiply ascension point gain by 1e10 every time you buy this!\nTimes Bought: ${format(getBuyableAmount(this.layer, this.id))}\nCost: ${format(this.cost())} ascension tokens\nEffect: ${format(this.effect())}x ascension points`},
        canAfford() {return player.to.atokens.gte(this.cost())},
        buy() {
            player.to.atokens = player.to.atokens.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        unlocked(){return hasUpgrade("a",33)},
        effect(x) {
          mult2 = new Decimal(1e10).pow(x)
          return mult2
        },
    },
    22: {
        title: "Better Exponent",
        cost(x) { return new Decimal(3).mul(new Decimal(2).pow(x)).mul(new Decimal(4).pow(getBuyableAmount("to",21))) },
        display() {return `Divide the booster cost by 1e100 every time you buy this!\nTimes Bought: ${format(getBuyableAmount(this.layer, this.id))}\nCost: ${format(this.cost())} ascension tokens\nEffect: /${format(this.effect())} booster cost`},
        canAfford() {return player.to.atokens.gte(this.cost())},
        buy() {
            player.to.atokens = player.to.atokens.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        unlocked(){return hasUpgrade("a",33)},
        effect(x) {
          mult2 = new Decimal(1e100).pow(x)
          return mult2
        },
    },
  },
  upgrades: {
      11: {
        title: "I'm tired of waiting...",
        description: "Then wait less! Gain 3x more ascension tokens.",
        cost: new Decimal(200),
        unlocked() {return hasUpgrade("a",33)},
        currencyDisplayName: "ascension tokens",
        currencyInternalName: "atokens",
        currencyLayer: "to",
      },
      12: {
        title: "more waiting lol",
        description: "Make the achievements boost to prestige tokens stronger.",
        cost: new Decimal(1e14),
        unlocked() {return hasUpgrade("to",11)},
        currencyDisplayName: "prestige tokens",
        currencyInternalName: "ptokens",
        currencyLayer: "to",
      },
  },
  clickables: {
    11: {
        display() {return `Respec ascension token buyables`},
        onClick() {return respecTokenBuyables()},
        canClick() {return getBuyableAmount("to",21) >= 1 || getBuyableAmount("to",22) >= 1},
        unlocked() {return hasUpgrade("a",33)}
    },
  },
})

function respecTokenBuyables() {
    player.to.buyables[21] = new Decimal(0)
    player.to.buyables[22] = new Decimal(0)
}