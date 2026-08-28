addLayer("d", {
    name: "descension", 
    symbol: "D", 
    position: 0, 
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "#ce7070",
    requires: new Decimal(10), 
    resource: "descension points", 
    baseResource: "points", 
    baseAmount() { return player.points }, 
    type: "normal", 
    exponent: 0.6, 
    gainMult() { 
        let mult = new Decimal(1); // Added "let" here
        if hasMilestone("b",0) mult = mult.times(2)
        if hasMilestone("b",1) mult = mult.times(1.5)

        return mult;
    },
    gainExp() { 
        return new Decimal(1);
    },
        upgrades: {
        11: {
                title: "doubler",
                description: "x2 point gain.",
                cost: new Decimal(1),
        },
        12: {
                title: "increaser",
                description: "descension points boosts points.",
                cost: new Decimal(10),
                    effect() {
        return player[this.layer].points.add(1).pow(0.5)
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
                13: {
                title: "tripler",
                description: "x3 point gain.",
                cost: new Decimal(30),
        },
                14: {
                title: "tripler^2",
                description: "x3 point gain.",
                cost: new Decimal(50),
        },
                15: {
                title: "tenfold",
                description: "x10 point gain.",
                cost: new Decimal(100),
        },
                16: {
                title: "another tenfold",
                description: "x10 point gain.",
                cost: new Decimal(200),
        },
                17: {
                title: "doubler^2",
                description: "x2 point gain.",
                cost: new Decimal(1000),
        },
                18: {
                title: "doubler^3",
                description: "x2 point gain.",
                cost: new Decimal(2000),
        },
                19: {
                title: "doubler^4",
                description: "x2 point gain.",
                cost: new Decimal(3500),
        },
                111: {
                title: "doubler.5",
                description: "x2.5 point gain.",
                cost: new Decimal(15000),
        },
                112: {
                title: "synergetically",
                description: "points boosts points",
                cost: new Decimal(44444),
                    effect() {
        return player.points.add(1).pow(0.1)
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
       },
                113: {
                title: "tripler^3",
                description: "x3 point gain.",
                cost: new Decimal("1.75e5"),
        },
                114: {
                title: "tripler^4",
                description: "x3 point gain.",
                cost: new Decimal("7e5"),
        },
                115: {
                title: "one more tenfold",
                description: "x10 point gain.",
                cost: new Decimal("2.5e6"),
        },
                116: {
                title: "variation",
                description: "x2.1 point gain.",
                cost: new Decimal("2.5e7"),
        },
                117: {
                title: "variation2",
                description: "x2.75 point gain.",
                cost: new Decimal("4.9e7"),
        },
                118: {
                title: "variation3",
                description: "x2.47 point gain.",
                cost: new Decimal("8.8e7"),
        },
                119: {
                title: "tripler^5",
                description: "x3 point gain.",
                cost: new Decimal("1.6e8"),
        },
                120: {
                title: "variation4",
                description: "x2.56 point gain.",
                cost: new Decimal("3.69e8"),
        },
                121: {
                title: "variation5",
                description: "x2.39 point gain.",
                cost: new Decimal("6.7e8"),
        },
                122: {
                title: "just one more tenfold before the big reset",
                description: "x10 point gain.",
                cost: new Decimal("8.7e8"),
        },
    },
    row: 0, 
    hotkeys: [
        {key: "d", description: "D: Reset for descension points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){ return true }
}),


addLayer("b", {
    name: "bolt", 
    symbol: "B", 
    position: 0, 
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "#84ff6b",
    requires: new Decimal(1e10), 
    resource: "bolts", 
    baseResource: "descension points", 
    baseAmount() { return player.points }, 
    type: "normal", 
    exponent: 0.4, 
    gainMult() { 
        let mult = new Decimal(1); // Added "let" here
        return mult;
    },
    gainExp() { 
        return new Decimal(1);
    },
    row: 1, 
    hotkeys: [
        {key: "b", description: "B: Reset for bolts", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){ return true }
    milestones: {
        0: {
                requirementDescription: "1 bolts",
                effectDescription: "x2 descension points",
                done() { return player[this.layer].points.gte(1) }
        },
        1: {
                requirementDescription: "11 bolts",
                effectDescription: "x2.5 points, x1.5 descension points",
                done() { return player[this.layer].points.gte(11) }
        },

        },
milestonePopups: false
})