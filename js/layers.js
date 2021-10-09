  addLayer("n", {
    name: "normal", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "N", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal("-30000000"),
    }},
    tabFormat: [
    ["display-text", () => `You have ${format(player.points)} points<br><br>`],
    "buyables",
    "upgrades",
    ],
    color: "#CCCCCC",
    requires: new Decimal(0), // Can be a function that takes requirement increases into account
    resource: "social credit :(", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    automate(){
      if (player.n.auto) {
        setBuyableAmount("n",11,tmp.n.buyables[11].canAfford?player.points.div(10).log(1.15).floor().add(1):getBuyableAmount("n",11))
      }
      if (player.n.auto2) {
        setBuyableAmount("n",12,tmp.n.buyables[12].canAfford?player.points.div(200).log(1.15).floor().add(1):getBuyableAmount("n",12))
      }
      if (player.n.auto3) {
        setBuyableAmount("n",13,tmp.n.buyables[13].canAfford?player.points.div(17500).log(1.15).floor().add(1):getBuyableAmount("n",13))
      }
      if (player.n.auto4) {
        setBuyableAmount("n",21,tmp.n.buyables[21].canAfford?player.points.div(1000000).log(1.15).floor().add(1):getBuyableAmount("n",21))
      }
      if (player.n.auto5) {
        setBuyableAmount("n",22,tmp.n.buyables[22].canAfford?player.points.div(70000000).log(1.15).floor().add(1):getBuyableAmount("n",22))
      }
      if (player.n.auto6) {
        setBuyableAmount("n",23,tmp.n.buyables[23].canAfford?player.points.div(1666666667).log(1.15).floor().add(1):getBuyableAmount("n",23))
      }
      if (player.n.auto7) {
        setBuyableAmount("n",31,tmp.n.buyables[31].canAfford?player.points.div(1e10).log(hasUpgrade("p",25)?1.75:2).floor().add(1):getBuyableAmount("n",31))
      }
    },
    layerShown(){return true},
    buyables: {
    11: {
        title: "<span style='color: #555555'><b>Workers</b></span>",
        cost(x) { return new Decimal(10).mul(new Decimal(1.15).pow(x)) },
        display() {return `A nice worker to collect points here and there.\nAmount Hired: ${format(getBuyableAmount(this.layer, this.id))}\nCost: ${format(this.cost())}`},
        canAfford() {return player.points.gte(this.cost())},
        buy() {
            player.points = player.points.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        effect(x) {
          prod = new Decimal(0.5).mul(x)
          return prod
        },
    },
    12: {
        title: "<span style='color: #009900'><b>Trees</b></span>",
        cost(x) { return new Decimal(200).mul(new Decimal(1.15).pow(x)) },
        display() {return `Money does grow on trees, but not during the winter.\nAmount Planted: ${format(getBuyableAmount(this.layer, this.id))}\nCost: ${format(this.cost())}`},
        canAfford() {return player.points.gte(this.cost())},
        buy() {
            player.points = player.points.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        unlocked() {return getBuyableAmount("n",11).gte(1)},
        effect(x) {
          prod = new Decimal(5).mul(x)
          return prod
        },
    },
    13: {
        title: "<span style='color: #DD9900'><b>Point Factories</b></span>",
        cost(x) { return new Decimal(17500).mul(new Decimal(1.15).pow(x)) },
        display() {return `Mass-produces points around the country! They do cause a bit of pollution, but this an idle game, so you shouldn't care.\nAmount Built: ${format(getBuyableAmount(this.layer, this.id))}\nCost: ${format(this.cost())}`},
        canAfford() {return player.points.gte(this.cost())},
        buy() {
            player.points = player.points.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        unlocked() {return getBuyableAmount("n",12).gte(1)},
        effect(x) {
          prod = new Decimal(400).mul(x)
          return prod
        },
    },
    21: {
        title: "<span style='color: #A35353'><b>Banks</b></span>",
        cost(x) { return new Decimal(1000000).mul(new Decimal(1.15).pow(x)) },
        display() {return `These store an abundance of points within, so we can withdraw some people's life savings and get rich!\nAmount Established: ${format(getBuyableAmount(this.layer, this.id))}\nCost: ${format(this.cost())}`},
        canAfford() {return player.points.gte(this.cost())},
        buy() {
            player.points = player.points.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        unlocked() {return getBuyableAmount("n",13).gte(1)},
        effect(x) {
          prod = new Decimal(65000).mul(x)
          return prod
        },
    },
    22: {
        title: "<span style='color: #0000FF'><b>Research Labs</b></span>",
        cost(x) { return new Decimal(70000000).mul(new Decimal(1.15).pow(x)) },
        display() {return `Your top scientists are trying to figure out how to make points artificially...\nAmount Created: ${format(getBuyableAmount(this.layer, this.id))}\nCost: ${format(this.cost())}`},
        canAfford() {return player.points.gte(this.cost())},
        buy() {
            player.points = player.points.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        unlocked() {return getBuyableAmount("n",21).gte(1)},
        effect(x) {
          prod = new Decimal(8765423).mul(x)
          return prod
        },
    },
    23: {
        title: "<span style='color: #BA00B7'><b>Point Portals</b></span>",
        cost(x) { return new Decimal(1666666667).mul(new Decimal(1.15).pow(x)) },
        display() {return `Opens the door to The Pointverse.\nAmount Opened: ${format(getBuyableAmount(this.layer, this.id))}\nCost: ${format(this.cost())}`},
        canAfford() {return player.points.gte(this.cost())},
        buy() {
            player.points = player.points.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        unlocked() {return getBuyableAmount("n",22).gte(1)},
        effect(x) {
          prod = new Decimal(223232332).mul(x)
          return prod
        },
    },
    31: {
        title: "<span style='color: #FF0000'><b>Time Accelerators</b></span>",
        cost(x) { return new Decimal(1e10).mul(new Decimal(hasUpgrade("p",25)?1.75:2).pow(x)) },
        display() {return `Speeds up time itself to give you a point multiplier! Now there's some REAL production.\nAmount Started: ${format(getBuyableAmount(this.layer, this.id))}\nCost: ${format(this.cost())}\nTime Speed: ${format(this.effect())}x`},
        canAfford() {return player.points.gte(this.cost())},
        buy() {
            player.points = player.points.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        unlocked() {return getBuyableAmount("n",23).gte(10)},
        effect(x) {
          prod = new Decimal(hasUpgrade("p",15)?1.4:1.25).pow(x)
          return prod
        },
    },
},
})
addLayer("p", {
    name: "prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#0070CC",
    requires: new Decimal(1e13), // Can be a function that takes requirement increases into account
    resource: "prestige points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if(hasUpgrade("p",12)) mult = mult.mul(3)
        if(hasAchievement("g",25)) mult = mult.mul(getBuyableAmount("n",31).root(5).add(1))
        mult = mult.mul(buyableEffect("p",12))
        if(hasAchievement("g",32)) mult = mult.mul(70)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return getBuyableAmount("n",31).gte(3) || player.p.total.gte(1)},
    branches: ["n"],
    upgrades: {
      11: {
        title: "Point Multiplier",
        description: "You figured out a way to gain more points! Multiply point gain by 10.",
        cost: new Decimal(1),
      },
      12: {
        title: "Prestige Enhancement",
        description: "Go big or go home! Triple prestige point gain and gain 4x more points.",
        cost: new Decimal(1),
        unlocked() {return hasUpgrade("p",11)}
      },
      13: {
        title: "Prestige Bonus",
        description: "Gain more points based on prestige points.",
        cost: new Decimal(10),
        unlocked() {return hasUpgrade("p",11)},
        effect(){return player.p.total.pow(0.5).add(1)},
        effectDisplay(){return `x${format(this.effect())}`}
      },
      14: {
        title: "Synergism be like",
        description: "Gain more points based on total buildings bought.",
        cost: new Decimal(100),
        unlocked() {return hasUpgrade("p",13)},
        effect(){return getBuyableAmount("n",11).add(getBuyableAmount("n",12)).add(getBuyableAmount("n",13)).add(getBuyableAmount("n",21)).add(getBuyableAmount("n",22)).add(getBuyableAmount("n",23)).root(1.5).add(1)},
        effectDisplay(){return `x${format(this.effect())}`}
      },
      15: {
        title: "It's About Time",
        description: "Increase the multiplier per time accelerator.<br>(1.25x -> 1.4x)",
        cost: new Decimal(5000),
        unlocked() {return hasUpgrade("p",13)},
      },
      21: {
        title: "Buyable Unlocks",
        description: "It's time to do some science. Unlock 2 new buyables.",
        cost: new Decimal(333333333),
        unlocked() {return hasUpgrade("p",15)},
      },
      22: {
        title: "Short & Simple",
        description: "Multiply point gain by 1e10.",
        cost: new Decimal(1e20),
        unlocked() {return hasUpgrade("p",21)},
      },
      23: {
        title: "Self-Synergy",
        description: "Gain more points based on points. This is getting meta.",
        cost: new Decimal(1e52),
        unlocked() {return hasUpgrade("p",21)},
        effect(){return player.points.pow(0.05).add(1)},
        effectDisplay(){return `x${format(this.effect())}`}
      },
      24: {
        title: "Virgin Upgrade Bonus",
        description: "Gain more points based on prestige upgrades bought. bad upgrade 1/10",
        cost: new Decimal(1e72),
        unlocked() {return hasUpgrade("p",23)},
        effect(){return new Decimal(2).pow(player.p.upgrades.length)},
        effectDisplay(){return `x${format(this.effect())}`}
      },
      25: {
        title: "Chad Scaling Decrease",
        description: "Time Accelerator scaling is decreased.<br>(2x -> 1.75x)",
        cost: new Decimal(1e81),
        unlocked() {return hasUpgrade("p",23)},
      },
    },
    buyables: {
    11: {
        title: "Point Doubler",
        cost(x) { return new Decimal(1000000).mul(new Decimal(10).pow(x)) },
        display() {return `Double point gain every time you buy this!\nTimes Bought: ${format(getBuyableAmount(this.layer, this.id))}\nCost: ${format(this.cost())}\nEffect: ${format(this.effect())}x points`},
        canAfford() {return player.p.points.gte(this.cost())},
        buy() {
            player.p.points = player.p.points.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        unlocked(){return hasUpgrade("p",21)},
        effect(x) {
          mult2 = new Decimal(x).gte(15)? new Decimal(2).pow(15).mul(new Decimal(1.2).pow(new Decimal(x).sub(15))):new Decimal(2).pow(x)
          return mult2
        },
    },
    12: {
        title: "Prestige Point Enhancement",
        cost(x) { return new Decimal(1e10).mul(new Decimal(100).pow(x)) },
        display() {return `Multiply prestige point gain by 1.5x every time you buy this!\nTimes Bought: ${format(getBuyableAmount(this.layer, this.id))}\nCost: ${format(this.cost())}\nEffect: ${format(this.effect())}x prestige points`},
        canAfford() {return player.p.points.gte(this.cost())},
        buy() {
            player.p.points = player.p.points.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        unlocked(){return hasUpgrade("p",21)},
        effect(x) {
          mult2 = new Decimal(x).gte(20)? new Decimal(1.5).pow(20).mul(new Decimal(1.05).pow(new Decimal(x).sub(20))):new Decimal(1.5).pow(x)
          return mult2
        },
    },
},
      milestones: {
    0: {
        requirementDescription: "100 prestige points",
        effectDescription: "Autobuy Workers, Trees, and Point Factories.",
        done() { return player.p.points.gte(100) },
        toggles: [
          ["n","auto"],
          ["n","auto2"],
          ["n","auto3"],
        ]
    },
    1: {
        requirementDescription: "1,000,000 prestige points",
        effectDescription: "Autobuy Banks, Research Labs, and Point Portals.",
        done() { return player.p.points.gte(100) },
        toggles: [
          ["n","auto4"],
          ["n","auto5"],
          ["n","auto6"],
        ]
    },
    2: {
        requirementDescription: "1e11 prestige points",
        effectDescription: "Autobuy Time Accelerators.",
        done() { return player.p.points.gte(1e11) },
        toggles: [
          ["n","auto7"],
        ]
    },
  },
})