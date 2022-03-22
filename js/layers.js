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
    tooltip: "Normal",
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
        title: "<span style='color: #BB6600'><b>Point Factories</b></span>",
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
    passiveGeneration(){
      return hasMilestone("a", 3) ? 1 : 0
    },
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
        if(hasUpgrade("a",12)) mult = mult.mul(upgradeEffect("a",12))
        if(hasAchievement("g",34)) mult = mult.mul(new Decimal(getBuyableAmount("n",11)).add(1))
        if(hasUpgrade("b",13)) mult = mult.mul(new Decimal(4).mul(hasUpgrade("b",11)?2:1).mul(hasUpgrade("b",12)?upgradeEffect("b",12):1).mul(hasUpgrade("b",23)?upgradeEffect("b",23):1).mul(player.sb.points.add(1).pow(hasUpgrade("b",31)?7:5)).mul(hasUpgrade("b",33)?upgradeEffect("b",33).eff:1).pow(player.b.points).pow(hasUpgrade("b",21)?2:1))
        if(hasUpgrade("p",33)) mult = mult.mul(upgradeEffect("p",33))
        mult = mult.mul(player.to.ptokens.pow(new Decimal(20).add(buyableEffect("to",12))).add(1))
        mult = mult.mul(player.t.shards.pow(hasUpgrade("t",21)?10:0.5).add(1))
        if(hasUpgrade("t",11)) mult = mult.mul(1000)
        mult = mult.mul(buyableEffect("a",12))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        let exp = new Decimal(1)
        if(hasUpgrade("p",31)) exp = exp.mul(1.015)
        return exp
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    automate(){
      if (player.p.auto) {
        setBuyableAmount("p",11,tmp.p.buyables[11].canAfford?player.p.points.div(1000000).log(10).floor().add(1):getBuyableAmount("p",11))
      }
      if (player.p.auto2) {
        setBuyableAmount("p",12,tmp.p.buyables[12].canAfford?player.p.points.div(1e10).log(100).floor().add(1):getBuyableAmount("p",12))
      }
      if (player.p.auto3) {
        setBuyableAmount("p",13,tmp.p.buyables[13].canAfford?player.p.points.div("1e600").log(1e10).floor().add(1):getBuyableAmount("p",13))
      }
    },
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return getBuyableAmount("n",31).gte(3) || player.p.total.gte(1) || player.a.total.gte(1) || player.t.total.gte(1)},
    doReset(layer){
      if(layer=="p")return
        let keep = []
      if (layer=="a") {
        if(!hasMilestone("a",0)) player.n.auto = false;
        if(!hasMilestone("a",0)) player.n.auto2 = false;
        if(!hasMilestone("a",0)) player.n.auto3 = false;
        if(!hasMilestone("a",0)) player.n.auto4 = false;
        if(!hasMilestone("a",0)) player.n.auto5 = false;
        if(!hasMilestone("a",0)) player.n.auto6 = false;
        if(!hasMilestone("a",0)) player.n.auto7 = false;
        if(hasMilestone("a",0)) keep.push("milestones");
        if(hasMilestone("a",1)) keep.push("upgrades");
      }
      if (layer=="b") {
        if(hasMilestone("b",0)) keep.push("milestones");
        if(hasMilestone("b",0)) keep.push("upgrades");
      }
      if (layer=="t") {
        if (!hasMilestone("t",0)) {
        for (let i = 1; i < 8; i++) {
          if (i == 1) player.n.auto = false
          else player.n[`auto${i}`] = false
        }
        for (let i = 1; i < 4; i++) {
          if (i == 1) player.p.auto = false
          else player.p[`auto${i}`] = false
        }
      }
        if(hasMilestone("t",0)) keep.push("milestones");
        if(hasMilestone("t",1)) keep.push("upgrades");
      }
      if (layer=="sb") {
        keep.push("milestones");
        keep.push("upgrades");
      }
      layerDataReset("p",keep)
    },
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
        unlocked() {return hasUpgrade("p",11) || player.a.total.gte(1)}
      },
      13: {
        title: "Prestige Bonus",
        description: "Gain more points based on total prestige points.",
        cost: new Decimal(10),
        unlocked() {return hasUpgrade("p",11) || player.a.total.gte(1)},
        effect(){return player.p.total.pow(hasUpgrade("a",15)?0.55:0.5).add(1)},
        effectDisplay(){return `x${format(this.effect())}`}
      },
      14: {
        title: "Synergism be like",
        description: "Gain more points based on total buildings bought.",
        cost: new Decimal(100),
        unlocked() {return hasUpgrade("p",13) || player.a.total.gte(1)},
        effect(){return getBuyableAmount("n",11).add(getBuyableAmount("n",12)).add(getBuyableAmount("n",13)).add(getBuyableAmount("n",21)).add(getBuyableAmount("n",22)).add(getBuyableAmount("n",23)).root(1.5).add(1)},
        effectDisplay(){return `x${format(this.effect())}`}
      },
      15: {
        title: "It's About Time",
        description: "Increase the multiplier per time accelerator.<br>(1.25x -> 1.4x)",
        cost: new Decimal(5000),
        unlocked() {return hasUpgrade("p",13) || player.a.total.gte(1)},
      },
      21: {
        title: "Buyable Unlocks",
        description: "It's time to do some science. Unlock 2 new buyables.",
        cost: new Decimal(333333333),
        unlocked() {return hasUpgrade("p",15) || player.a.total.gte(1)},
      },
      22: {
        title: "Short & Simple",
        description: "Multiply point gain by 1e10.",
        cost: new Decimal(1e20),
        unlocked() {return hasUpgrade("p",21) || player.a.total.gte(1)},
      },
      23: {
        title: "Self-Synergy",
        description: "Gain more points based on points. This is getting meta.",
        cost: new Decimal(1e51),
        unlocked() {return hasUpgrade("p",21) || player.a.total.gte(1)},
        effect(){return player.points.pow(hasUpgrade("p",35)?0.06:0.05).add(1)},
        effectDisplay(){return `x${format(this.effect())}`}
      },
      24: {
        title: "Virgin Upgrade Bonus",
        description: "Gain more points based on prestige upgrades bought. bad upgrade 1/10",
        cost: new Decimal(1e72),
        unlocked() {return hasUpgrade("p",23) || player.a.total.gte(1)},
        effect(){return new Decimal(hasUpgrade("a",14)?10:2).pow(player.p.upgrades.length)},
        effectDisplay(){return `x${format(this.effect())}`}
      },
      25: {
        title: "Chad Scaling Decrease",
        description: "Time Accelerator scaling is decreased.<br>(2x -> 1.75x)",
        cost: new Decimal(1e81),
        unlocked() {return hasUpgrade("p",23) || player.a.total.gte(1)},
      },
      31: {
        title: "Prestige Exponential",
        description: "It's time to pull out the exponents. Prestige points ^1.015!",
        cost: new Decimal("1e1550"),
        unlocked() {return hasUpgrade("a",23)},
      },
      32: {
        title: "Yoshi Commits Tax Fraud",
        description: "<i>Note: Be prepared to negotiate with the IRS.</i><br>The taxes softcap is weaker.",
        cost: new Decimal("1e1600"),
        unlocked() {return hasUpgrade("a",23)},
      },
      33: {
        title: "Reverse Bonus",
        description: "<i>'no u'</i><br><i>-SweatyJamal2013</i><br>Gain more prestige points based on points.",
        cost: new Decimal("1e1700"),
        unlocked() {return hasUpgrade("a",23)},
        effect(){return player.points.pow(0.01).add(1)},
        effectDisplay(){return `x${format(this.effect())}`}
      },
      34: {
        title: "Crustaceous Cheapskate",
        description: "Divide the booster cost based on prestige points.",
        cost: new Decimal("1e1830"),
        unlocked() {return hasUpgrade("a",23)},
        effect(){return player.p.points.pow(0.1).add(1)},
        effectDisplay(){return `/${format(this.effect())}`}
      },
      35: {
        title: "Inflation I",
        description: "<b>Self-Synergy</b> uses a better formula.<br>(^0.05 -> ^0.06)",
        cost: new Decimal("1e11000"),
        unlocked() {return hasUpgrade("a",23)},
      },
      41: {
        title: "Transcendental Tripler",
        description: "Gain 3x more transcension points.",
        cost: new Decimal("1e30000"),
        unlocked() {return hasUpgrade("t",15)},
      },
      42: {
        title: "Everlasting Tokens",
        description: "You're getting impatient, aren't you? Tokens no longer reset on transcension.",
        cost: new Decimal("1e31000"),
        unlocked() {return hasUpgrade("t",15)},
      },
      43: {
        title: "Shard Tickspeed",
        description: "Unlock Shard Tickspeed.",
        cost: new Decimal("1e51000"),
        unlocked() {return hasUpgrade("t",15)},
      },
      44: {
        title: "New Layer???",
        description: "We need to make boosters better! Unlock Super-Boosters.",
        cost: new Decimal("1e59000"),
        unlocked() {return hasUpgrade("t",15)},
      },
      45: {
        title: "The Other Prestige Key",
        description: "Unlock 3 new booster upgrades.",
        cost: new Decimal("6e69696"),
        unlocked() {return hasUpgrade("t",15)},
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
    13: {
        title: "Point Booster",
        cost(x) { return new Decimal("1e600").mul(new Decimal(1e10).pow(x)) },
        display() {return `Multiply point gain by 10x every time you buy this!\nTimes Bought: ${format(getBuyableAmount(this.layer, this.id))}\nCost: ${format(this.cost())}\nEffect: ${format(this.effect())}x points`},
        canAfford() {return player.p.points.gte(this.cost())},
        buy() {
            player.p.points = player.p.points.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        unlocked(){return hasUpgrade("a",21)},
        effect(x) {
          mult2 = new Decimal(x).gte(20)? new Decimal(10).pow(20).mul(new Decimal(2).pow(new Decimal(x).sub(20))):new Decimal(10).pow(x)
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
        done() { return player.p.points.gte(1000000) },
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
        unlocked() { return hasUpgrade("p",21) },
        toggles: [
          ["n","auto7"],
        ]
    },
  },
})
addLayer("a", {
    name: "ascension", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "A", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    passiveGeneration(){
      return hasMilestone("t", 5) ? 1 : 0
    },
    color: "#D2D900",
    requires: new Decimal("1e230"), // Can be a function that takes requirement increases into account
    resource: "ascension points", // Name of prestige currency
    baseResource: "prestige points", // Name of resource prestige is based on
    baseAmount() {return player.p.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.015, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if(hasUpgrade("a",13)) mult = mult.mul(upgradeEffect("a",13))
        if(hasAchievement("g",44)) mult = mult.mul(new Decimal(getBuyableAmount("n",11)).div(10).add(1))
        if(hasUpgrade("b",13)) mult = mult.mul(new Decimal(4).mul(hasUpgrade("b",11)?2:1).mul(hasUpgrade("b",12)?upgradeEffect("b",12):1).mul(hasUpgrade("b",23)?upgradeEffect("b",23):1).mul(player.sb.points.add(1).pow(hasUpgrade("b",31)?7:5)).mul(hasUpgrade("b",33)?upgradeEffect("b",33).eff:1).pow(player.b.points).pow(hasUpgrade("b",21)?2:1))
        if(hasUpgrade("a",24)) mult = mult.mul(100)
        mult = mult.mul(buyableEffect("to",21))
        if(hasAchievement("g",61) && player.a.total.gte(16)) mult = mult.mul(100)
        if(hasUpgrade("t",12)) mult = mult.mul(upgradeEffect("t",12))
        if(hasUpgrade("t",14)) mult = mult.mul(player.t.shards.pow(hasUpgrade("t",21)?10:0.5).add(1))
        if(hasUpgrade("t",22)) mult = mult.mul("1e500")
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    automate(){
      if (player.a.auto) {
        setBuyableAmount("a",11,tmp.a.buyables[11].canAfford?player.a.points.div("1e2300").log(1e50).floor().add(1):getBuyableAmount("a",11))
      }
      if (player.a.auto2) {
        setBuyableAmount("a",12,tmp.a.buyables[12].canAfford?player.a.points.div("1e18000").log("1e500").floor().add(1):getBuyableAmount("a",12))
      }
    },
    hotkeys: [
        {key: "a", description: "A: Reset for ascension points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasUpgrade("p",25) || player.a.total.gte(1) || player.t.total.gte(1)},
    doReset(layer) {

    if (!(layers[layer].row > this.row)) return

    let keep = []
    if(hasMilestone("t",0)) keep.push("milestones")
    if(hasMilestone("t",2)) keep.push("upgrades")

    layerDataReset(this.layer, keep)

    },
    branches: ["p"],
    upgrades: {
      11: {
        title: "The Divine",
        description: "You've become a god! Multiply point gain by 100.",
        cost: new Decimal(1),
      },
      12: {
        title: "Ascension Bonus",
        description: "Gain more prestige points based on total ascension points.",
        cost: new Decimal(4),
        unlocked() {return hasMilestone("a",2)},
        effect(){return player.a.total.gte("1e1100") ? new Decimal("1e550").mul(player.a.total.div("1e1100").pow(0.1)) : player.a.total.pow(0.5).add(1)},
        effectDisplay(){return `x${format(this.effect())}`}
      },
      13: {
        title: "Ascended Points",
        description: "Gain more ascension points based on points.",
        cost: new Decimal(10),
        unlocked() {return hasUpgrade("a",12)},
        effect(){return player.points.add(1).log10().div(50).add(1)},
        effectDisplay(){return `x${format(this.effect())}`}
      },
      14: {
        title: "Scott the Woz",
        description: "<i>'It's f*cking Mario Kart again!'</i><br><b>Virgin Upgrade Boost</b> is more effective.",
        cost: new Decimal(100),
        unlocked() {return hasUpgrade("a",12)},
      },
      15: {
        title: "Prestige Bonus Enhancement",
        description: "<b>Prestige Bonus</b> is more effective.",
        cost: new Decimal(2000),
        unlocked() {return hasUpgrade("a",14)},
      },
      21: {
        title: "Buyable Unlock II",
        description: "Unlock the 3rd prestige buyable.",
        cost: new Decimal(50000000),
        unlocked() {return hasUpgrade("a",15)},
      },
      22: {
        title: "Boosters",
        description: "You found a type of energy that can boost your production! Unlock Boosters.",
        cost: new Decimal(3e16),
        unlocked() {return hasUpgrade("a",21)},
      },
      23: {
        title: "The Prestige Key",
        description: "It's the key to success! Unlock 5 new prestige upgrades.",
        cost: new Decimal(5e25),
        unlocked() {return hasUpgrade("a",21)},
      },
      24: {
        title: "funny upgrade",
        description: "Gain 100x more ascension points.<br><i>'thank you, very cool'</i><br><i>-Barack Obama, Dec. 2nd, 2027</i>",
        cost: new Decimal(1e42),
        unlocked() {return hasUpgrade("a",23)},
      },
      25: {
        title: "Tokens",
        description: "You realized your achievements are worth more than you thought...Unlock Tokens.",
        cost: new Decimal(5e85),
        unlocked() {return hasUpgrade("a",24)},
      },
      31: {
        title: "Upgraded Generators",
        description: "You repaired your generators to make them more efficient, so now prestige tokens ^1.2.",
        cost: new Decimal(1e128),
        unlocked() {return hasUpgrade("a",25)},
      },
      32: {
        title: "Tax Fragility",
        description: "Taxes have gone down in your state, so the taxes softcap is weaker.",
        cost: new Decimal(1e170),
        unlocked() {return hasUpgrade("a",25)},
      },
      33: {
        title: "A New Type???",
        description: "It's time to strategize! Unlock Ascension Tokens.",
        cost: new Decimal(1e230),
        unlocked() {return hasUpgrade("b",22)},
      },
      34: {
        title: "Transcended Points",
        description: "Gain more transension points based on points.",
        cost: new Decimal("1e2550"),
        unlocked() {return hasUpgrade("t",15)},
        effect(){return player.points.add(1).log10().div(5000).add(1)},
        effectDisplay(){return `x${format(this.effect())}`}
      },
      35: {
        title: "Buyable Unlock III",
        description: "Unlock a buyable for Ascension.",
        cost: new Decimal("1e2575"),
        unlocked() {return hasUpgrade("t",15)},
      },
    },
    buyables: {
    11: {
        title: "Point Booster",
        cost(x) { return new Decimal("1e2300").mul(new Decimal(1e50).pow(x)) },
        display() {return `Multiply point gain by 1e100 every time you buy this!\nTimes Bought: ${format(getBuyableAmount(this.layer, this.id))}\nCost: ${format(this.cost())}\nEffect: ${format(this.effect())}x points`},
        canAfford() {return player.a.points.gte(this.cost())},
        buy() {
            player.a.points = player.a.points.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        unlocked(){return hasUpgrade("a",35)},
        effect(x) {
          mult2 = new Decimal(1e50).pow(x)
          return mult2
        },
    },
    12: {
        title: "Prestige Point Booster",
        cost(x) { return new Decimal("1e18000").mul(new Decimal("1e500").pow(x)) },
        display() {return `Multiply prestige point gain by 1e500 every time you buy this!\nTimes Bought: ${format(getBuyableAmount(this.layer, this.id))}\nCost: ${format(this.cost())}\nEffect: ${format(this.effect())}x prestige points`},
        canAfford() {return player.a.points.gte(this.cost())},
        buy() {
            player.a.points = player.a.points.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        unlocked(){return hasUpgrade("t",24)},
        effect(x) {
          mult2 = new Decimal("1e500").pow(x)
          return mult2
        },
    },
  },
      milestones: {
    0: {
        requirementDescription: "2 total ascension points",
        effectDescription: "Keep prestige milestones on Ascension. You earned those, you should keep 'em!",
        done() { return player.a.total.gte(2) },
    },
    1: {
        requirementDescription: "4 total ascension points",
        effectDescription: "Keep prestige upgrades on Ascension.",
        done() { return player.a.total.gte(4) },
    },
    2: {
        requirementDescription: "8 total ascension points",
        effectDescription: "Autobuy prestige buyables.",
        done() { return player.a.total.gte(8) },
        toggles: [
          ["p","auto"],
          ["p","auto2"],
        ]
    },
    3: {
        requirementDescription: "16 total ascension points",
        effectDescription: "Generate 100% of prestige point gain every second.",
        done() { return player.a.total.gte(16) },
    },
    4: {
        requirementDescription: "1e15 ascension points",
        effectDescription: "Autobuy the 3rd prestige buyable.",
        done() { return player.a.points.gte(1e15) },
        unlocked() { return hasUpgrade("a",21) },
        toggles: [
          ["p","auto3"],
        ]
    },
  },
})
addLayer("b", {
    name: "boosters", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "B", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    canBuyMax(){
      return hasMilestone("b", 1) ? 1 : 0
    },
    resetsNothing(){
      return hasMilestone("t", 3) ? 1 : 0
    },
    autoPrestige(){
      return player.b.auto ? 1 : 0
    },
    tabFormat: [
    ["display-text", () => `You have <h2 style="color: #0000FF; text-shadow: 0px 0px 10px #0000FF">${format(player.b.points)}</h2> boosters, multiplying ${hasUpgrade("b",13) ? `point, prestige point, and ascension point` : `point`} gain by <h2 style="color: #0000FF; text-shadow: 0px 0px 10px #0000FF">${format(new Decimal(4).mul(hasUpgrade("b",11)?2:1).mul(hasUpgrade("b",12)?upgradeEffect("b",12):1).mul(hasUpgrade("b",23)?upgradeEffect("b",23):1).mul(player.sb.points.add(1).pow(hasUpgrade("b",31)?7:5)).mul(hasUpgrade("b",33)?upgradeEffect("b",33).eff:1).pow(player.b.points).pow(hasUpgrade("b",21)?2:1))}</h2>x`],
    "prestige-button",
    ["display-text", () => `You have ${format(player.points)} points<br><br>`],
    "milestones",
    "buyables",
    "upgrades",
    ],
    color: "#0000FF",
    requires: new Decimal("1e2350"), // Can be a function that takes requirement increases into account
    resource: "boosters", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    base() {
      return new Decimal(1e50)
    },
    exponent: new Decimal(1.5),
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if(hasUpgrade("p",34)) mult = mult.div(upgradeEffect("p",34))
        if(hasUpgrade("b",22)) mult = mult.div(upgradeEffect("b",22))
        mult = mult.div(buyableEffect("to",22))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    position: 1,
    hotkeys: [
        {key: "b", description: "B: Reset for boosters", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasUpgrade("a",22) || player.b.total.gte(1)},
    doReset(layer) {

    if (!(layers[layer].row > this.row)) return

    let keep = []
    if(hasMilestone("t",0)) keep.push("milestones")
    if(hasMilestone("t",2)) keep.push("upgrades")

    layerDataReset(this.layer, keep)

    },
    branches: ["p"],
    upgrades: {
      11: {
        title: "Boosting To The Max",
        description: "You gave your boosters better conduction, which doubles the booster base.",
        cost: new Decimal(3),
      },
      12: {
        title: "Prestigious Boosters",
        description: "The booster base is multiplied by your prestige points at a reduced rate.",
        cost: new Decimal(4),
        effect(){return player.p.points.add(1).log(hasUpgrade("b",32)?5:10).div(100).add(1)},
        effectDisplay(){return `x${format(this.effect())}`}
      },
      13: {
        title: "Boosting Everything!",
        description: "Boosters also boost prestige point and ascension point gain.",
        cost: new Decimal(7),
        unlocked() {return hasUpgrade("b",12)},
      },
      21: {
        title: "Quadratics",
        description: "Square the booster multiplier.",
        cost: new Decimal(9),
        unlocked() {return hasUpgrade("p",34)},
      },
      22: {
        title: "Boosty Tokens",
        description: "The booster cost is divided based on prestige tokens.",
        cost: new Decimal(23),
        unlocked() {return hasUpgrade("a",25)},
        effect(){return player.to.ptokens.pow(hasUpgrade("b",32)?100:5)},
        effectDisplay(){return `/${format(this.effect())}`}
      },
      23: {
        title: "ASCENDED Boosters",
        description: "The booster base is multiplied based on ascension tokens.",
        cost: new Decimal(55),
        unlocked() {return hasUpgrade("p",35)},
        effect(){return player.to.atokens.sqrt().add(1)},
        effectDisplay(){return `x${format(this.effect())}`}
      },
      31: {
        title: "Super-Boosting To The Max",
        description: "Yay, we're back here again! Let's make super-boosters more effective.",
        cost: new Decimal(175),
        unlocked() {return hasUpgrade("p",45)},
      },
      32: {
        title: "Column Leader",
        description: "Make the two upgrades above more effective.",
        cost: new Decimal(225),
        unlocked() {return hasUpgrade("p",45)},
      },
      33: {
        title: "Shard & Booster Fusion",
        description: "<span style='font-size: 8px;'>It turns out that boosters and shards mutally benefit each other! Boosters and shards boost each other.</span>",
        cost: new Decimal(246),
        unlocked() {return hasUpgrade("p",45)},
        effect() {
          let eff = player.t.shards.pow(0.01).add(1)
          let eff2 = player.b.points.pow(2.5).add(1)
          return {
          eff, //upgradeEffect(layer, id).eff to access
          eff2, //like above but eff2 instead of eff
        }
        },
        effectDisplay(){return `Shards x${format(player.b.points.pow(2.5).add(1))}, Booster Base x${format(player.t.shards.pow(0.01).add(1))}`}
      },
    },
      milestones: {
    0: {
        requirementDescription: "2 boosters",
        effectDescription: "Keep prestige upgrades and prestige milestones on Booster resets.",
        done() { return player.b.points.gte(2) },
    },
    1: {
        requirementDescription: "7 boosters",
        effectDescription: "You can buy max boosters.",
        done() { return player.b.points.gte(7) },
    },
  },
})
addLayer("t", {
    name: "transcension", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "T", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    shards: new Decimal(0),
    produced: [new Decimal(0),new Decimal(0),new Decimal(0)]
    }},
    tabFormat: [
    "main-display",
    "prestige-button",
    ["display-text", () => `You have ${format(player.a.points)} ascension points`],
    ["display-text", () => `You have <h2 style="color: #C600D8; text-shadow: 0px 0px 10px #C600D8">${format(player.t.shards)}</h2> shards, multiplying ${hasUpgrade("t",14)?`point, prestige point, and ascension point`:`point and prestige point`} gain by ${format(player.t.shards.pow(hasUpgrade("t",21)?10:0.5).add(1))}x<br>Note: Token Upgrades are kept on transcension.<br><br>`],
    "clickables",
    "milestones",
    "buyables",
    "upgrades",
    "challenges",
    ],
    color: "#C600D8",
    requires: new Decimal("1e1000"), // Can be a function that takes requirement increases into account
    resource: "transcension points", // Name of prestige currency
    baseResource: "ascension points", // Name of resource prestige is based on
    baseAmount() {return player.a.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.002, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if(hasAchievement("g",65)) mult = mult.mul(2)
        if(hasUpgrade("p",41)) mult = mult.mul(3)
        if(hasUpgrade("a",34)) mult = mult.mul(upgradeEffect("a",34))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        let exp = new Decimal(hasMilestone("t",6) ? 1 : 0.000001)
        return exp
    },
    row: 3, // Row the layer is in on the tree (0 is the first row)
    position: 0,
    hotkeys: [
        {key: "t", description: "T: Reset for transcension points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return player.a.total.gte("1e900") || player.t.total.gte(1)},
     onPrestige() {
      if(!hasUpgrade("p",42)){
        player.to.ptokens = new Decimal(0);
        player.to.atokens = new Decimal(0);
        player.to.buyables[11] = new Decimal(0);
        player.to.buyables[12] = new Decimal(0);
        player.to.buyables[21] = new Decimal(0);
        player.to.buyables[22] = new Decimal(0);
      }
      player.t.shards = new Decimal(0);
      player.t.produced = [new Decimal(0),new Decimal(0),new Decimal(0)]
    },
    branches: ["a"],
    upgrades: {
      11: {
        title: "Transcendental Power",
        description: "Multiply prestige point gain by 1,000.",
        cost: new Decimal(1),
        unlocked(){return hasMilestone("t",0)}
      },
      12: {
        title: "Transcension Bonus",
        description: "Gain more ascension points based on total transcension points.",
        cost: new Decimal(1),
        unlocked(){return hasMilestone("t",0)},
        effect(){return player.t.total.add(1).cbrt().add(1)},
        effectDisplay(){return `x${format(this.effect())}`}
      },
      13: {
        title: "Shards+",
        description: "All shard generators are more effective based on total transcension points.",
        cost: new Decimal(20),
        unlocked(){return hasMilestone("t",6)},
        effect(){return player.t.total.add(1).pow(1.25).add(1)},
        effectDisplay(){return `x${format(this.effect())}`}
      },
      14: {
        title: "Divine Shards",
        description: "Shards boost ascension point gain.",
        cost: new Decimal(50),
        unlocked(){return hasMilestone("t",6)},
      },
      15: {
        title: "The Transcension Key",
        description: "Key to success? Unlock new upgrades???",
        cost: new Decimal(150),
        unlocked(){return hasUpgrade("t",14)},
      },
      21: {
        title: "Wait a minute...",
        description: "Shards are terrible! Greatly boost the shards effect.<br>(^0.5 -> ^10)",
        cost: new Decimal(1e6),
        unlocked(){return hasUpgrade("p",43)},
      },
      22: {
        title: "Ascension Point Multiplier",
        description: "Multiply ascension point gain by 1e200.",
        cost: new Decimal(1e28),
        unlocked(){return hasUpgrade("b",33)},
      },
      23: {
        title: "Shard Self-Synergy",
        description: "Gain more shards based on shards.",
        cost: new Decimal(1e33),
        unlocked(){return hasUpgrade("t",22)},
        effect(){return player.t.shards.add(1).pow(0.04).add(1)},
        effectDisplay(){return `x${format(this.effect())}`}
      },
      24: {
        title: "Buyable Unlock IV",
        description: "Unlock another buyable for Ascension.",
        cost: new Decimal(5e38),
        unlocked(){return hasUpgrade("t",22)},
      },
    },
    buyables: {
    11: {
        title: "Shard Generator 1",
        cost(x) { return new Decimal(1).mul(new Decimal(3).pow(x)) },
        display() {return `Generates shards based on its amount!\nAmount: ${format(getBuyableAmount(this.layer, this.id).add(player.t.produced[0]))}\nCost: ${format(this.cost())}\nMultiplier: ${format(this.effect())}x`},
        canAfford() {return player.t.points.gte(this.cost())},
        buy() {
            player.t.points = player.t.points.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        effect(x) {
          mult2 = new Decimal(1.5).pow(x)
          if(hasAchievement("g",62)) mult2 = mult2.mul(2)
          if(hasUpgrade("t",13)) mult2 = mult2.mul(upgradeEffect("t",13))
          mult2 = mult2.mul(buyableEffect("t",31))
          if(hasUpgrade("b",33)) mult2 = mult2.mul(upgradeEffect("b",33).eff2)
          if(hasUpgrade("t",23)) mult2 = mult2.mul(upgradeEffect("t",23))
          return mult2
        },
    },
    12: {
        title: "Shard Generator 2",
        cost(x) { return new Decimal(5).mul(new Decimal(5).pow(x)) },
        display() {return `Generates Shard Generator 1 based on its amount!\nAmount: ${format(getBuyableAmount(this.layer, this.id).add(player.t.produced[1]))}\nCost: ${format(this.cost())}\nMultiplier: ${format(this.effect())}x`},
        canAfford() {return player.t.points.gte(this.cost())},
        buy() {
            player.t.points = player.t.points.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        effect(x) {
          mult2 = new Decimal(1.5).pow(x)
          if(hasUpgrade("t",13)) mult2 = mult2.mul(upgradeEffect("t",13))
          mult2 = mult2.mul(buyableEffect("t",31))
          return mult2
        },
    },
    13: {
        title: "Shard Generator 3",
        cost(x) { return new Decimal(100).mul(new Decimal(10).pow(x)) },
        display() {return `Generates Shard Generator 2 based on its amount!\nAmount: ${format(getBuyableAmount(this.layer, this.id).add(player.t.produced[2]))}\nCost: ${format(this.cost())}\nMultiplier: ${format(this.effect())}x`},
        canAfford() {return player.t.points.gte(this.cost())},
        buy() {
            player.t.points = player.t.points.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        effect(x) {
          mult2 = new Decimal(1.5).pow(x)
          if(hasUpgrade("t",13)) mult2 = mult2.mul(upgradeEffect("t",13))
          mult2 = mult2.mul(buyableEffect("t",31))
          return mult2
        },
    },
    31: {
        title: "Shard Tickspeed",
        cost(x) { return new Decimal(100000).mul(new Decimal(4).pow(x)) },
        display() {return `Multiplies all other Shard Generators by 1.5x per purchase.\nAmount: ${format(getBuyableAmount(this.layer, this.id))}\nCost: ${format(this.cost())}\nMultiplier: ${format(this.effect())}x`},
        canAfford() {return player.t.points.gte(this.cost())},
        unlocked(){ return hasUpgrade("p",43) },
        buy() {
            player.t.points = player.t.points.sub(this.cost())
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        },
        effect(x) {
          mult2 = new Decimal(1.5).pow(x)
          return mult2
        },
    },
  },
      milestones: {
    0: {
        requirementDescription: "2 total transcension points",
        effectDescription: "Keep prestige, ascension, and booster milestones on reset, AND ascension token buyables no longer increase each other's costs.",
        done() { return player.t.total.gte(2) },
    },
    1: {
        requirementDescription: "3 total transcension points",
        effectDescription: "Keep prestige upgrades on reset.",
        done() { return player.t.total.gte(3) },
    },
    2: {
        requirementDescription: "4 total transcension points",
        effectDescription: "Keep ascension upgrades and booster upgrades on reset.",
        done() { return player.t.total.gte(4) },
    },
    3: {
        requirementDescription: "5 total transcension points",
        effectDescription: "Autobuy Boosters, and Boosters reset nothing.",
        done() { return player.t.total.gte(5) },
        toggles: [
          ["b","auto"],
        ]
    },
    4: {
        requirementDescription: "6 total transcension points",
        effectDescription: "Autobuy token buyables.",
        done() { return player.t.total.gte(6) },
        toggles: [
          ["to","auto"],
        ]
    },
    5: {
        requirementDescription: "7 total transcension points",
        effectDescription: "Gain 100% of ascension point gain every second, and gain 100x more prestige tokens and ascension tokens.",
        done() { return player.t.total.gte(7) },
    },
    6: {
        requirementDescription: "8 total transcension points",
        effectDescription: "You can gain more than 1 transcension point on reset.",
        done() { return player.t.total.gte(8) },
    },
    7: {
        requirementDescription: "1,000,000 transcension points",
        effectDescription: "Autobuy the first ascension buyable.",
        done() { return player.t.points.gte(1e6) },
        unlocked(){return hasUpgrade("p",43)},
        toggles: [
          ["a","auto"],
        ]
    },
    8: {
        requirementDescription: "1e45 transcension points",
        effectDescription: "Autobuy the second ascension buyable.",
        done() { return player.t.points.gte(1e45) },
        unlocked(){return hasUpgrade("t",24)},
        toggles: [
          ["a","auto2"],
        ]
    },
  },
    update(diff) {
      player.t.shards = player.t.shards.add(getBuyableAmount("t",11).add(player.t.produced[0]).mul(buyableEffect("t",11).mul(diff)))
      player.t.produced[0] = player.t.produced[0].add(getBuyableAmount("t", 12).add(player.t.produced[1]).mul(buyableEffect("t",11).mul(diff)))
      player.t.produced[1] = player.t.produced[1].add(getBuyableAmount("t", 13).add(player.t.produced[2]).mul(buyableEffect("t",11).mul(diff)))
    },
})
addLayer("sb", {
    name: "super-boosters", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "SB", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    tabFormat: [
    ["display-text", () => `You have <h2 style="color: #0000CC; text-shadow: 0px 0px 10px #0000CC">${format(player.sb.points)}</h2> super-boosters, multiplying the booster base by <h2 style="color: #0000CC; text-shadow: 0px 0px 10px #0000FF">${format(player.sb.points.add(1).pow(hasUpgrade("b",31)?15:5))}</h2>x`],
    "prestige-button",
    ["display-text", () => `You have ${format(player.b.points)} boosters<br><br>`],
    ],
    color: "#0000CC",
    requires: new Decimal("145"), // Can be a function that takes requirement increases into account
    resource: "super-boosters", // Name of prestige currency
    baseResource: "boosters", // Name of resource prestige is based on
    baseAmount() {return player.b.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    base() {
      return new Decimal(1.1)
    },
    exponent: new Decimal(1),
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 3, // Row the layer is in on the tree (0 is the first row)
    position: 1,
    hotkeys: [
        {key: "s", description: "S: Reset for super-boosters", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasUpgrade("p",44) || player.sb.total.gte(1)},
    branches: ["b"],
})