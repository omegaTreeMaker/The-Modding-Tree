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
                cost: new Decimal(500),
        },
                18: {
                title: "doubler^3",
                description: "x2 point gain.",
                cost: new Decimal(600),
        },
                19: {
                title: "doubler^4",
                description: "x2 point gain.",
                cost: new Decimal(800),
        },
                110: {
                title: "doubler^5",
                description: "x2 point gain.",
                cost: new Decimal(1100),
        },
    },
    row: 0, 
    hotkeys: [
        {key: "d", description: "D: Reset for descension points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){ return true }
})